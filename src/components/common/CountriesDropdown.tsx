import React from 'react';
import Dropdown from './Dropdown';

interface Country {
  name: string;
  iso2: string;
  dialCode: string;
  flag: string;
}

interface CountriesDropdownProps {
  countries: Country[];
  setSelectedDialCode: (dialCode: string) => void;
  selectedDialCode?: string;
  setSelectedFlag: (flag: string) => void;
  selectedFlag?: string;
}

const CountriesDropdown: React.FC<CountriesDropdownProps> = ({
  countries,
  setSelectedDialCode,
  selectedDialCode,
  setSelectedFlag,
  selectedFlag,
}) => {
  const handleSelectCountry = (dialCode: string, flag: string) => {
    setSelectedDialCode(dialCode);
    setSelectedFlag(flag);
  };

  return (
    <Dropdown
      side="left"
      label={
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src={selectedFlag || countries[10]?.flag}
            alt="selected flag"
            className="w-4 h-4 rounded-full"
          />
          <span className="rounded-l-full">
            {selectedDialCode || countries[10]?.dialCode}
          </span>
        </div>
      }
    >
      <ul className="max-h-60 overflow-y-auto bg-white rounded shadow-lg">
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
            <span>{country.name}</span>
            <span>{`(${country.dialCode})`}</span>
          </li>
        ))}
      </ul>
    </Dropdown>
  );
};

export default CountriesDropdown;
