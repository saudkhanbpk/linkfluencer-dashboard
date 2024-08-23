import IndicateDown from './indicateDown'
import IndicateUp from './IndicateUp';

interface Props {
  link: string;
  totalClicks: number;
  tags: string;
  percent: number;
  logo: string;
  indicateUp: boolean;
  minimize?:boolean;
}

const LinkSquare: React.FC<Props> = ({
  link,
  totalClicks,
  tags,
  percent,
  logo,
  indicateUp,
  minimize
}) => {
  return (
    <div className="">
      <div className=" border-t border-x flex justify-between px-[24px] h-[64px] py-[16px] rounded-t-2xl bg-gray-100">
        <div className="flex flex-row items-center">
          <img src={logo} alt={'social Icon'} className="mr-3" />
          <label>Youtube</label>
        </div>
        <div className="flex flex-row items-center gap-4">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4 text-[#4D494F] cursor-pointer select-none"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M6.414 16L16.556 5.858l-1.414-1.414L5 14.586V16h1.414zm.829 2H3v-4.243L14.435 2.322a1 1 0 011.414 0l2.829 2.829a1 1 0 010 1.414L7.243 18zM3 20h18v2H3v-2z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 text-[#4D494F] cursor-pointer select-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
            />
          </svg>
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            className="size-4 text-[#4D494F] bg-white h-8 w-8 p-2 rounded-full cursor-pointer select-none"
          >
            <path d="M11 9 H20 A2 2 0 0 1 22 11 V20 A2 2 0 0 1 20 22 H11 A2 2 0 0 1 9 20 V11 A2 2 0 0 1 11 9 z" />
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
          </svg>
        </div>
      </div>
      <div className="border-x border-b p-[24px] flex flex-col justify-between bg-gray-50 rounded-b-lg">
        {!minimize && <><span className="text-[14px] font-content break-words">{link}</span>
        <span className="my-4 text-[#5890FF]">{tags}</span></>}
        <div>
          <span className="text-[12px] text-[#9B919D]">Total Clicked</span>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-[24px] font-content mr-2">{totalClicks} </h1>
              {indicateUp ? (
                <IndicateUp percent={percent} />
              ) : (
                <IndicateDown percent={percent} />
              )}
            </div>
            <div className="p-2 rounded-full hover:bg-gray-200 duration-150">
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                className="size-4 cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkSquare;

LinkSquare.defaultProps = {
  minimize : false
}