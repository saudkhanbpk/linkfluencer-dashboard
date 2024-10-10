import React, { useContext, useEffect, useState } from 'react';
import IndicateUp from '../common/cards/IndicateUp';
import IndicateDown from '../common/cards/IndicateDown';
import ApexChart from '../common/charts/LineChart/DashboardChart';
import CalumnChart from '../common/charts/columnChart';
import Chart from '../common/charts/CircleChart/CircleChart';
import { UserContext } from '../../context/UserContext';
import { getTopSources } from '../../services/linkService';
import { TopCountries } from '../../services/userService';
import { CountryClicks, Source } from '../../types/interfaces';
import Loading from '../common/Loading';
import { fetchIcon } from '../../utils/iconUtils';

const AnalyticsSection: React.FC = () => {
  const userContext = useContext(UserContext);
  const user = userContext?.user;

  const [topSources, setTopSources] = useState<Source[]>([]);
  const [topCountries, setTopCountries] = useState<CountryClicks[]>([]);
  const [loadingSources, setLoadingSources] = useState<boolean>(true);
  const [loadingCountries, setLoadingCountries] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTopSources = async () => {
    if (user) {
      try {
        setLoadingSources(true);
        const sources = await getTopSources(user._id);
        setTopSources(sources);
      } catch (error) {
        setError('Erreur lors de la récupération des sources principales');
        console.error(error);
      } finally {
        setLoadingSources(false);
      }
    }
  };

  const fetchTopCountries = async () => {
    if (user) {
      try {
        setLoadingCountries(true);
        const countries = await TopCountries(user._id, 'year');


        const getTopCountries = (countries: any[]) => {
          const sortedData = countries.sort((a, b) => b.clicks - a.clicks);
          return sortedData.slice(0, Math.min(6, countries.length));
        };
        
        const topCountries = getTopCountries(countries);
        
        console.log({topCountries});




        console.log({countries});
        
        setTopCountries(topCountries);
      } catch (error) {
        setError('Erreur lors de la récupération des pays principaux');
        console.error(error);
      } finally {
        setLoadingCountries(false);
      }
    }
  };

  useEffect(() => {
    fetchTopCountries();
    fetchTopSources();
  }, [user]);

  if (error) {
    return <div>{error}</div>;
  }

  const totalCount = topSources.reduce(
    (total, source) => total + source.count,
    0,
  );

  return (
    <div className="mt-12">
      <h1 className="font-[600] font-content">Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        <div className="flex border h-[300px] flex-col relative items-center p-[20px] rounded-2xl w-full">
          <div className="relative flex w-full items-center h-full">
            <div className="h-full w-full flex flex-col justify-center">
              <span className="text-[#4C4C4C] font-content whitespace-nowrap">
                Youtube yearly earning
              </span>
              <h1 className="text-2xl font-content">$19,341.88</h1>
              <div className="mt-4">
                <IndicateUp percent={10} />
              </div>
            </div>
            <div className="absolute -right-6 mt-12 m-[24px] w-[200px]">
              <ApexChart indicateUp={true} />
            </div>
          </div>
          <div className="w-full border-[1.5px]"></div>
          <div className="relative flex w-full items-center h-full">
            <div className="h-full w-full flex flex-col justify-center">
              <span className="text-[#4C4C4C] font-content whitespace-nowrap">
                Youtube this Month earning
              </span>
              <h1 className="text-2xl font-content">$199</h1>
              <div className="mt-4">
                <IndicateDown percent={10} />
              </div>
            </div>
            <div className="absolute -right-6 mt-12 m-[24px] w-[200px]">
              <ApexChart indicateUp={false} />
            </div>
          </div>
        </div>
        <div className="border h-[300px] flex flex-col justify-between items-start px-[20px] py-[20px] rounded-2xl w-full">
          <span className="text-[#4C4C4C] font-content whitespace-nowrap">
            Top Sources
          </span>
          <div className="flex justify-between w-full h-full gap-6">
            {loadingSources ? (
              <Loading />
            ) : (
              topSources.map((source) => (
                <div key={source._id} className="relative h-full">
                  <CalumnChart
                    percent={(source.count / totalCount) * 100}
                    logo={fetchIcon(source._id)}
                  />
                </div>
              ))
            )}
          </div>
        </div>
        <div className="border h-[300px] p-[24px] rounded-2xl relative">
          <span className="text-[#4C4C4C] font-content whitespace-nowrap">
            Users traffic by region
          </span>
          <div className="h-full flex flex-col justify-between mt-4">
            {loadingCountries ? (
              <Loading /> // Affiche un composant de chargement en attendant les données
            ) : (
              <Chart countries={topCountries} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;
