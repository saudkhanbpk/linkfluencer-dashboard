import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from 'react';
import LinkSquare from '../components/common/cards/LinkSquare';
import { LinksData } from '../sampleData';
import Table from '../components/common/table';
import {
  DeleteIcon,
  FilterIcon,
  FourSquarIcon,
  Link45Icon,
  ListIcon,
  MaximizeArrows,
  MenimizeArrows,
  SearchIcon,
} from '../svg';
import Indicate from '../components/common/cards/Indicate';

const MyLinks: React.FC = () => {
  const [minimize, setMinimize] = useState(false);
  const [isTable, setIsTable] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const columns = [
    {
      title: 'Channel',
      key: 'label',
      width: '140px',
      headerAlign: 'left',
      cellAlign: 'left',
      render: (row: any) => (
        <div className="flex items-center">
          <img src={row.logo} alt="logo" className="w-6 h-6 mr-2" />
          <span>{row.label}</span>
        </div>
      ),
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
      // render: (row: any) => (
      //   <div className="flex items-center">
      //     <label>{row.totalClicks}</label>
      //     <Indicate direction='up' percent={20} color='green'/>
      //   </div>
      // ),
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
    select: isDelete,
  };
  useEffect(() => {
    console.log({ LinksData });
  }, []);

  return (
    <div className="w-full">
      <div className="flex flex-col p-[24px]">
        <div>
          <h1 className="text-2xl font-header">My Links</h1>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-[24px] ">
          <div className="flex items-center justify-between md:w-[340px] w-full h-[48px] rounded-full px-[16px] bg-white py-1">
            <input
              type="text"
              placeholder="Paste your link here"
              className="h-full rounded-none w-full outline-none"
            />
            <Link45Icon className="size-5 text-gray-400" />
          </div>
          <button className="w-full mt-[16px] md:mt-0 md:ml-2 ml-0 md:w-[189px] border-[1px] border-[#113E53] font-bold bg-[#113E53] rounded-full px-[20px] py-[12px] text-white font-header">
            Create Smart Link
          </button>
        </div>
      </div>
      <div className="bg-white  p-[24px]">
        {!isDelete ? (
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="border-b-2 flex items-center w-full md:w-[300px]">
              <SearchIcon className={'size-5 text-gray-400'} />
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
                <ListIcon
                  onClick={() => {
                    setIsTable(true);
                  }}
                  className="size-9 cursor-pointer p-2 rounded-full hover:bg-gray-100 duration-200"
                />
              ) : (
                <FourSquarIcon
                  onClick={() => {
                    setIsTable(false);
                  }}
                  className="size-9 cursor-pointer p-2 rounded-full hover:bg-gray-100 duration-200"
                />
              )}
              {!isTable && (
                <div className="p-2 rounded-full hover:bg-gray-100 duration-200">
                  {!minimize ? (
                    <MenimizeArrows
                      className="size-5 cursor-pointer"
                      onClick={() => {
                        setMinimize(!minimize);
                      }}
                    />
                  ) : (
                    <MaximizeArrows
                      className="size-5 cursor-pointer"
                      onClick={() => {
                        setMinimize(!minimize);
                      }}
                    />
                  )}
                </div>
              )}
              <div className="p-2 rounded-full hover:bg-gray-100 duration-200">
                <FilterIcon className="size-5 cursor-pointer" />
              </div>
              <div className="p-2 rounded-full hover:bg-gray-100 duration-200">
                <DeleteIcon
                  className={'size-5 cursor-pointer'}
                  onClick={() => {
                    setIsDelete(true);
                  }}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-between items-center">
            {isDelete && !isTable ? (
              <div className="flex items-center gap-3">
                <input type="checkbox" className="w-5 h-5 " />
                <span className="font-bold font-header">Select All</span>
              </div>
            ) : (
              <div></div>
            )}
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setIsDelete(false);
                }}
                className="w-[150px] ml-0 border-[1px] border-[#113E53] font-bold rounded-full px-[10px] py-[8px] md:py-[12px] text-[#113E53] font-header"
              >
                Cancel
              </button>
              <button className="w-[150px] ml-0 border-[1px] border-[#113E53] font-bold bg-[#113E53] rounded-full px-[10px] py-[8px] md:py-[12px] text-white font-header">
                Delete
              </button>
            </div>
          </div>
        )}
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
                    isDelete={isDelete}
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
