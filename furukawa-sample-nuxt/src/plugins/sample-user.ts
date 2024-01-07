interface User {
  email: string;
  password: string;
  name: string;
  role: string;
  gender?: string;
}

export const sampleUsers: User[] = [
  { email: 'japan@example.com', password: 'password1', name: 'Taro Yamada', role: 'admin' },
  { email: 'philippines1@example.com', password: 'password2', name: 'Juan Dela Cruz', role: 'manager' },
  { email: 'philippines2@example.com', password: 'password3', name: 'Pedro Santos', role: 'worker' },
  { email: 'vietnam1@example.com', password: 'password4', name: 'Lan Nguyen', role: 'manager', gender: 'female' },
  { email: 'vietnam2@example.com', password: 'password5', name: 'Hai Pham', role: 'worker' },
];