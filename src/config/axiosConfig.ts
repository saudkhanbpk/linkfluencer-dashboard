import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = 'http://localhost:5005';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshed = await refreshAccessToken();
        if (refreshed) {
          return api(originalRequest);
        } else {
          handleLogout();
          toast.error('Session expired, please log in again.');
        }
      } catch (refreshError) {
        handleLogout();
        toast.error('Session expired, please log in again.');
        window.location.href = 'http://localhost:3000/signin';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export const refreshAccessToken = async () => {
  try {
    const response = await api.get('/auth/refreshAccessToccken');

    if (response.status !== 200) {
      throw new Error('Failed to refresh token');
    }

    return true;
  } catch (error) {
    console.error('Error refreshing token:', error);
    return false;
  }
};

export const handleLogout = async () => {
  try {
    await api.post('/auth/logout');
    updateUserState(null);
    window.location.href = 'http://localhost:3000/signin';
    toast.info('You have been logged out.');
  } catch (error) {
    window.location.href = 'http://localhost:3000/signin';
    console.error('Logout failed:', error);
  }
};

const updateUserState = (user = null) => {
  // Implement state management here, e.g., Redux dispatch or Context API update
  // Example: dispatch({ type: 'SET_USER', payload: user });
};

export default api;
