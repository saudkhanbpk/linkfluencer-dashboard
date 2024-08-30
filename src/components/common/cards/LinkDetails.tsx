import { useState } from 'react';
import { CrossIcon } from '../../../svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
interface linkData {
  channel: string;
  link: string;
  tags: string;
  logo: string;
}
interface Prop {
  data: linkData;
  handleDetailsModalClose:()=>void;
}

const LinkDetailsCard: React.FC<Prop> = ({ data,handleDetailsModalClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="md:w-[600px]">
      <div className="flex justify-between items-center my-[18px]">
        <div className="flex items-center gap-2">
          <img
            src={data.logo}
            className="w-[46px] h-[33px]"
            alt="social Media Logo"
          />
          <label className="font-header text-[20px]">{data.channel}</label>
        </div>
        <CrossIcon className={'size-5 text-black'} onClick={handleDetailsModalClose} />
      </div>
      <p>{data.link}</p>

      <p className="my-4 text-blue-500">{data.tags}</p>

      <div>
        <Swiper
          slidesPerView={5}
          spaceBetween={12}
          freeMode={true}
          breakpoints={{
            200: {
              slidesPerView: 2, // When the window width is 600 or more
            },
            500: {
              slidesPerView: 3.5, // When the window width is 960 or more
            },
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="border p-[12px] rounded-xl bg-white max-h-[100px] h-[70px] ">
            <span className="text-xs font-content text-[#9B919D]">
              Total Clicked
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[#292828] text-[24px] font-[500]">
                2032
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border p-[12px] rounded-xl bg-white max-h-[100px] h-[70px] ">
            <span className="text-xs font-content text-[#9B919D]">
              Top Country
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[#292828] text-[24px] font-[500]">
                2032
              </span>{' '}
              <img
                src="/assets/usaflag.svg"
                alt="amazon logo"
                className="h-[24px] w-[24px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="border p-[12px] rounded-xl bg-white max-h-[100px] h-[70px] ">
            <span className="text-xs font-content text-[#9B919D]">
              Top City
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[#292828] text-[24px] font-[500]">
                New York
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border p-[12px] rounded-xl bg-white max-h-[100px] h-[70px] ">
            <span className="text-xs font-content text-[#9B919D]">
              Best Time To Engage
            </span>
            <div className=" gap-2">
              <span className="text-[#292828] text-[24px] font-[500]">
                3-6pm
              </span>{' '}
              <span className="text-xs font-content text-[#9B919D]">GM</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='h-[300px] w-full rounded-xl border mt-4'></div>
    </div>
  );
};

export default LinkDetailsCard;
