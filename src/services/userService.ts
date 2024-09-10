import axiosInstance from '../config/axiosConfig';
import { IUser } from '../interfaces/User';

export const fetchUser = async (): Promise<any | null> => {
  try {
    const response = await axiosInstance.get<IUser>('/auth/me');

    return response.data;
  } catch (error) {
    console.error('Error when fetching user', error);
    return null;
  }
};

export const UserProfile = async (userId: string)=> {
  try {
    const response = await axiosInstance.get(`/users/${userId}`);

    return response.data;
  } catch (error) {
    console.error('Error when fetching user', error);
    return null;
  }
};
