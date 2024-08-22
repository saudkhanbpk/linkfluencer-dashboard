import LinkSquare from '../components/common/cards/LinkSquare';
import FaviconFetcher from '../components/common/FaviconFetcher';

const MyLinks: React.FC = () => {
  const Links = [
    {
      logo: '/assets/youtubeLogo.svg',
      link: 'https://linkfluencerstg.addwebprojects.com/nextdor',
      label: 'Youtube',
      tags: '#Educational #Sciences',
      totalClicks: 200,
      percent: 18,
      indicateUp: true,
    },
    {
      logo: '/assets/amazonLogo.svg',
      link: 'https://linkfluencerstg.addwebprojects.com/nextdor',
      label: 'Amazon',
      tags: '#Educational #Physic',
      totalClicks: 140,
      percent: 22,
      indicateUp: false,
    },
    {
      logo: '/assets/spotifyLogo.svg',
      link: 'https://linkfluencerstg.addwebprojects.com/nextdor',
      label: 'Spotify',
      tags: '#Educational #Music',
      totalClicks: 140,
      percent: 75,
      indicateUp: true,
    },
    {
      logo: '/assets/youtubeLogo.svg',
      link: 'https://linkfluencerstg.addwebprojects.com/nextdor',
      label: 'Youtube',
      tags: '#Educational #Sciences',
      totalClicks: 200,
      percent: 18,
      indicateUp: true,
    },
    {
      logo: '/assets/amazonLogo.svg',
      link: 'https://linkfluencerstg.addwebprojects.com/nextdor',
      label: 'Amazon',
      tags: '#Educational #Physic',
      totalClicks: 140,
      percent: 22,
      indicateUp: false,
    },
    {
      logo: '/assets/spotifyLogo.svg',
      link: 'https://linkfluencerstg.addwebprojects.com/nextdor',
      label: 'Spotify',
      tags: '#Educational #Music',
      totalClicks: 140,
      percent: 75,
      indicateUp: true,
    },
  ];
  return (
    <div className="w-full">
      {/* <h1>My Links</h1>
      <FaviconFetcher /> */}
      <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-[24px] bg-white min-h-[80vh]">
        {Links.map((val, index) => {
          return (
            <div key={index} className="mb-8 ">
              <LinkSquare
                link={val?.link}
                totalClicks={val?.totalClicks}
                tags={val.tags}
                logo={val?.logo}
                percent={val.percent}
                indicateUp={val.indicateUp}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MyLinks;
