import { useContext, useEffect, useState } from 'react';
import {
  CrossIcon,
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  CopyIcon,
  ShareFilledIcon,
  TwitterIcon,
  WhatsappIcon,
} from '../../../svg';
import Tooltip from '../ToolTip';
interface Prop {
  handleShareModalClose?: () => void;
  link: string;
}

const socialIconsList = [
  {
    icon: (
      <FacebookIcon className={'size-8 text-[#113E53]'} onClick={undefined} />
    ),
    label: 'Facebook',
  },
  {
    icon: (
      <InstagramIcon className={'size-8 text-[#113E53]'} onClick={undefined} />
    ),
    label: 'Instagram',
  },
  {
    icon: (
      <TwitterIcon className={'size-8 text-[#113E53]'} onClick={undefined} />
    ),
    label: 'Twitter',
  },
  {
    icon: (
      <WhatsappIcon className={'size-8 text-[#113E53]'} onClick={undefined} />
    ),
    label: 'Whatsapp',
  },
  {
    icon: <EmailIcon className={'size-8 text-[#113E53]'} onClick={undefined} />,
    label: 'E-mail',
  },
  {
    icon: (
      <ShareFilledIcon
        className={'size-8 text-[#113E53]'}
        onClick={undefined}
      />
    ),
    label: 'More',
  },
];

const copyToClipboard = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log('Text copied successfully!');
    })
    .catch((err) => {
      console.log('Failed to copy text.');
    });
};
const LinkShareCard: React.FC<Prop> = ({ handleShareModalClose, link }) => {
  return (
    <div className="md:w-[600px]">
      <div className="flex justify-between mb-6">
        <span className="font-content text-[#113e53]">Share</span>
        <CrossIcon
          className={'size-5 cursor-pointer'}
          onClick={handleShareModalClose}
        />
      </div>
      <div className="flex justify-start gap-6 mt-8 mb-16">
        {socialIconsList.map((val, index) => {
          return (
            <div className="text-center">
              <div className="p-6 rounded-full bg-[#9D9D9D0A] mb-2">
                {val.icon}
              </div>
              <span className="text-[#113E53]">{val.label}</span>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <span className=" text-neutral-500">Or share with link</span>
      </div>
      <div className="flex items-center p-2 my-5 rounded-3xl bg-[#F4F4F4] justify-between">
        <span>{link ?? '-'}</span>
        <Tooltip text={'copy'}>
          <CopyIcon
            className={
              'size-12 border cursor-pointer p-3 rounded-full bg-white'
            }
            onClick={() => {
              copyToClipboard(
                'https://www.figma.com/file/NlfVhYygR9mAQasassdsada/Share...',
              );
            }}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default LinkShareCard;
