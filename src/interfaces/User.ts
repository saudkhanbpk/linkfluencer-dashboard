import { AuthProvider, UserRole, UserStatus } from '../types/enums';

export interface IUser extends Document {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  status: UserStatus;
  photoPath?: string;
  authProvider: AuthProvider;
  authProviderId?: string;
  gender?: string;
  country?: string;
  city?: string;
  mobileNumber?: string;
  address?: string;
  birthDate?: Date;
  role: UserRole;
  brand?: string;
  activationToken?: string;
  otpCode?: string;
  otpExpiry?: Date;
}
