import type { Address } from '../types';

export interface MyProfileResponse {
  _id: string;
  user: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: Address;
}

export interface UpdateProfilePayload {
  firstName: string;
  lastName: string;
  phone: string;
  address: Address;
}
