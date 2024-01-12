type User = {
  name: string;
  email: string;
  role: string;
};
export const useLoginUserState = () => useState<User | null>('user', () => null);
