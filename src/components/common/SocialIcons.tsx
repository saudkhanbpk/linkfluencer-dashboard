import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
  ShareFilledIcon,
} from "../../svg";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  EmailShareButton,
  LinkedinIcon,
} from "react-share";

interface props {
  link: string;
}
const SocialIcons: React.FC<props> = ({ link }) => {
  // const handleShare = (appName: keyof typeof deeplinks, data: string) => {
  //   const userAgent = navigator.userAgent || navigator.vendor;
  //   const isMobile =
  //     /android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent);
  //   console.log({ appName, data });

  //   const deeplinks: {
  //     [key: string]: {
  //       mobile: string;
  //       desktop: string;
  //     };
  //   } = {
  //     facebook: {
  //       mobile: `fb://share/?u=${data}`,
  //       desktop: `https://www.facebook.com/sharer/sharer.php?u=${data}`,
  //     },
  //     instagram: {
  //       mobile: `instagram://share/?u=${data}`,
  //       desktop: `https://www.instagram.com/direct/new/?text=${data}`,
  //     },
  //     twitter: {
  //       mobile: `twitter://post?text=${data}`,
  //       desktop: `https://twitter.com/intent/tweet?text=${data}`,
  //     },
  //     whatsapp: {
  //       mobile: `whatsapp://send?text=${data}`,
  //       desktop: `https://web.whatsapp.com/send?text=${data}`,
  //     },
  //   };
  //   if (isMobile) {
  //     if (deeplinks[appName] && deeplinks[appName].mobile) {
  //       window.location.href = deeplinks[appName].mobile;
  //     } else {
  //       console.error(`Invalid app name: ${appName}`);
  //     }
  //   } else {
  //     if (deeplinks[appName] && deeplinks[appName].desktop) {
  //       window.open(deeplinks[appName].desktop, "_blank");
  //     } else {
  //       console.error(`Invalid app name: ${appName}`);
  //     }
  //   }
  // };
  const data = "this is the data";
  const twitterMessageLink = `https://twitter.com/messages/compose?text=${encodeURIComponent(link)}`;
  const instagramDirectLink = `https://www.instagram.com/direct/new/?text=${encodeURIComponent(link)}`;
  const socialIconsList = [
    {
      icon: (
        <FacebookShareButton
          url={`${process.env.REACT_APP_WEBSITE_DOMAIN}/link`}
          title="this is facebook"
        >
          <FacebookIcon className="size-8 text-[#113E53]" onClick={undefined} />
        </FacebookShareButton>
      ),
      label: "facebook",
    },
    {
      icon: (
        <a href={instagramDirectLink} target="_blank" rel="noopener noreferrer">
          <InstagramIcon
            className="size-8 text-[#113E53]"
            onClick={undefined}
          />
        </a>
      ),
      label: "Instagram",
    },
    {
      icon: (
        // <TwitterShareButton url={`${process.env.REACT_APP_WEBSITE_DOMAIN}/link`}>
        //   <TwitterIcon className={"size-8"} onClick={undefined} />
        // </TwitterShareButton>
        <a href={twitterMessageLink} target="_blank" rel="noopener noreferrer">
          <TwitterIcon className="size-8 text-[#113E53]" onClick={undefined} />
        </a>
      ),
      label: "Twitter",
    },
    {
      icon: (
        <WhatsappShareButton
          url={`${process.env.REACT_APP_WEBSITE_DOMAIN}/link`}
          title={"this is whatsaap share"}
        >
          <WhatsappIcon className="size-8 text-[#113E53]" onClick={undefined} />
        </WhatsappShareButton>
      ),
      label: "Whatsapp",
    },
    {
      icon: (
        <EmailShareButton
          url={`${process.env.REACT_APP_WEBSITE_DOMAIN}/link`}
          title="this is email"
        >
          <EmailIcon className="size-8 text-[#113E53]" onClick={undefined} />
        </EmailShareButton>
      ),
      label: "E-mail",
    },
    {
      icon: (
        <ShareFilledIcon
          className="size-8 text-[#113E53]"
          onClick={undefined}
        />
      ),
      label: "More",
    },
  ];
  return (
    <div className="flex justify-start gap-6 mt-8 mb-16">
      {socialIconsList.map((val, index) => (
        <div key={index} className="text-center">
          <div className="p-6 rounded-full bg-[#9D9D9D0A] mb-2">{val.icon}</div>
          <span className="text-[#113E53]">{val.label}</span>
        </div>
      ))}
    </div>
  );
};

export default SocialIcons;
