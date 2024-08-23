import { useEffect, useState } from 'react';
import LinkSquare from '../components/common/cards/LinkSquare';
import FaviconFetcher from '../components/common/FaviconFetcher';
import { LinksData } from '../sampleData';
import Table from '../components/common/table';
const MyLinks: React.FC = () => {
  const [minimize, setMinimize] = useState(false);
  const [isTable, setIsTable] = useState(false);
  const columns = [
    {
      title: 'Channel',
      dataIndex: 'label',
      key: 'label',
      width: '140px',
      headerAlign: 'left',
      cellAlign: 'left',
    },
    {
      title: 'Link',
      dataIndex: 'link',
      key: 'link',
      width: '400px',
      headerAlign: 'left',
      cellAlign: 'left',
    },
    {
      title: 'Total Clicked',
      dataIndex: 'totalClicks',
      key: 'totalClicks',
      width: '150px',
      headerAlign: 'left',
      cellAlign: 'left',
    },
    {
      title: 'Category',
      dataIndex: 'tags',
      key: 'tags',
      width: '',
      headerAlign: 'left',
      cellAlign: 'left',
    },
  ];
  const tableData = {
    select: true,
  };
  useEffect(() => {
    console.log({ LinksData });
  }, []);

  return (
    <div className="w-full">
      <div className="flex flex-col p-[24px]">
        <div>
          <h1 className="text-2xl font-header">My LInks</h1>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-[24px] ">
          <div className="flex items-center justify-between md:w-[340px] w-full h-[48px] rounded-full px-[16px] bg-white py-1">
            <input
              type="text"
              placeholder="Paste your link here"
              className="h-full rounded-none w-full outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
              />
            </svg>
          </div>
          <button className="w-full mt-[16px] md:mt-0 md:ml-2 ml-0 md:w-[189px] border-[1px] border-[#113E53] font-bold bg-[#113E53] rounded-full px-[20px] py-[12px] text-white font-header">
            Create Smart Link
          </button>
        </div>
      </div>
      <div className="bg-white  p-[24px]">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="border-b-2 flex items-center w-full md:w-[300px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search"
              name="search"
              id="search"
              className="border-none outline-none bg-transparent p-[10px]"
            />
          </div>
          <div className="flex items-center gap-2 justify-end mt-[16px] md:mt-0">
            {!isTable ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                onClick={() => {
                  setIsTable(true);
                }}
                className=" size-9 cursor-pointer p-2 rounded-full hover:bg-gray-100 duration-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                onClick={() => {
                  setIsTable(false);
                }}
                className="size-9 cursor-pointer p-2 rounded-full hover:bg-gray-100 duration-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                />
              </svg>
            )}
            {!isTable && <div className="p-2 rounded-full hover:bg-gray-100 duration-200">
              {!minimize ? (
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="size-5 cursor-pointer"
                  onClick={() => {
                    setMinimize(!minimize);
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M.172 15.828a.5.5 0 00.707 0l4.096-4.096V14.5a.5.5 0 101 0v-3.975a.5.5 0 00-.5-.5H1.5a.5.5 0 000 1h2.768L.172 15.121a.5.5 0 000 .707zM15.828.172a.5.5 0 00-.707 0l-4.096 4.096V1.5a.5.5 0 10-1 0v3.975a.5.5 0 00.5.5H14.5a.5.5 0 000-1h-2.768L15.828.879a.5.5 0 000-.707z"
                  />
                </svg>
              ) : (
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="size-5 cursor-pointer"
                  onClick={() => {
                    setMinimize(!minimize);
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.828 10.172a.5.5 0 00-.707 0l-4.096 4.096V11.5a.5.5 0 00-1 0v3.975a.5.5 0 00.5.5H4.5a.5.5 0 000-1H1.732l4.096-4.096a.5.5 0 000-.707zm4.344-4.344a.5.5 0 00.707 0l4.096-4.096V4.5a.5.5 0 101 0V.525a.5.5 0 00-.5-.5H11.5a.5.5 0 000 1h2.768l-4.096 4.096a.5.5 0 000 .707z"
                  />
                </svg>
              )}
            </div>}
           <div className='p-2 rounded-full hover:bg-gray-100 duration-200'>
           <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
              />
            </svg>
           </div>
           <div className='p-2 rounded-full hover:bg-gray-100 duration-200'>
           <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
           </div>
          </div>
        </div>
        {!isTable ? (
          <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {LinksData.map((val, index) => {
              return (
                <div key={index} className=" ">
                  <LinkSquare
                    link={val?.link}
                    totalClicks={val?.totalClicks}
                    tags={val.tags}
                    logo={val?.logo}
                    percent={val.percent}
                    indicateUp={val.indicateUp}
                    minimize={minimize}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <Table
            columns={columns}
            dataSource={LinksData}
            tableData={tableData}
          />
        )}
      </div>
    </div>
  );
};
export default MyLinks;
