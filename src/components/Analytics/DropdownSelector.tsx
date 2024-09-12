import React from 'react';
import Dropdown from '../common/Dropdown';
import { FilterIcon } from '../../svg';
import { TimeInterval } from '../../types/types';
import { capitalizeFirstLetter } from '../../utils/caseUtils';

interface DropdownSelectorProps {
  limit: TimeInterval;
  setLimit: (value: TimeInterval) => void;
}

const DropdownSelector: React.FC<DropdownSelectorProps> = ({
  limit,
  setLimit,
}) => {
  const periods: TimeInterval[] = ['day', 'week', 'year'];

  return (
    <Dropdown
      label={
        <div className="flex gap-2 items-center">
          <span className="text-[#4D494F] font-header">
            {capitalizeFirstLetter(limit)}
          </span>
          <FilterIcon className="size-4" />
        </div>
      }
      side="right"
    >
      <ul className="bg-white shadow-md border py-2 rounded-2xl font-content">
        {periods.map((period) => (
          <li
            key={period}
            onClick={() => setLimit(period)}
            className={`${
              limit === period ? 'text-blue-500' : 'text-[#9B919D]'
            } cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100`}
          >
            {capitalizeFirstLetter(period)}
          </li>
        ))}
      </ul>
    </Dropdown>
  );
};

export default DropdownSelector;
