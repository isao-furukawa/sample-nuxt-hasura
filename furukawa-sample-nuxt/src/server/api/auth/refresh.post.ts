import { sign, verify } from 'jsonwebtoken';
import type { User } from '~/plugins/sample-user';
export const { jwtSecretKey } = useRuntimeConfig();


interface JwtPayload extends User {
  scope: Array<'test' | 'user'>;
  exp: number;
}

export default eventHandler(async (event) => {
  const body = await readBody<{ refreshToken: string }>(event);

  if (!body.refreshToken) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Unauthorized, no refreshToken in payload',
    });
  }

  const decoded = verify(body.refreshToken, jwtSecretKey) as JwtPayload | undefined;
  console.log('decoded', decoded);

  if (!decoded) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Unauthorized, refreshToken can`t be verified',
    });
  }
  const user: User = {
    email: decoded.email,
    name: decoded.name,
    password: decoded.password,
    organization_id: decoded.organization_id,
    role: decoded.role,
  };
  const customClaims = {
    'https://hasura.io/jwt/claims': {
      'x-hasura-default-role': 'anonymous',
      'x-hasura-allowed-roles': ['admin', 'editor', 'viewer', 'anonymous'],
      'x-hasura-role': user.role,
      'x-hasura-organization-id': user.organization_id,
    },
    name: user.name,
    organization_id: user.organization_id,
    role: user.role,
  };


  const accessToken = sign(
    {
      ...customClaims,
      iss: 'MyLocalAuthServer',
    },
    jwtSecretKey,
    { algorithm: 'RS256', expiresIn: '2h' }
  );
  const refreshToken = sign(
    {
      ...customClaims,
      iss: 'MyLocalAuthServer',
    },
    jwtSecretKey,
    { algorithm: 'RS256', expiresIn: '7d' }
  );

  return {
    token: {
      accessToken,
      refreshToken,
    },
    loginUser: { name: user.name, organization_id: user.organization_id, role: user.role },
  };
});
