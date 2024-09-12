import axiosInstance from '../config/axiosConfig';
import { IUser } from '../interfaces/User';
import { TimeInterval } from '../types/types';

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
    console.error('Error when getting user', error);
    return null;
  }
};

export const ClickLeft = async (userId: string)=> {
  try {
    const response = await axiosInstance.get(`/users/${userId}/clicks-left`);

    return response.data;
  } catch (error) {
    console.error('Error when fetching clicks left', error);
    return null;
  }
};

export const TotalClicks = async (userId: string, interval: TimeInterval)=> {
  try {
    const response = await axiosInstance.get(`/users/${userId}/total-clicks`,{
      params: {interval},
    });

    return response.data;
  } catch (error) {
    console.error('Error when fetching clicks left', error);
    return null;
  }
};

export const TopPerformingSources = async (userId: string, interval: TimeInterval)=> {
  try {
    const response = await axiosInstance.get(`/users/${userId}/top-5-best-performing-platforms`,{
      params: {interval},
    });

    return response.data;
  } catch (error) {
    console.error('Error when fetching top performing sources', error);
    return null;
  }
};

export const TopPerformingPlatform = async (userId: string, interval: TimeInterval)=> {
  try {
    const response = await axiosInstance.get(`/users/${userId}/best-performing-platform`,{
      params: {interval},
    });

    return response.data;
  } catch (error) {
    console.error('Error when fetching top performing sources', error);
    return null;
  }
};

export const TopCountries = async (userId: string, interval: TimeInterval)=> {
  try {
    const response = await axiosInstance.get(`/users/${userId}/top-countries`,{
      params: {interval},
    });

    return response.data;
  } catch (error) {
    console.error('Error when fetching top country', error);
    return null;
  }
};

export const TopCities = async (userId: string, interval: TimeInterval)=> {
  try {
    const response = await axiosInstance.get(`/users/${userId}/top-city`,{
      params: {interval},
    });

    return response.data;
  } catch (error) {
    console.error('Error when fetching top country', error);
    return null;
  }
};

export const AverageTimeToEngage = async (userId: string, interval: TimeInterval)=> {
  try {
    const response = await axiosInstance.get(`/users/${userId}/top-average-time-to-engage`,{
      params: {interval},
    });

    return response.data;
  } catch (error) {
    console.error('Error when fetching average time to engage', error);
    return null;
  }
};

export const UserUpdate = async (userId: string, values:any)=> {
  try {
    const response = await axiosInstance.put(`/users/${userId}`, values);

    return response.data;
  } catch (error) {
    console.error('Error when fetching user', error);
    return null;
  }
};

export const UserPassword = async (userId: string, values:any)=> {
  try {
    const response = await axiosInstance.put(`/users/${userId}/password`, values);
    return response.data;
  } catch (error) {
    console.error('Error when fetching user', error);
    return null;
  }
};

export const UserIntervalVisit = async (userId: string, interval: TimeInterval)=> {
  try {
    const response = await axiosInstance.get(`/users/${userId}/clicks-by-user-interval`, {
      params: {interval},
    });

    return response.data;
  } catch (error) {
    console.error('Error when fetching user visits', error);
    return null;
  }
};

export const ProfileCompletion = async (userId: string)=> {
  try {
    const response = await axiosInstance.get(`/users/${userId}/profile-completion`);

    return response.data;
  } catch (error) {
    console.error('Error when fetching user profile completion', error);
    return null;
  }
};
