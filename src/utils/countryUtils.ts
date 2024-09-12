import countries from '../data/countries.json';
import { defaultFavicon } from './iconUtils';

export const getCountryFlag = (input: string) => {
  const search = input.toLowerCase();
  for (const country of countries) {
    if (
      country.name.toLowerCase() === search ||
      country.iso2.toLowerCase() === search ||
      country.iso3.toLowerCase() === search
    ) {
      return `data:image/svg+xml;utf8,${encodeURIComponent(country.flag)}`;
    }
  }
  return defaultFavicon;
};

export const getCountriesData = () => {
  return countries
    .map((country) => ({
      name: country.name,
      iso2: country.iso2,
      iso3: country.iso3,
      dialCode: country.dial_code,
      flag: `data:image/svg+xml;utf8,${encodeURIComponent(country.flag)}`,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
};
