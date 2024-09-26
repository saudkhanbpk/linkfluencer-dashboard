import { useEffect, useState } from 'react';
import { CrossIcon } from '../../../svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import ApexColumnChart from '../charts/columnChart/calumnChart';
import { ILink } from '../../../interfaces/Link';
import FaviconLoader from '../FaviconFetcher';
import { getLinkLabel } from '../../../utils/linkUtils';
import {
  getBestAverageTimeToEngageByLink,
  getClicksTrendForLink,
  getTopCityByLink,
  getTopCountryByLink,
  UserVisit,
} from '../../../services/linkService';
import Loading from '../Loading';
import { getCountryFlag } from '../../../utils/countryUtils';

interface Prop {
  data: ILink;
  handleDetailsModalClose: () => void;
}

const LinkDetailsCard: React.FC<Prop> = ({ data, handleDetailsModalClose }) => {
  const [linkLogo, setLinkLogo] = useState('');
  const [clicks, setClicks] = useState<number | null>(null);
  const [clicksTrend, setClicksTrend] = useState<any | null>(null);
  const [topCountry, setTopCountry] = useState<string | null>(null);
  const [topCountryFlag, setTopCountryFlag] = useState<string>();
  const [topCity, setTopCity] = useState<string | null>(null);
  const [bestAverageTimeToEngage, setBestAverageTimeToEngage] = useState<
    string | null
  >(null);
  const [userVisitInterval, setUserVisitInterval] = useState<any | null>(null);

  const [loadingClicks, setLoadingClicks] = useState(true);
  const [loadingClicksTrend, setLoadingClicksTrend] = useState(true);
  const [loadingTopCountry, setLoadingTopCountry] = useState(true);
  const [loadingTopCity, setLoadingTopCity] = useState(true);
  const [loadingBestTime, setLoadingBestTime] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingClicks(true);
      setLoadingClicksTrend(true);
      setLoadingTopCountry(true);
      setLoadingTopCity(true);
      setLoadingBestTime(true);

      try {
        setClicks(data.clickCount);
        setLoadingClicks(false);

        const trend = await getClicksTrendForLink(data.createdBy, data._id);
        setClicksTrend(trend);
        setLoadingClicksTrend(false);

        const country = await getTopCountryByLink(data.createdBy, data._id);
        setTopCountry(country || 'No data');
        setLoadingTopCountry(false);

        const city = await getTopCityByLink(data.createdBy, data._id);
        setTopCity(city || 'No data');
        setLoadingTopCity(false);

        const flag = getCountryFlag(country);
        setTopCountryFlag(flag);

        const bestTime = await getBestAverageTimeToEngageByLink(
          data.createdBy,
          data._id,
        );
        setBestAverageTimeToEngage(bestTime || 'No data');
        setLoadingBestTime(false);

        const visitInterval = await UserVisit(data.createdBy, data._id, 'year');
        setUserVisitInterval(visitInterval);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [data._id, data.createdBy]);

  return (
    <div className="md:w-[600px]">
      <FaviconLoader
        originalUrl={data.originalUrl}
        setFavicon={setLinkLogo}
        target={data.targetSite}
      />
      <div className="flex justify-between items-center my-[18px]">
        <div className="flex items-center gap-2">
          <img
            src={linkLogo}
            className="w-[46px] h-[33px]"
            alt="social Media Logo"
          />
          <label className="font-header text-[20px]">
            {getLinkLabel(data.targetSite)}
          </label>
        </div>
        <CrossIcon
          className={'size-5 text-black cursor-pointer'}
          onClick={handleDetailsModalClose}
        />
      </div>
      <p>{`${process.env.REACT_APP_NODE_API_DOMAIN}/${data.shortUrl}`}</p>

      <div className="my-4 text-[#5890FF]">
        {data.tags?.map((tag, index) => (
          <span key={index} className="mr-2">
            {`#${tag}`}
          </span>
        ))}
      </div>

      <div>
        <Swiper
          slidesPerView={2.8}
          spaceBetween={12}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper cursor-pointer"
        >
          <SwiperSlide className="border p-[12px] rounded-xl bg-white max-h-[100px] h-[70px]">
            <span className="text-xs font-content text-[#9B919D]">
              Total Clicked
            </span>
            <div className="flex items-center gap-2">
              {loadingClicks ? (
                <Loading />
              ) : (
                <span className="text-[#292828] text-[24px] font-[500]">
                  {clicks}
                </span>
              )}
            </div>
          </SwiperSlide>

          <SwiperSlide className="border p-[12px] rounded-xl bg-white max-h-[100px] h-[70px]">
            <span className="text-xs font-content text-[#9B919D]">
              Top Country
            </span>
            <div className="flex items-center gap-2">
              {loadingTopCountry ? (
                <Loading />
              ) : (
                <>
                  <span className="text-[#292828] text-[24px] font-[500]">
                    {topCountry}
                  </span>
                  <img
                    src={topCountryFlag}
                    alt="country flag"
                    className="h-[24px] w-[24px]"
                  />
                </>
              )}
            </div>
          </SwiperSlide>

          <SwiperSlide className="border p-[12px] rounded-xl bg-white max-h-[100px] h-[70px]">
            <span className="text-xs font-content text-[#9B919D]">
              Top City
            </span>
            <div className="flex items-center gap-2">
              {loadingTopCity ? (
                <Loading />
              ) : (
                <span className="text-[#292828] text-[24px] font-[500]">
                  {topCity}
                </span>
              )}
            </div>
          </SwiperSlide>

          <SwiperSlide className="p-[12px] rounded-xl bg-white max-h-[100px] h-[70px] border">
            <span className="text-xs font-content text-[#9B919D]">
              Best Time To Engage
            </span>
            <div className="gap-2 flex items-baseline">
              {loadingBestTime ? (
                <Loading />
              ) : (
                <>
                  <span className="text-[#292828] text-[24px] font-[500] flex whitespace-nowrap">
                    {bestAverageTimeToEngage}
                  </span>
                  {bestAverageTimeToEngage !== 'No data' && (
                    <span className="text-xs font-content text-[#9B919D]">
                      GMT
                    </span>
                  )}
                </>
              )}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="w-full rounded-xl border mt-4">
        <ApexColumnChart clickData={userVisitInterval} />
      </div>
    </div>
  );
};

export default LinkDetailsCard;
