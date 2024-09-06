import axiosInstance from '../config/axiosConfig';

interface User {
  id: string;
  name: string;
  email: string;
}

export const fetchUser = async (): Promise<any | null> => {
  try {
    const response = await axiosInstance.get<User>('/auth/me');
    
    return response.data;
  } catch (error) {
    console.error('Error when fetching user', error);
    return null;
  }
};