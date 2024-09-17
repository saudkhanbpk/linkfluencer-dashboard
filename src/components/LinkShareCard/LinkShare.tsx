import React from 'react';
import { CrossIcon } from '../../svg';
import SocialIcons from '../common/SocialIcons';
import ShareLink from './ShareLink';
interface Prop {
  handleShareModalClose?: () => void;
  link: string;
}

const LinkShareCard: React.FC<Prop> = ({
  handleShareModalClose,
  link = '',
}) => {
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
      <ShareLink link={link} />
    </div>
  );
};

export default LinkShareCard;
