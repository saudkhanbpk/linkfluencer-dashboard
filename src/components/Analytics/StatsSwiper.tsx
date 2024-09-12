import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import Indicate from '../common/cards/Indicate';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { fetchIcon } from '../../utils/iconUtils';
import { getCountryFlag } from '../../utils/countryUtils';
import { useEffect, useState } from 'react';

interface Slide {
  label: string;
  value?: string | null;
  logo?: string;
  indicate?: { direction: 'up' | 'down'; percent: number };
  unit?: string;
}

interface SlidesSwiperProps {
  totalClicks?: string;
  topPlatform?: string;
  topCountry?: string;
  topCity?: string;
  averageTime?: string;
}

const StatsSwiper: React.FC<SlidesSwiperProps> = ({
  totalClicks,
  topPlatform,
  topCountry,
  topCity,
  averageTime,
}) => {
  const [flag, setFlag] = useState<string | null>('');

  useEffect(() => {
    const fetchFlag = () => {
      if (topCountry) {
        const countryFlag = getCountryFlag(topCountry);

        setFlag(countryFlag ?? '');
      }
    };

    fetchFlag();
  }, [topCountry]);

  const slidesData: Slide[] = [
    {
      label: 'Total Clicked',
      value: totalClicks,
      indicate: { direction: 'up', percent: 10 },
    },
    {
      label: 'Best Performing Platform',
      logo: fetchIcon(topPlatform ?? ''),
      indicate: { direction: 'up', percent: 10 },
    },
    { label: 'Top Country', value: topCountry, logo: flag ?? '' },
    { label: 'Top City', value: topCity },
    { label: 'Best Time To Engage', value: averageTime, unit: 'GMT' },
  ];

  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={20}
      freeMode
      breakpoints={{
        200: { slidesPerView: 1 },
        320: { slidesPerView: 1.2 },
        500: { slidesPerView: 2.1 },
        690: { slidesPerView: 2.7 },
        1080: { slidesPerView: 3.4 },
        1300: { slidesPerView: 3.8 },
        1400: { slidesPerView: 5 },
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
      style={{ maxWidth: '100%' }}
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide
          key={index}
          className="border p-[24px] rounded-3xl bg-white max-h-[100px] h-[80px] max-w-full"
          style={{ width: 'auto' }}
        >
          <span className="text-xs font-content text-[#9B919D]">
            {slide.label}
          </span>
          <div className="flex items-center gap-2">
            {slide.logo && (
              <img
                src={slide.logo}
                alt={slide.label}
                className="h-[24px] w-[24px]"
              />
            )}
            <span className="text-[#292828] text-[24px] font-[500]">
              {slide.value}
            </span>
            {slide.indicate && (
              <Indicate
                direction={slide.indicate.direction}
                percent={slide.indicate.percent}
              />
            )}
            {slide.unit && (
              <span className="text-xs font-content text-[#9B919D]">
                {slide.unit}
              </span>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default StatsSwiper;
