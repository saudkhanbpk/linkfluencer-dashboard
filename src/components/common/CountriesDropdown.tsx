import React, { useEffect } from 'react';
import Dropdown from './Dropdown';
import { fetchCountyByIp } from '../../services/countryService';
import Loading from './Loading';

interface Country {
  name: string;
  iso2: string;
  dialCode: string;
  flag: string;
}

interface SearchParams {
  country?: string;
  [key: string]: any;
}

interface CountriesDropdownProps {
  countries: Country[];
  setSelectedDialCode: (dialCode: string) => void;
  selectedDialCode?: string;
  setSelectedFlag: (flag: string) => void;
  selectedFlag?: string;
  disabled?: boolean;
}

const CountriesDropdown: React.FC<CountriesDropdownProps> = ({
  countries,
  setSelectedDialCode,
  selectedDialCode,
  setSelectedFlag,
  selectedFlag,
  disabled,
}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const handleSelectCountry = (dialCode: string, flag: string) => {
    setSelectedDialCode(dialCode);
    setSelectedFlag(flag);
  };

  const findCountry = ({ country = 'us', ...props }: SearchParams) =>
    countries.find(el => el.iso2 === country);

  useEffect(() => {
  const fetchUserCountry = async () => {
    setIsLoading(true);
    try {
      const response = await fetchCountyByIp();
      const country = response?.data;
      const localCountry = findCountry(country) ?? findCountry({ country: 'us' })!;
      setSelectedDialCode(localCountry.dialCode);
      setSelectedFlag(localCountry.flag);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error('Error fetching user country:', error);
    }
  };

  if (!selectedDialCode && !selectedFlag) {
    fetchUserCountry();
  }
}, [countries, selectedDialCode, selectedFlag, setSelectedDialCode, setSelectedFlag]);

  return (
    <Dropdown
      side="left"
      disabled={disabled}
      label={
        <div className="flex items-center gap-2 cursor-pointer">
          {isLoading && !selectedFlag ? (
            
            <div>
              
            </div>
          ) : (
            <>
              <img
                src={ selectedFlag ? selectedFlag : 'logo192.png'}
                alt="selected flag"
                className="w-4 h-4 rounded-full"
              />
              <span className="rounded-l-full">{selectedDialCode}</span>
            </>
          )}
        </div>
      }
    >
      <ul className="max-h-60 overflow-y-scroll bg-white rounded shadow-lg w-[250px]">
        {countries.map((country) => (
          <li
            key={country.iso2}
            onClick={() => handleSelectCountry(country.dialCode, country.flag)}
            className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 px-2 py-1"
          >
            <img
              src={country.flag}
              alt={`${country.name} flag`}
              className="w-4 h-4 rounded-full"
            />
            <span className='whitespace-nowrap'>{country.name}</span>
            <span>{`(${country.dialCode})`}</span>
          </li>
        ))}
      </ul>
    </Dropdown>
  );
};

export default CountriesDropdown;
