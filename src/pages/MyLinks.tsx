import { useEffect, useState } from 'react';
import LinkSquare from '../components/common/cards/LinkSquare';
import { LinksData } from '../sampleData';
import Table from '../components/common/table';
import {
  CrossIcon,
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
import Dropdown from '../components/common/Dropdown';
import Model from '../components/common/models/Model';
import LinkDetailsCard from '../components/common/cards/LinkDetails';
import LinkEditCard from '../components/common/cards/LinkEdit';

const MyLinks: React.FC = () => {
  const [minimize, setMinimize] = useState(false);
  const [isTable, setIsTable] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [edit, setEdit] = useState({
    logo: '',
    channel: '',
    link: '',
    tags: '',
  });
  const [details, setDetails] = useState({
    logo: '',
    channel: '',
    link: '',
    tags: '',
  });
  // const {isMobile} = useDeviceDetect()
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
      render: (row: any) => (
        <div className="flex items-center">
          <label className="mr-2">{row.totalClicks}</label>
          <Indicate
            direction={row.indicateUp ? 'up' : 'down'}
            percent={row.percent}
          />
        </div>
      ),
      key: 'totalClicks',
      width: '150px',
      headerAlign: 'left',
      cellAlign: 'left',
    },
    {
      title: 'Category',
      dataIndex: 'tags',
      render: (row: any) => (
        <span className="text-blue-500 font-content">{row.tags}</span>
      ),
      key: 'tags',
      width: '',
      headerAlign: 'left',
      cellAlign: 'left',
    },
  ];

  const tableData = {
    select: isDelete,
  };

  const [filteredData, setFilteredData] = useState(LinksData);
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const editModalOpen = (value: any) => {
    setIsEditModalOpen(true);
    const data = LinksData.find((val, index) => {
      return val.id === value;
    });
    setEdit({
      logo: data?.logo ?? '',
      channel: data?.label ?? '',
      link: data?.link ?? '',
      tags: data?.tags ?? '',
    });
  };
  const detailsModelOpen = (value:any) => {
    const data = LinksData.find((val, index) => {
      return val.id === value;
    });
    setDetails(
      {
        logo: data?.logo ?? '',
        channel: data?.label ?? '',
        link: data?.link ?? '',
        tags: data?.tags ?? '',
      } 
    )
    setIsDetailsModalOpen(true);
  };
  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
  };

  const handleDetailsModalClose = () => {
    setIsDetailsModalOpen(false);
  };

  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = LinksData.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    );
    setFilteredData(results);
  }, [searchTerm]);

  return (
    <div className="w-full border pb-2 relative">
      <Model isOpen={isEditModalOpen} onClose={handleEditModalClose}>
        <LinkEditCard
          data={edit}
          handleModalClose={handleEditModalClose}
        />
      </Model>
      <Model isOpen={isDetailsModalOpen} onClose={handleDetailsModalClose}>
        <LinkDetailsCard data={details}  handleDetailsModalClose={handleDetailsModalClose}/>
      </Model>
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
                onChange={handleSearch}
                value={searchTerm}
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
              <div className="">
                <Dropdown
                  label={
                    <FilterIcon className="size-8 cursor-pointer hover:bg-gray-100 p-1 rounded-full duration-200" />
                  }
                  children={
                    <ul className="w-[200px] flex justify-center flex-col items-center border bg-white rounded-2xl py-1 shadow-md">
                      <li className=" w-full px-4  font-content py-2 border-b">
                        Hight to Low Clicks
                      </li>
                      <li className=" w-full px-4  font-content py-2 border-b">
                        Low to High Clicks
                      </li>
                      <li className=" w-full px-4  font-content py-2 border-b">
                        <span>By Dates</span>
                      </li>
                      <li className=" w-full px-4  font-content py-2">
                        Menue Item x
                      </li>
                    </ul>
                  }
                />
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
            {filteredData.map((val, index) => {
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
                    id={val.id}
                    editModalOpen={editModalOpen}
                    detailsModelOpen = {detailsModelOpen}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <Table
            columns={columns}
            dataSource={filteredData}
            tableData={tableData}
          />
        )}
      </div>
    </div>
  );
};
export default MyLinks;
