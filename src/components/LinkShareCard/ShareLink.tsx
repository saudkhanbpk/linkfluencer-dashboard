import React, { useEffect } from 'react';
import copyToClipboard from '../../utils/clipboardUtils';
import Tooltip from '../common/ToolTip';
import { SaveIcon } from '../../svg';

const ShareLink: React.FC<{ link: string }> = ({ link }) => {
  // const link = 'https://www.figma.com/file/NlfVhYygR9mAQasassdsada/Share... 222';
useEffect(()=>{
console.log({link});

},[])
  return (
    <>
      <div className="flex justify-center">
        <span className="text-neutral-500">Or share with link</span>
      </div>
      <div className="flex items-center p-2 my-5 rounded-3xl bg-[#F4F4F4] justify-between">
        <span>{process.env.REACT_APP_WEBSITE_DOMAIN+"/"+link}</span>
        <Tooltip text="copy">
          <SaveIcon
            className="size-12 border cursor-pointer p-3 rounded-full bg-white"
            onClick={() => copyToClipboard(process.env.REACT_APP_WEBSITE_DOMAIN+"/"+link)}
          />
        </Tooltip>
      </div>
    </>
  );
};

export default ShareLink;
