import { Link } from 'react-router-dom';

interface Pricing {
  Label: string;
  description: string;
  price: string;
  image: string;
  points: string[];
  clicks: string;
  btnLabel: string;
}
interface Props {
  data: Pricing;
  onClick?: () => void;
}
const PlanCard: React.FC<Props> = ({ data, onClick }) => {
  return (
    <div className="border hover:border-[#172B4D] rounded-3xl group">
      <div className="bg-white rounded-t-3xl text-[#121111] group-hover:bg-[#113E53] duration-200">
        <p className="font-header p-3 text-center text-[20px] group-hover:text-white">
          {data.Label}
        </p>
      </div>
      <div className="px-[24px] flex flex-col items-center bg-gray-50 rounded-b-3xl">
        <p className="text-center font-content leading-none mt-[12px]">
          {data.description}
        </p>
        <h1 className="font-bold font-content text-[32px] mt-[12px] text-[#4C4C4C]">
          {data.price}
        </h1>
        <img
          src="/assets/engagement.svg"
          alt="engagement-pic"
          className="w-[250px] h-[170px] my-[12px]"
        />
        <h2 className="text-[20px] font-content my-[12px]">{data.clicks}</h2>
        <ul className="font-content text-xs list-disc list-outside space-y-2 px-[24px] mt-2">
          {data.points.map((val, index) => {
            return <li key={index}>{val}</li>;
          })}
        </ul>
        <Link to={`/checkout/${data.Label}`}>
          <button
            onClick={onClick}
            className="w-[200px] m-[24px] cursor-pointer border border-[#113E53] group-hover:text-[#113E53] group-hover:bg-white duration-200 font-bold bg-[#113E53] rounded-full px-[20px] py-[8px] text-white font-header"
          >
            {data.btnLabel}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PlanCard;
