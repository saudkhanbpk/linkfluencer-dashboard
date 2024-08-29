import PricingCard from "../components/common/cards/Pricing";

const Pricing:React.FC = () =>{
    return<div className="w-full bg-white h-full p-[12px] sm:p-[24px]">
        <h1 className="text-[24px] font-header text-[#172B4D]">Choose Your Plan</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
            <PricingCard/>
        </div>
    </div>
}
export default Pricing;