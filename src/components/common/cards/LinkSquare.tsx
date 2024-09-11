import { useState } from "react";
import { ILink } from "../../../interfaces/Link";
import { CopyIcon, EditIcon, RightArrow, ShareIcon } from "../../../svg";
import Tooltip from "../ToolTip";
import IndicateDown from "./IndicateDown";
import IndicateUp from "./IndicateUp";
import FaviconLoader from "../FaviconFetcher";
import { getLinkLabel } from "../../../utils/linkUtils";

interface Props {
  link: ILink;
  minimize?: boolean;
  isDelete?: boolean;
  editModalOpen?: (val: string) => void;
  detailsModelOpen?: (val: string) => void;
  handleSelectLink?: (val: string) => void;
  shareModelOpen?: (val: string) => void; // Add the shareModelOpen property
  selectedData?: any[];
}

const LinkSquare: React.FC<Props> = ({
  link,
  minimize,
  isDelete,
  editModalOpen,
  detailsModelOpen,
  handleSelectLink,
  shareModelOpen,
  selectedData
}) => {
  const [linkLogo, setLinkLogo] = useState("");
  const indicateUp = true;
  const maxLength = 10;

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const handleClick = (id: string) => {
    editModalOpen?.(id);
  };

  const handleDetailsClick = (id: string) => {
    detailsModelOpen?.(id);
  };
  
  const handleShareClick = (id: string) => {
    shareModelOpen?.(id);
  };
  const handleSelect = (id:string) =>{
    handleSelectLink?.(id)
    console.log("this is selected Link", selectedData);
  };

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(`linkfluencer.io/${text}`);
      alert("Smart link copied successfully");
    } catch (err) {
      console.error("Error : ", err);
    }
  };

  return (
    <div className="rounded-2xl bg-gray-100 border hover:border-black duration-150">
      <FaviconLoader originalUrl={link.originalUrl} setFavicon={setLinkLogo} target={link.targetSite} />
      <div className="flex justify-between items-center h-[64px] px-[24px]">
        <div className="flex flex-row items-center">
          <img src={linkLogo} alt={"social Icon"} className="mr-3 h-[30px] w-[30px]" />
          <label>{getLinkLabel(link.targetSite)}</label>
        </div>
        {!isDelete ? (
          <div className="flex flex-row items-center gap-4">
            <Tooltip text="Edit">
              <EditIcon
                className="size-4 text-[#4D494F] cursor-pointer select-none"
                onClick={() => handleClick(link._id ?? "0")}
              />
            </Tooltip>
            <Tooltip text="Share">
              <ShareIcon onClick={()=> handleShareClick(link._id ?? "0")} className="size-4 text-[#4D494F] cursor-pointer select-none" />
            </Tooltip>
            <Tooltip text="Copy">
              <div onClick={async () => await handleCopy(link.shortUrl)} >
                <CopyIcon
                  className="size-4 text-[#4D494F] cursor-pointer select-none"
                  
                />
              </div>
            </Tooltip>
          </div>
        ) : (
          <input type="checkbox" className="w-6 h-6 cursor-pointer" checked={selectedData?.includes(link._id)} onClick={() => { handleSelect(link._id) }} />
        )}
      </div>
      <div className="border-x border-b p-[24px] h-auto flex flex-col justify-between bg-gray-50 rounded-b-2xl">
        <span
          className="text-[14px] font-content break-words"
          title={link.shortUrl}
        >
          {`linkfluencer.io/${truncateText(link.shortUrl, maxLength)}`}
        </span>
        {!minimize && (
          <div className="my-4 text-[#5890FF]">
            {link.tags?.map((tag, index) => (
              <span key={index} className="mr-2">
                {`#${tag}`}
              </span>
            ))}
          </div>
        )}
        <div>
          <span className="text-[12px] text-[#9B919D]">Total Clicked</span>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-[24px] font-content mr-2">
                {link.clickCount}{" "}
              </h1>
              {indicateUp ? (
                <IndicateUp percent={3} />
              ) : (
                <IndicateDown percent={2} />
              )}
            </div>
            <div className="p-2 rounded-full hover:bg-gray-200 duration-150">
              <Tooltip text={"Details"}>
                <RightArrow
                  className="size-4 cursor-pointer"
                  onClick={() => {
                    handleDetailsClick(link._id ?? "0");
                  }}
                />
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkSquare;