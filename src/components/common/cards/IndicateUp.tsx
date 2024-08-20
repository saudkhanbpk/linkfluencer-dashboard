import React from 'react';
import Indicate from './Indicate';

const IndicateUp: React.FC<{ percent: number }> = ({ percent }) => {
  return <Indicate percent={percent} color="#00AE3E" direction="up" />;
};

export default IndicateUp;
