import PricingCard from '../components/common/cards/Plan';
const Plans: React.FC = ({}) => {
  const data = [
    {
      Label: 'Free',
      description: 'Start to measure the impact of your daily engagement',
      price: 'Free',
      image: '/assets/engagement.svg',
      clicks: '10k Clicks',
      points: [
        'Open Smart Links to over 30 + Native Apps',
        'Analytics Dashboard',
        'Traffic Source Analysis',
        'Location Analysis',
        'Conversion Analysis',
        'Shorten URLs',
      ],
      btnLabel: 'Activate',
    },
    {
      Label: 'Starter',
      description: 'Best to discover and feel the impact of the tool.',
      price: '$49.99',
      image: '/assets/engagement.svg',
      clicks: '50k Clicks',
      points: [
        ' Open Smart Links to over 30 + Native Apps',
        'Traffic Source Analysis',
        ' Location Analysis',
        'Conversion Analysis',
        ' Shorten URLs',
        'Customise the generated URLs',
      ],
      btnLabel: 'Buy Now',
    },
    {
      Label: 'Grow',
      description: 'Best when you start to grow an audience across channels.',
      price: '$99.99',
      image: '/assets/engagement.svg',
      clicks: '100k Clicks',
      points: [
        'Open Smart Links to over 30+ Native Apps',
        'Traffic Source Analysis',
        'Location Analysis',
        'Conversion Analysis',
        'Shorten URLs',
        'Customise the generated URLs',
      ],
      btnLabel: 'Buy Now',
    },
    {
      Label: 'Scale',
      description: 'Best when you are ready to go viral.',
      price: '$199.99',
      image: '/assets/engagement.svg',
      clicks: '250k Clicks',
      points: [
        'Open Smart Links to over 30+ Native Apps',
        'Traffic Source Analysis',
        'Location Analysis',
        'Conversion Analysis',
        'Shorten URLs',
        'Customise the generated URLs',
      ],
      btnLabel: 'Buy Now',
    },
  ];
  return (
    <div className="w-full bg-white min-h-full">
      <h1 className="text-[24px] p-[12px] sm:p-[24px] font-header text-[#172B4D]">
        Choose Your Plan
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-[12px] sm:p-[24px] gap-4">
        {data.map((val, index) => {
          return <PricingCard key={index} data={val} />;
        })}
      </div>
    </div>
  );
};
export default Plans;
