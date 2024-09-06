import axiosInstance from '../config/axiosConfig';
import { ILink } from '../interfaces/Link';

export const getUserLinks = async (
  userId: string,
  filters = {},
): Promise<any | null> => {
  try {
    const response = await axiosInstance.get<ILink>(`/users/${userId}/links`, {
      params: {
        ...filters,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error when fetching user', error);
    return null;
  }
};

export const createLink = (userId: string, link: string) => {
  try {
    return axiosInstance.post(`/users/${userId}/links`, {
      originalUrl: link,
    });
  } catch (error) {
    console.error('Error when creating link', error);
    return null;
  }
};
