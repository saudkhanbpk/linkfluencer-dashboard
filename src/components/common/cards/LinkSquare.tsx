import { EditIcon, RightArrow, SaveIcon, ShareIcon } from '../../../svg';
import IndicateDown from './indicateDown';
import IndicateUp from './IndicateUp';

interface Props {
  link: string;
  totalClicks: number;
  tags: string;
  percent: number;
  logo: string;
  indicateUp: boolean;
  minimize?: boolean;
  isDelete?: boolean;
  editModalOpen?:(val:number)=>void;
  detailsModelOpen?:(val:number)=>void;
  index?:number
  id?:number
  // handleEdit?:()=>void;
}

const LinkSquare: React.FC<Props> = ({
  link,
  totalClicks,
  tags,
  percent,
  logo,
  indicateUp,
  minimize,
  isDelete,
  editModalOpen,
  detailsModelOpen,
  id,
}) => {

  const handleClick = (id:number) =>{
    editModalOpen?.(id)
  }

  const handleDetailsClick = (id:number) =>{
    detailsModelOpen?.(id)
  }
  return (
    <div className="rounded-2xl bg-gray-100 border hover:border-black duration-150">
      <div className="flex justify-between items-center h-[64px] px-[24px]">
        <div className="flex flex-row items-center">
          <img src={logo} alt={'social Icon'} className="mr-3" />
          <label>Youtube</label>
        </div>
        {!isDelete ? (
          <div className="flex flex-row items-center gap-4">
            <EditIcon className="size-4 text-[#4D494F] cursor-pointer select-none" onClick={()=>handleClick(id??0)}/>
            <ShareIcon className="size-4 text-[#4D494F] cursor-pointer select-none" />
            <SaveIcon className="size-4 text-[#4D494F] bg-white h-8 w-8 p-2 rounded-full cursor-pointer select-none" />
          </div>
        ) : (
          <input type="checkbox" className="w-6 h-6 cursor-pointer" />
        )}
      </div>
      <div className="border-x border-b p-[24px] h-auto flex flex-col justify-between bg-gray-50 rounded-b-2xl">
        {!minimize && (
          <>
            <span className="text-[14px] font-content break-words">{link}</span>
            <span className="my-4 text-[#5890FF]">{tags}</span>
          </>
        )}
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
              <RightArrow className="size-4 cursor-pointer" onClick={()=>{handleDetailsClick(id??0)}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkSquare;
