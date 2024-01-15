import { sign } from 'jsonwebtoken';
import { sampleUsers } from '~/plugins/sample-user';
import { getServerSession } from '#auth';

export const { jwtSecretKey } = useRuntimeConfig();

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);
  if (!jwtSecretKey) {
    throw new Error('JWT secret key is not defined');
  }

  // ユーザーデータの検証
  const user = sampleUsers.find((user) => user.email === email && user.password === password);

  if (user) {
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
      loginUser: { email: user.email, name: user.name, organization_id: user.organization_id, role: user.role },
    };
  } else {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' });
  }
});
