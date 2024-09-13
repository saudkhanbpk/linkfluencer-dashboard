import { useState } from "react";
import PlanCard from "../../components/common/cards/Plan";

interface Props {}
export const Checkout: React.FC<Props> = () => {
  const data = [
    {
      Label: "Free",
      description: "Start to measure the impact of your daily engagement",
      price: "Free",
      image: "/assets/engagement.svg",
      clicks: "10k Clicks",
      points: [
        "Open Smart Links to over 30 + Native Apps",
        "Analytics Dashboard",
        "Traffic Source Analysis",
        "Location Analysis",
        "Conversion Analysis",
        "Shorten URLs",
      ],
      btnLabel: "Activate",
    },
    {
      Label: "Starter",
      description: "Best to discover and feel the impact of the tool.",
      price: "$49.99",
      image: "/assets/engagement.svg",
      clicks: "50k Clicks",
      points: [
        " Open Smart Links to over 30 + Native Apps",
        "Traffic Source Analysis",
        " Location Analysis",
        "Conversion Analysis",
        " Shorten URLs",
        "Customise the generated URLs",
      ],
      btnLabel: "Buy Now",
    },
    {
      Label: "Grow",
      description: "Best when you start to grow an audience across channels.",
      price: "$99.99",
      image: "/assets/engagement.svg",
      clicks: "100k Clicks",
      points: [
        "Open Smart Links to over 30+ Native Apps",
        "Traffic Source Analysis",
        "Location Analysis",
        "Conversion Analysis",
        "Shorten URLs",
        "Customise the generated URLs",
      ],
      btnLabel: "Buy Now",
    },
    {
      Label: "Scale",
      description: "Best when you are ready to go viral.",
      price: "$199.99",
      image: "/assets/engagement.svg",
      clicks: "250k Clicks",
      points: [
        "Open Smart Links to over 30+ Native Apps",
        "Traffic Source Analysis",
        "Location Analysis",
        "Conversion Analysis",
        "Shorten URLs",
        "Customise the generated URLs",
      ],
      btnLabel: "Buy Now",
    },
  ];
  const [customerValues, setCustomerValues] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    postalCode: "",
    address: "",
    city: "",
    country: "",
    phone: "",
    email: "",
  });
  const [cardValues, setCardValues] = useState({
    nameOnCard: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    CVV: "",
  });

  const handleCustomerChange = (e: any) => {
    const { name, value } = e.target;
    setCustomerValues((preValue: any) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const handleCardChange = (e: any) => {
    const { name, value } = e.target;
    setCardValues((preValue: any) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const handleSubmit = ():void => {
    console.log({ customerValues, cardValues });
  };
  return (
    <div className="">
      <div className="p-[24px]">
        <h1 className="text-2xl font-header">Checkout</h1>
      </div>
      <div className="bg-white p-[24px] flex flex-col md:flex-row">
        <div className="w-6/6 md:w-4/6 pr-4">
          <h1 className="text-2xl font-header">Customer Profile</h1>
          <div className=" space-y-4">
            <input
              type="text"
              placeholder="First Name"
              value={customerValues.firstName}
              onChange={handleCustomerChange}
              name="firstName"
              className="h-full w-2/4 rounded-3xl p-2 outline-none border"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={customerValues.lastName}
              name="lastName"
              onChange={handleCustomerChange}
              className="h-full w-2/4 rounded-3xl p-2 outline-none border"
            />
            <input
              type="text"
              placeholder="Company Name"
              value={customerValues.companyName}
              name="companyName"
              onChange={handleCustomerChange}
              className="h-full w-2/4 rounded-3xl p-2 outline-none border"
            />
            <input
              type="text"
              placeholder="Postal Code / ZIP"
              value={customerValues.postalCode}
              onChange={handleCustomerChange}
              name="postalCode"
              className="h-full w-2/4 rounded-3xl p-2 outline-none border"
            />
            <input
              type="text"
              placeholder="Address"
              value={customerValues.address}
              onChange={handleCustomerChange}
              name="address"
              className="h-full w-full rounded-3xl p-2 outline-none border"
            />
            <input
              type="text"
              placeholder="Town / City"
              value={customerValues.city}
              name="city"
              onChange={handleCustomerChange}
              className="h-full w-2/4 rounded-3xl p-2 outline-none border"
            />
            <input
              type="text"
              placeholder="Country"
              name="country"
              value={customerValues.city}
              onChange={handleCustomerChange}
              className="h-full w-2/4 rounded-3xl p-2 outline-none border"
            />
            <input
              type="text"
              placeholder="Phone"
              value={customerValues.phone}
              name="phone"
              onChange={handleCustomerChange}
              className="h-full w-2/4 rounded-3xl p-2 outline-none border"
            />
            <input
              type="text"
              placeholder="Email"
              value={customerValues.email}
              name="email"
              onChange={handleCustomerChange}
              className="h-full w-2/4 rounded-3xl p-2 outline-none border"
            />
          </div>
          <h1 className="text-2xl font-header mt-8 mb-2">
            Credit Card / Debit Card Details
          </h1>
          <div className="space-y-4 mb-8">
            <input
              type="text"
              placeholder="Name On Card"
              value={cardValues.nameOnCard}
              name="nameOnCard"
              onChange={handleCardChange}
              className="h-full w-2/4 rounded-3xl p-2 outline-none border"
            />
            <input
              type="text"
              value={cardValues.cardNumber}
              onChange={handleCardChange}
              name="cardNumber"
              placeholder="Card Number"
              className="h-full w-2/4 rounded-3xl p-2 outline-none border"
            />
            <input
              type="text"
              placeholder="Expiration Month"
              value={cardValues.expiryMonth}
              onChange={handleCardChange}
              name="expiryMonth"
              className="h-full w-2/6 rounded-3xl p-2 outline-none border"
            />
            <input
              type="text"
              placeholder="Expiration Year"
              value={cardValues.expiryYear}
              onChange={handleCardChange}
              name="expiryYear"
              className="h-full w-2/6 rounded-3xl p-2 outline-none border"
            />
            <input
              type="text"
              placeholder="CVV"
              value={cardValues.CVV}
              name="CVV"
              onChange={handleCardChange}
              className="h-full w-2/6 rounded-3xl p-2 outline-none border"
            />
          </div>
        </div>
        <div className="w-6/6 md:w-2/6">
          <PlanCard key={2} data={data[2]} onClick={handleSubmit}/>
        </div>
      </div>
    </div>
  );
};
