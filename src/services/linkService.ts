import axiosInstance from '../config/axiosConfig';
import { ILink } from '../interfaces/Link';
import { TimeInterval } from '../types/types';

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

export const updateLink = (userId: string, link: ILink) => {
  try {
    return axiosInstance.put(`/users/${userId}/links/${link._id}`, {
      shortUrl: link.shortUrl,
      tags: link.tags,
    });
  } catch (error) {
    console.error('Error when updating link', error);
    return null;
  }
};

export const deleteLinks = (userId: string, linksId: string[]) => {
  const data = {
    linkIds: linksId,
  };
  try {
    return axiosInstance.delete(`/users/${userId}/links`, {
      data,
    });
  } catch (error) {
    console.error('Error when creating link', error);
    return null;
  }
};

export const getTotalClicksForLink = async (
  userId: string,
  linkId: string,
): Promise<any | null> => {
  try {
    const response = await axiosInstance.get(
      `/users/${userId}/links/${linkId}/total-clicks`,
    );
    return response.data;
  } catch (error) {
    console.error('Error when fetching clicks for link', error);
    return null;
  }
};

export const getClicksTrendForLink = async (
  userId: string,
  linkId: string,
): Promise<any | null> => {
  try {
    const response = await axiosInstance.get(
      `/users/${userId}/links/${linkId}/clicks-trend`,
    );
    return response.data;
  } catch (error) {
    console.error('Error when fetching clicks trend for link', error);
    return null;
  }
};

export const getTopCountryByLink = async (
  userId: string,
  linkId: string,
): Promise<any | null> => {
  try {
    const response = await axiosInstance.get(
      `/users/${userId}/links/${linkId}/top-country`,
    );
    return response.data;
  } catch (error) {
    console.error('Error when fetching top country for link', error);
    return null;
  }
};

export const getTopCityByLink = async (
  userId: string,
  linkId: string,
): Promise<any | null> => {
  try {
    const response = await axiosInstance.get(
      `/users/${userId}/links/${linkId}/top-city`,
    );
    return response.data;
  } catch (error) {
    console.error('Error when fetching top city for link', error);
    return null;
  }
};

export const getBestAverageTimeToEngageByLink = async (
  userId: string,
  linkId: string,
): Promise<any | null> => {
  try {
    const response = await axiosInstance.get(
      `/users/${userId}/links/${linkId}/top-average-time-to-engage`,
    );
    return response.data;
  } catch (error) {
    console.error(
      'Error when fetching best average time to engage for link',
      error,
    );
    return null;
  }
};

export const UserVisit = async (
  userId: string,
  linkId: string,
  interval: TimeInterval,
) => {
  try {
    const response = await axiosInstance.get(
      `/users/${userId}/links/${linkId}/clicks-by-interval`,
      {
        params: { interval },
      },
    );

    return response.data;
  } catch (error) {
    console.error('Error when fetching user visits', error);
    return null;
  }
};

export const getTopSources = async (
  userId: string,
  interval?: TimeInterval,
) => {
  try {
    const response = await axiosInstance.get(
      `/users/${userId}/links/top-apps`,
      {
        params: { interval },
      },
    );

    return response.data;
  } catch (error) {
    console.error('Error when fetching top sources', error);
    return null;
  }
};


export const subscribePlan = async (
  userId: string,
  data:any
) => {
  try {
    const response = await axiosInstance.post(
      `/users/${userId}/subscribe`,data
    );

    return response.data;
  } catch (error) {
    console.error('Error when fetching top sources', error);
    return null;
  }
};

export const bulkUpload = async (
  userId: string,
  links:string[]
) =>{

}
