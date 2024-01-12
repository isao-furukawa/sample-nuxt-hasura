import { sign } from 'jsonwebtoken';
import { sampleUsers } from '~/plugins/sample-user';
export const { jwtSecretKey } = useRuntimeConfig();

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);
  // const { jwtSecretKey } = useRuntimeConfig();
  if (!jwtSecretKey) {
    throw new Error('JWT secret key is not defined');
  }

  // ユーザーデータの検証
  const user = sampleUsers.find((user) => user.email === email && user.password === password);

  if (user) {
    const customClaims = {
      'https://hasura.io/jwt/claims': {
        'x-hasura-default-role': 'anonymous',
        'x-hasura-allowed-roles': ['admin', 'viewer', 'anonymous'],
      },
    };
    const accessToken = sign(
      {
        ...customClaims,
        iss: 'MyLocalAuthServer',
      },
      jwtSecretKey,
      { algorithm: 'RS256', expiresIn: '1h' }
    );
    return {
      accessToken,
      user: { email: user.email, name: user.name, role: user.role },
    };
  } else {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' });
  }
});