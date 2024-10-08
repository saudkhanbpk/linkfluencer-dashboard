import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/common/Logo";
import { RightArrow } from "./../svg";
import BrandImage from '../assets/signup_brand.png';
import InfluencerImage from '../assets/signup_influencer.png';

const Join: React.FC = () => {
  const navigate = useNavigate();

  const handleInfluencerClick = () => {
    navigate("/signup-influencer");
  };

  const handleBrandClick = () => {
    navigate("/signup-brand");
  };

  return (
    <div>
      <Logo />
      <div className="flex justify-center items-center w-full min-h-screen p-4">
        <div>
          <h2 className="text-4xl md:text-8xl mb-8">
            Join <br /> Linkfluencer
          </h2>
          <div className="flex flex-wrap gap-3 ">
            <div
              className="md:w-[370px] flex gap-2 border-black border rounded-2xl self-center p-2 cursor-pointer"
              onClick={handleInfluencerClick}
            >
              <div className="self-center p-8 bg-[#F0F5FF] rounded-xl ">
                <img
                  src={InfluencerImage}
                  alt="Influencer"
                  width={90}
                  height={90}
                />
              </div>
              <div className="flex flex-col justify-center relative">
                <h1 className="font-[750] text-[20px]">Influencer</h1>
                <p className="text-xl mt-2">Make Everyday A Pay Day</p>
                <RightArrow className={'size-10 border p-2 rounded-full border-[#113E53] absolute right-0 bottom-0 bg-[#59FF93] hover:rotate-45 duration-150'} />
              </div>
            </div>
            <div
              className="md:w-[370px] flex gap-2 border-black border rounded-2xl self-center p-2 cursor-pointer "
              onClick={handleBrandClick}
            >
              <div className="self-center p-8 bg-[#F0F5FF] rounded-xl ">
                <img
                  src={BrandImage}
                  alt="Brand"
                  width={90}
                  height={90}
                />
              </div>
              <div className="flex flex-col justify-center relative">
                <h1 className="font-[750] text-[20px]">Brand</h1>
                <p className="text-xl mt-2">Take Your Brand To Public</p>
                <RightArrow className={'size-10 border p-2 rounded-full border-[#113E53] absolute right-0 bottom-0 bg-[#59FF93] hover:rotate-45 duration-150'} />
              </div>
            </div>
          </div>
          <div className="mt-4 text-[#113E53] text-[21px]">
            <span className="mr-2">Already have an account?</span>
            <b className="cursor-pointer font-[750]" onClick={() => navigate("/signin")}>
              Login
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
