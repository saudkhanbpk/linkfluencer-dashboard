import React from 'react';
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
  ShareFilledIcon,
} from '../../svg';

const socialIconsList = [
  {
    icon: (
      <FacebookIcon className="size-8 text-[#113E53]" onClick={undefined} />
    ),
    label: 'Facebook',
  },
  {
    icon: (
      <InstagramIcon className="size-8 text-[#113E53]" onClick={undefined} />
    ),
    label: 'Instagram',
  },
  {
    icon: <TwitterIcon className="size-8 text-[#113E53]" onClick={undefined} />,
    label: 'Twitter',
  },
  {
    icon: (
      <WhatsappIcon className="size-8 text-[#113E53]" onClick={undefined} />
    ),
    label: 'Whatsapp',
  },
  {
    icon: <EmailIcon className="size-8 text-[#113E53]" onClick={undefined} />,
    label: 'E-mail',
  },
  {
    icon: (
      <ShareFilledIcon className="size-8 text-[#113E53]" onClick={undefined} />
    ),
    label: 'More',
  },
];

const SocialIcons: React.FC = () => (
  <div className="flex justify-start gap-6 mt-8 mb-16">
    {socialIconsList.map((val, index) => (
      <div key={index} className="text-center">
        <div className="p-6 rounded-full bg-[#9D9D9D0A] mb-2">{val.icon}</div>
        <span className="text-[#113E53]">{val.label}</span>
      </div>
    ))}
  </div>
);

export default SocialIcons;
