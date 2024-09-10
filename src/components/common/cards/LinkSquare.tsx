// components/common/cards/LinkSquare.tsx
import { useState } from "react";
import { ILink } from "../../../interfaces/Link";
import { EditIcon, RightArrow, SaveIcon, ShareIcon } from "../../../svg";
import Tooltip from "../ToolTip";
import IndicateDown from "./indicateDown";
import IndicateUp from "./IndicateUp";
import FaviconLoader from "../FaviconFetcher";

interface Props {
  link: ILink;
  minimize?: boolean;
  isDelete?: boolean;
  editModalOpen?: (val: string) => void;
  detailsModelOpen?: (val: string) => void;
  handleSelectLink?:(val: string) => void;
  selectedLinks?:any[]
}

const LinkSquare: React.FC<Props> = ({
  link,
  minimize,
  isDelete,
  editModalOpen,
  detailsModelOpen,
  handleSelectLink,
  selectedLinks
}) => {
  const [linkLogo, setLinkLogo] = useState("");
  const indicateUp = true;
  const maxLength = 30;
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

  const getLinkLabel = (targetSite: string) => {
    switch (targetSite) {
      case "youtube":
        return "Youtube";
      case "facebook":
        return "Facebook";
      case "instagram":
        return "Instagram";
      case "twitter":
        return "Twitter";
      case "amazon":
        return "Amazon";
      default:
        return "Smart Link";
    }
  };

  const handleSelect = (id:string) =>{
    handleSelectLink?.(id)
    console.log("this is selected Link", selectedLinks);
    
  }
  return (
    <div className="rounded-2xl bg-gray-100 border hover:border-black duration-150">
      {/* Composant FaviconLoader pour charger l'icône de lien */}
      <FaviconLoader originalUrl={link.originalUrl} setFavicon={setLinkLogo} />
      <div className="flex justify-between items-center h-[64px] px-[24px]">
        <div className="flex flex-row items-center">
          <img src={linkLogo} alt={"social Icon"} className="mr-3" />
          <label>{getLinkLabel(link.targetSite)}</label>
        </div>
        {!isDelete ? (
          <div className="flex flex-row items-center gap-4">
            <Tooltip text={"Edit"}>
              <EditIcon
                className="size-4 text-[#4D494F] cursor-pointer select-none"
                onClick={() => handleClick(link._id ?? "0")}
              />
            </Tooltip>
            <Tooltip text={"Share"}>
              <ShareIcon className="size-4 text-[#4D494F] cursor-pointer select-none" />
            </Tooltip>
            <Tooltip text="Save">
              <SaveIcon className="size-4 text-[#4D494F] bg-white h-8 w-8 p-2 rounded-full cursor-pointer select-none" />
            </Tooltip>
          </div>
        ) : (
          <input type="checkbox" className="w-6 h-6 cursor-pointer" checked={selectedLinks?.includes(link._id)} onClick={()=>{handleSelect(link._id)}}/>
        )}
      </div>
      <div className="border-x border-b p-[24px] h-auto flex flex-col justify-between bg-gray-50 rounded-b-2xl">
        <span
          className="text-[14px] font-content break-words"
          title={link.originalUrl} // Afficher le texte complet au survol
        >
          {truncateText(link.originalUrl, maxLength)}
        </span>
        {!minimize && <span className="my-4 text-[#5890FF]">{link.tags}</span>}
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
