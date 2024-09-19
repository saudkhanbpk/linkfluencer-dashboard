import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (token) {
      prom.resolve(api(prom.config));
    } else {
      prom.reject(error);
    }
  });

  failedQueue = [];
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject, config: originalRequest });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const refreshed = await refreshAccessToken();
        isRefreshing = false;
        processQueue(null, refreshed);
        return api(originalRequest);
      } catch (refreshError) {
        isRefreshing = false;
        processQueue(refreshError, null);
        handleLogout();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export const refreshAccessToken = async () => {
  try {
    const response = await api.get('/auth/refreshAccessToken');

    if (response.status !== 200) {
      throw new Error('Failed to refresh token');
    }

    return response.data.accessToken;
  } catch (error) {
    console.error('Error refreshing token:', error);
    return null;
  }
};

export const handleLogout = async () => {
  try {
    await api.post('/auth/logout');
    updateUserState(null);
    window.location.href = `/signin`;
  } catch (error) {
    window.location.href = `/signin`;
    console.error('Logout failed:', error);
  }
};

const updateUserState = (user = null) => {
  // todo
};

export default api;
