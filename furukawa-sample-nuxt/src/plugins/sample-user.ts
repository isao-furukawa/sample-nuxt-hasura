export interface User {
  email: string;
  password: string;
  name: string;
  organization_id: string;
  role: string;
}

export const sampleUsers: User[] = [
  { email: 'admin@example.com', password: 'admin', name: 'Isao Furukawa', organization_id: '4', role: 'admin' },
  { email: 'japan1@example.com', password: 'password1', name: 'Taro Yamada', organization_id: '1', role: 'editor' },
  { email: 'japan2@example.com', password: 'password2', name: 'Hanako Takahashi', organization_id: '1', role: 'viewer' },
  { email: 'japan3@example.com', password: 'password3', name: 'Kouta Motegi', organization_id: '1', role: 'anonymous' },
  { email: 'philippines4@example.com', password: 'password4', name: 'Juan Dela Cruz', organization_id: '2', role: 'editor' },
  { email: 'philippines5@example.com', password: 'password5', name: 'Pedro Santos', organization_id: '2', role: 'viewer' },
  { email: 'vietnam6@example.com', password: 'password6', name: 'Lan Nguyen', organization_id: '3', role: 'editor' },
  { email: 'vietnam7@example.com', password: 'password7', name: 'Hai Pham', organization_id: '3', role: 'viewer' },
];