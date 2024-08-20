import React from 'react';
import Indicate from './Indicate';

const IndicateDown: React.FC<{ percent: number }> = ({ percent }) => {
  return <Indicate percent={percent} color="#AE0000" direction="down" />;
};

export default IndicateDown;
