import { useState } from "react";
import { CrossIcon } from "../../../svg";
import FaviconLoader from "../FaviconFetcher";

interface linkData {
  targetSite: string;
  originalUrl: string;
  tags: string[];
  logo: string;
}
interface Prop {
  data: linkData;
  handleModalClose?: (val: void) => void;
  handleEdit?: (val: any) => any;
}
const LinkEditCard: React.FC<Prop> = ({
  data,
  handleModalClose,
  handleEdit,
}) => {
  const handleClose = () => {
    handleModalClose?.();
  };

  const [tags, setTags] = useState<any>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [linkLogo, setLinkLogo] = useState("");
  const handleChange = (e: any) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault(); // Prevent form submission if inside a form
      setInputValue("");
      // Add the input value to tags array
      setTags([...tags, inputValue]);

      // Clear the input field
      setInputValue("");
    }
  };

  const removeTage = (index: any) => {
    const updatedTags = tags.filter((val: any, i: any) => {
      return index !== i;
    });
    setTags(updatedTags);
  };
  return (
    <div className="md:w-[500px]">
      <h1 className="text-[24px] font-header">Data Link</h1>
      <div className="flex justify-between items-center my-[18px]">
        <div className="flex items-center gap-2">
        <FaviconLoader
            originalUrl={data.originalUrl}
            setFavicon={setLinkLogo}
          />
          <img
            src={linkLogo}
            className="w-[46px] h-[33px] object-contain"
            alt="social Media Logo"
          />
          <label className="font-header text-[20px]">{data.targetSite}</label>
        </div>
        <CrossIcon
          className={"size-5 text-black cursor-pointer"}
          onClick={handleClose}
        />
      </div>
      <input
        type="text"
        value={data.originalUrl}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="Smart Link"
        name="link"
        className="w-full p-2 rounded-full border border-gray-400 my-[16px]"
      />
      {/* <input
        type="text"
        value={data.tags}
        name='tags'
        placeholder='Add Tags'
        className="w-full p-2 rounded-full border border-gray-400 mb-[16px]"
        onChange={handleEdit}
      /> */}
      <div className=" border border-gray-400 p-[10px] rounded-3xl flex flex-wrap gap-2">
        {tags.map((val: any, index: any) => {
          return (
            <label
              key={index}
              className="flex justify-start items-center p-1 rounded-3xl bg-gray-100 shadow-md"
            >
              <CrossIcon
                className={
                  "size-5 p-[2px] rounded-full bg-white text-gray-500 cursor-pointer"
                }
                onClick={() => {
                  removeTage(index);
                }}
              />
              <span className="pr-3 pl-2">{val}</span>
            </label>
          );
        })}
        <input
          type="text"
          name="tags"
          placeholder="tags ..."
          className="outline-none"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyPress={handleChange}
        />
      </div>
      <div className={"mt-2 flex justify-end items-center gap-2"}>
        <button
          className="w-[113px] border border-gray-800 font-bold rounded-full px-[20px] py-[8px] font-header"
          onClick={handleClose}
        >
          Ok
        </button>
        <button className="w-[113px] border-[1px] font-bold bg-[#531111] rounded-full px-[20px] py-[8px] text-white font-header">
          Save
        </button>
      </div>
    </div>
  );
};

export default LinkEditCard;
