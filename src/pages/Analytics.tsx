import { useContext, useState, useEffect } from 'react';
import useDeviceDetect from '../helpers/screens';
import PeriodSelector from '../components/Analytics/PeriodSelector';
import StatsSwiper from '../components/Analytics/StatsSwiper';
import ChartSection from '../components/Analytics/ChartSection';
import { UserContext } from '../context/UserContext';
import TopSourcesSwiper from '../components/Analytics/TopSourcesSwiper';
import {
  UserIntervalVisit,
  TopCities,
  TopCountries,
  TotalClicks,
  AverageTimeToEngage,
} from '../services/userService';
import { TimeInterval } from '../types/types';
import { CountryClicks, Source } from '../types/interfaces';
import { getTopSources } from '../services/linkService';

const Analytics: React.FC = () => {
  const userContext = useContext(UserContext);
  const user = userContext?.user;
  const [limit, setLimit] = useState<TimeInterval>('day');
  const { isMobile } = useDeviceDetect();

  const [totalClicks, setTotalClicks] = useState<string>();
  const [topCountries, setTopCountries] = useState<CountryClicks[]>();
  const [topCities, setTopCities] = useState<string>();
  const [userVisit, setUserVisit] = useState<Record<string, number> | null>();
  const [topSources, setTopSources] = useState<Source[]>();
  const [averageTimeToEngage, setAverageTimeToEngage] = useState<string>();

  const fetchData = async () => {
    if (!user) return;

    try {
      const [
        totalClicksData,
        topCountriesData,
        topCitiesData,
        userIntervalVisit,
        topSourcesData,
        averageTimeToEngageData,
      ] = await Promise.all([
        TotalClicks(user._id, limit),
        TopCountries(user._id, limit),
        TopCities(user._id, limit),
        UserIntervalVisit(user._id, limit),
        getTopSources(user._id, limit),
        AverageTimeToEngage(user._id, limit),
      ]);

      setTotalClicks(totalClicksData);
      setTopCountries(topCountriesData);
      setTopCities(topCitiesData);
      setUserVisit(userIntervalVisit);
      setTopSources(topSourcesData);
      setAverageTimeToEngage(averageTimeToEngageData);
    } catch (error) {
      console.error('Error when fetching analytics data', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [user, limit]);

  const getTopCountry = () => {
    if (!topCountries) return 'Unknown';

    const topCountry = topCountries.reduce((prev, current) =>
      prev.clicks > current.clicks ? prev : current,
    );
    return topCountry.country ?? 'Unknown';
  };

  const getBestPerformingSource = () => {
    if (!topSources || topSources.length === 0) return 'Unknown';

    const bestSource = topSources?.reduce((prev, current) =>
      prev.count > current.count ? prev : current,
    );

    return bestSource._id ?? 'Unknown';
  };

  return (
    <div className="min-h-full bg-gray-50">
      <div className="flex flex-col p-[24px]">
        <h1 className="text-2xl font-header text-[#121111]">Analytics</h1>
        <div className="flex items-center justify-between mt-[16px] mb-[8px]">
          <label className="font-content font-[500] text-[#121111]">
            Today&apos;s Activity
          </label>
          <PeriodSelector
            limit={limit}
            setLimit={setLimit}
            isMobile={isMobile}
          />
        </div>
        <StatsSwiper
          totalClicks={totalClicks}
          topCountry={getTopCountry()}
          topCity={topCities}
          topPlatform={getBestPerformingSource()}
          averageTime={averageTimeToEngage}
        />
        <ChartSection
          limit={limit}
          userVisit={userVisit ?? {}}
          topCountries={topCountries}
        />
        <div className="mt-[16px]">
          <h2 className="font-[500] text-[#121111]">Top Sources</h2>
          <TopSourcesSwiper topSources={topSources} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
