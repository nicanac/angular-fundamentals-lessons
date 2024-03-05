import { Address } from './address';
import { Company } from './company';
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
  phone: string;
  address: Address;
  company: Company;
}
