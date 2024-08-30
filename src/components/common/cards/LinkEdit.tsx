import { useState } from 'react';
import { CrossIcon } from '../../../svg';

interface linkData {
  channel: string;
  link: string;
  tags: string;
  logo: string;
}
interface Prop {
  data: linkData;
  handleModalClose?: (val: void) => void;
}

const LinkEditCard: React.FC<Prop> = ({ data, handleModalClose }) => {
  const handleClose = () => {
    handleModalClose?.();
  };
  return (
    <div className="md:w-[500px]">
      <h1 className="text-[24px] font-header">data Link</h1>
      <div className="flex justify-between items-center my-[18px]">
        <div className="flex items-center gap-2">
          <img
            src={data.logo}
            className="w-[46px] h-[33px]"
            alt="social Media Logo"
          />
          <label className="font-header text-[20px]">{data.channel}</label>
        </div>
        <CrossIcon
          className={'size-5 text-black cursor-pointer'}
          onClick={handleClose}
        />
      </div>
      <input
        type="text"
        value={data.link}
        className="w-full p-2 rounded-full border border-gray-400 my-[16px]"
      />
      <input
        type="text"
        value={data.tags}
        className="w-full p-2 rounded-full border border-gray-400 mb-[16px]"
      />
      <div className={'mt-2 flex justify-end items-center gap-2'}>
        <button
          className="w-[113px] border border-gray-800 font-bold rounded-full px-[20px] py-[8px] font-header"
          onClick={handleClose}
        >
          Ok
        </button>
        <button className="w-[113px] border-[1px] font-bold bg-[#531111] rounded-full px-[20px] py-[8px] text-white font-header">
          Save
        </button>
      </div>
    </div>
  );
};

export default LinkEditCard;
