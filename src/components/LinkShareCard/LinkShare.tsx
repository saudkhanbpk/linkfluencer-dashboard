import React from 'react';
import { CrossIcon } from '../../svg';
import SocialIcons from '../common/SocialIcons';
import ShareLink from './ShareLink';
interface Prop {
  handleShareModalClose?: () => void;
}

const LinkShareCard: React.FC<Prop> = ({ handleShareModalClose }) => {
  return (
    <div className="md:w-[600px]">
      <div className="flex justify-between mb-6">
        <span className="font-content text-[#113e53]">Share</span>
        <CrossIcon
          className="size-5 cursor-pointer"
          onClick={handleShareModalClose}
        />
      </div>
      <SocialIcons />
      <ShareLink />
    </div>
  );
};

export default LinkShareCard;
