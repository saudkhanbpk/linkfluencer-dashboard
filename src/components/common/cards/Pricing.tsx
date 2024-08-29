interface Props {}
const PricingCard: React.FC<Props> = () => {
  return (
    <div className="border border-[#172B4D]">
      <div className="bg-[#172B4D] rounded-t-3xl">
        <p className="text-gray-100 font-header p-3 text-center text-[20px]">Starter</p>
      </div>
      <div>
        <p>Start to measure the impact of your daily engagement</p>
        <h1 className="font-bold font-content text-[32px]">$ 49.99</h1>
        <img src="/assets/engagement.svg" alt="engagement-pic" />
        <ul>
          <ol>Open Smart Links to ver 30+ Native Apps</ol>
          <ol>Traffic Source Analysis</ol>
          <ol>Location Analysis</ol>
          <ol>Conversion Analysis</ol>
          <ol>Shorten URLs</ol>
          
          <ol>Customise the generated URLs</ol>
        </ul>
        <button className="w-[200px] border-[#113E53] font-bold bg-[#113E53] rounded-full px-[20px] py-[8px] text-white font-header">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
