import React from 'react';
import DropdownSelector from './DropdownSelector';
import { TimeInterval } from '../../types/types';
import { capitalizeFirstLetter } from '../../utils/caseUtils';

interface PeriodSelectorProps {
  limit: TimeInterval;
  setLimit: (value: TimeInterval) => void;
  isMobile: boolean;
}

const PeriodSelector: React.FC<PeriodSelectorProps> = ({ limit, setLimit, isMobile }) => {
  const periods: TimeInterval[] = ['day', 'week', 'year'];

  return isMobile ? (
    <DropdownSelector limit={limit} setLimit={setLimit} />
  ) : (
    <ul className="flex gap-3 items-center">
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
  );
};

export default PeriodSelector;
