import { useContext, useEffect, useState } from 'react';
import { CrossIcon } from '../../../svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import ApexColumnChart from '../charts/columnChart/calumnChart';
import { ILink } from '../../../interfaces/Link';
import FaviconLoader from '../FaviconFetcher';
import { getLinkLabel } from '../../../utils/linkUtils';
import { getBestAverageTimeToEngageByLink, getTotalClicksForLink, getClicksTrendForLink, getTopCityByLink, getTopCountryByLink } from '../../../services/linkService';
import { UserContext } from '../../../context/UserContext';
interface Prop {
  data: ILink;
  handleDetailsModalClose: () => void;
}

const LinkDetailsCard: React.FC<Prop> = ({ data, handleDetailsModalClose }) => {
  const [linkLogo, setLinkLogo] = useState("");
  const [clicks, setClicks] = useState<number | null>(null);
  const [clicksTrend, setClicksTrend] = useState(null);
  const [topCountry, setTopCountry] = useState(null);
  const [topCity, setTopCity] = useState(null);
  const [bestAverageTimeToEngage, setBestAverageTimeToEngage] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      setClicks(data.clickCount);
      setClicksTrend(await getClicksTrendForLink(data.createdBy ,data._id));
      setTopCountry(await getTopCountryByLink(data.createdBy ,data._id));
      setTopCity(await getTopCityByLink(data.createdBy ,data._id));
      setBestAverageTimeToEngage(await getBestAverageTimeToEngageByLink(data.createdBy ,data._id));
    };

    fetchData();
  }, [data._id]);

  return (
    <div className="md:w-[600px]">
      <FaviconLoader originalUrl={data.originalUrl} setFavicon={setLinkLogo} />
      <div className="flex justify-between items-center my-[18px]">
        <div className="flex items-center gap-2">
          <img
            src={linkLogo}
            className="w-[46px] h-[33px]"
            alt="social Media Logo"
          />
          <label className="font-header text-[20px]">{getLinkLabel(data.targetSite)}</label>
        </div>
        <CrossIcon
          className={'size-5 text-black cursor-pointer'}
          onClick={handleDetailsModalClose}
        />
      </div>
      <p>{`linkfluencer.io/${data.shortUrl}`}</p>

      <div className="my-4 text-[#5890FF]">
              {data.tags?.map((tag, index) => (
                <span key={index} className="mr-2">
                  {`#${tag}`}
                </span>
              ))}
            </div>

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
                {clicks}
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border p-[12px] rounded-xl bg-white max-h-[100px] h-[70px] ">
            <span className="text-xs font-content text-[#9B919D]">
              Top Country
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[#292828] text-[24px] font-[500]">
                {topCountry}
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
                {topCity}
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border p-[12px] rounded-xl bg-white max-h-[100px] h-[70px] ">
            <span className="text-xs font-content text-[#9B919D]">
              Best Time To Engage
            </span>
            <div className=" gap-2">
              <span className="text-[#292828] text-[24px] font-[500]">
                {bestAverageTimeToEngage}
              </span>{' '}
              <span className="text-xs font-content text-[#9B919D]">GM</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className=" w-full rounded-xl border mt-4">
        <ApexColumnChart />
      </div>
    </div>
  );
};

export default LinkDetailsCard;
