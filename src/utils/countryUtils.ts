import axios from 'axios';
import countries from '../data/countries.json';
import { defaultFavicon } from './iconUtils';

export const getCountryFlag = async (input: string) => {
  const search = input.toLowerCase();
  for (const country of countries) {
    if (country.name.toLowerCase() === search || country.iso2.toLowerCase() === search || country.iso3.toLowerCase() === search) {
      try {
        const response = await axios.get(country.flag);
        if (response.status === 200) {
          return country.flag;
        }
      } catch (error) {
        console.error('Error fetching the flag:', error);
      }
    }
  }
  return defaultFavicon;
};