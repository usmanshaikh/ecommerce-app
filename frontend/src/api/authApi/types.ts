interface User {
  _id: string;
  email: string;
  isEmailVerified: boolean;
}

interface Token {
  token: string;
  expires: string;
}

interface Tokens {
  access: Token;
  refresh: Token;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  tokens: Tokens;
}

export interface RegisterPayload {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
export interface RegisterResponse extends User {}

export interface RefreshResponse {
  access: Token;
  refresh: Token;
}
