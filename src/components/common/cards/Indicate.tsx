import React from 'react';
import IndicateDown from './indicateDown';
import IndicateUp from './IndicateUp';

interface IndicateProps {
  percent: number;
  direction: 'up' | 'down';
}

const Indicate: React.FC<IndicateProps> = ({ percent, direction }) => {
  return direction === 'up' ? (
    <IndicateUp percent={percent} />
  ) : (
    <IndicateDown percent={percent} />
  );
};
export default Indicate;
