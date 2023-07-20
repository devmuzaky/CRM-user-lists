export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export const EMPTY_USER: User = {
  id: 0,
  email: '',
  first_name: '',
  last_name: '',
  avatar: ''
}
