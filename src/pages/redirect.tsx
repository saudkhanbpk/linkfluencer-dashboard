import { useEffect } from "react";

interface Props {}
const Redirect: React.FC<Props> = () => {
  useEffect(() => {}, []);
  return (
    <div className="border h-screen flex items-center justify-center">
      <div className="h-[200px] w-[400px] flex justify-center items-center">
        <img src="/assets/Logo.svg" alt="Logo" className=" h-full w-full"/>
      </div>
    </div>
  );
};

export default Redirect