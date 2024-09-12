import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import Indicate from '../common/cards/Indicate';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Source } from '../../types/interfaces'; // Assuming Source is defined correctly in interfaces
import { fetchIcon } from '../../utils/iconUtils';

interface TopSourcesSwiperProps {
  topSources?: Source[];
}

const TopSourcesSwiper: React.FC<TopSourcesSwiperProps> = ({ topSources = [] }) => {
  // Calculate the total count of all sources
  const totalCount = useMemo(() => {
    return topSources.reduce((acc, source) => acc + source.count, 0);
  }, [topSources]);

  // Transform the sources into displayable data with calculated percent
  const topSourcesData = useMemo(() => {
    return topSources
      .map((source) => {
        const percent = totalCount > 0 ? (source.count / totalCount) * 100 : 0; // Calculate the percentage
        return {
          ...source,
          direction: 'up', // Assuming 'up' as a default, modify as needed
          percent: percent.toFixed(0) as unknown as number, // Convert to number
          logo: fetchIcon(source._id), // Fetch the icon based on the source ID
          label: source._id, // Assuming the label is the source ID, modify if needed
        };
      })
      .filter(Boolean);
  }, [topSources, totalCount]);

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
    >
      {topSourcesData.map((source, index) => (
        <SwiperSlide key={index} className="border px-[16px] py-[24px] rounded-3xl bg-white">
          <div className="flex items-center gap-2">
            <img
              src={source.logo ?? ''}
              alt={`${source.label} logo`}
              className="h-[24px] w-[24px]"
            />
            <label>{source.label}</label>
            <Indicate
              direction={source.direction as 'up' | 'down' ?? 'up'}
              percent={source.percent ?? 0}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TopSourcesSwiper;
