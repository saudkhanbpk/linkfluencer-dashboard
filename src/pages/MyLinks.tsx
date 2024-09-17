import { useContext, useEffect, useState } from 'react';
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
import Dropdown from '../components/common/Dropdown';
import Model from '../components/common/models/Model';
import LinkDetailsCard from '../components/common/cards/LinkDetails';
import LinkEditCard from '../components/common/cards/LinkEdit';
import {
  createLink,
  deleteLinks,
  getUserLinks,
  updateLink,
} from '../services/linkService';
import { UserContext } from '../context/UserContext';
import LinkSquare from '../components/common/cards/LinkSquare';
import { ILink } from '../interfaces/Link';
import LinkShareCard from '../components/LinkShareCard/LinkShare';
import { fetchIcon } from '../utils/iconUtils';
import { capitalizeFirstLetter } from '../utils/caseUtils';

const MyLinks: React.FC = () => {
  const [minimize, setMinimize] = useState(false);
  const [isTable, setIsTable] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [selectedData, setSelectedData] = useState<any>([]);
  const [filteredData, setFilteredData] = useState<any>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [data, setData] = useState<any>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const [edit, setEdit] = useState<any>({
    logo: '',
    targetSite: '',
    originalUrl: '',
    tags: [],
  });
  const [details, setDetails] = useState<any>({
    logo: '',
    targetSite: '',
    originalUrl: '',
    tags: [],
  });
  const [newLink, setNewLink] = useState('');

  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error('useContext must be used within a UserProvider');
  }
  const { user } = userContext;
  const columns = [
    {
      title: 'Channel',
      key: 'targetSite',
      width: '20%',
      headerAlign: 'left',
      dataIndex: 'targetSite',
      cellAlign: 'left',
      render: (row: any) => (
        <div className="flex items-center">
          <img
            src={fetchIcon(row.targetSite)}
            alt="logo"
            className="w-6 h-6 mr-2"
          />
          <span>{capitalizeFirstLetter(row.targetSite)}</span>
        </div>
      ),
    },
    {
      title: 'Link',
      dataIndex: 'shortUrl',
      key: 'shortUrl',
      width: '40%',
      headerAlign: 'left',
      cellAlign: 'left',
      render: (row: any) => (
        <div className="flex items-center">
          <span>{`linkfluencer.io/${row.shortUrl}`}</span>
        </div>
      ),
    },
    {
      title: 'Total Clicked',
      dataIndex: 'clickCount',
      render: (row: any) => (
        <div className="flex items-center">
          <label className="mr-2">{row.clickCount}</label>
          {/* <Indicate
            direction={row.indicateUp ? "up" : "down"}
            percent={row.percent}
          /> */}
        </div>
      ),
      key: 'clickCount',
      width: '20%',
      headerAlign: 'left',
      cellAlign: 'left',
    },
    {
      title: 'Category',
      dataIndex: 'tags',
      render: (row: any) =>
        row.tags.map((val: any, index: number) => {
          return (
            <span key={index} className="text-blue-500 font-content mr-2">
              {val}
            </span>
          );
        }),
      key: 'tags',
      width: '20%',
      headerAlign: 'left',
      cellAlign: 'left',
    },
  ];
  const tableData = {
    select: isDelete,
  };
  const editModalOpen = (value: ILink) => {
    setIsEditModalOpen(true);
    setEdit({
      ...value,
    });
  };
  const handleSelectLink = (value: any) => {
    setSelectedData(() => {
      if (selectedData?.includes(value)) {
        const filteredLinks = selectedData.filter((val: any) => {
          return val !== value;
        });
        setSelectedData(filteredLinks);
      } else {
        return [...selectedData, value];
      }
    });
  };
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectAll(false);
      setSelectedData([]);
    } else {
      const data = filteredData.map((item: { _id: any }) => item._id);
      setSelectedData(data);
      setSelectAll(true);
    }
  };
  const handleDeleteLinks = async () => {
    if (user && user._id) {
      await deleteLinks(user._id, selectedData)
        ?.then(() => {
          const newData = filteredData.filter((val: any) => {
            return !selectedData.includes(val._id);
          });
          setFilteredData(newData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const [copyLink, setCopyLink] = useState('');
  const detailsModelOpen = (value: any) => {
    const data = filteredData.find((val: ILink) => {
      return val._id === value;
    });
    setDetails(data);
    setIsDetailsModalOpen(true);
  };
  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
  };
  const handleDetailsModalClose = () => {
    setIsDetailsModalOpen(false);
  };
  const handleShareModalClose = () => {
    setIsShareModalOpen(false);
  };
  const handleShareModalOpen = (id: any) => {
    console.log({ id });
    const selectedLink = filteredData.find((val: any) => {
      return val._id === id;
    });
    console.log(selectedLink.originalUrl);

    setCopyLink(selectedLink.originalUrl);
    setIsShareModalOpen(true);
  };
  const fetchUserLinks = async () => {
    if (user && user._id) {
      const links = await getUserLinks(user._id);
      setData(links);
      setFilteredData(links);
    }
  };

  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleEdit = async (updatedLink: ILink) => {
    if (user) {
      const response = await updateLink(user._id, updatedLink);
      if (response?.status == 200) {
        const updatedArray = filteredData.map((obj: { _id: any }) =>
          obj._id === response?.data._id ? response?.data : obj,
        );
        setFilteredData(updatedArray);
        setIsEditModalOpen(false);
      }
    }
  };

  const sortByClicks = (order: 'asc' | 'desc' = 'asc') => {
    const sortedData = [...data].sort((a: any, b: any) => {
      if (order === 'asc') {
        return a.clickCount - b.clickCount;
      } else {
        return b.clickCount - a.clickCount;
      }
    });

    setFilteredData(sortedData);
  };

  const handleCreateLink = async () => {
    console.log(user);

    if (user && user._id) {
      try {
        await createLink(user._id, newLink);
        setNewLink('');
        fetchUserLinks();
      } catch (error) {
        console.error('Failed to create link:', error);
      }
    }
  };

  useEffect(() => {
    const results = data.filter((item: any) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    );
    setFilteredData(results);
  }, [searchTerm]); // Add originalData to the dependency array

  useEffect(() => {
    fetchUserLinks();
  }, []);

  return (
    <div className="w-full border pb-2 relative">
      <Model isOpen={isEditModalOpen} onClose={handleEditModalClose}>
        <LinkEditCard
          link={edit}
          handleModalClose={handleEditModalClose}
          handleEdit={handleEdit}
        />
      </Model>
      <Model isOpen={isDetailsModalOpen} onClose={handleDetailsModalClose}>
        <LinkDetailsCard
          data={details}
          handleDetailsModalClose={handleDetailsModalClose}
        />
      </Model>
      <Model isOpen={isShareModalOpen} onClose={handleShareModalClose}>
        <LinkShareCard
          handleShareModalClose={handleShareModalClose}
          link={copyLink}
        />
      </Model>
      <div className="flex flex-col p-[24px]">
        <div>
          <h1 className="text-2xl font-header">My Links</h1>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-[24px] ">
          <div className="flex items-center justify-between md:w-[340px] w-full h-[48px] rounded-full px-[16px] bg-white py-1">
            <input
              type="text"
              onChange={(e) => {
                setNewLink(e.target.value);
              }}
              value={newLink}
              placeholder="Paste your link here"
              className="h-full rounded-none w-full outline-none"
            />
            <Link45Icon className="size-5 text-gray-400" />
          </div>
          <button
            onClick={handleCreateLink}
            className="w-full mt-[16px] md:mt-0 md:ml-2 ml-0 md:w-[189px] border-[1px] border-[#113E53] font-bold bg-[#113E53] rounded-full px-[20px] py-[12px] text-white font-header"
          >
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
                  side="right"
                  label={
                    <FilterIcon className="size-8 cursor-pointer hover:bg-gray-100 p-1 rounded-full duration-200" />
                  }
                >
                  <ul className="w-[200px] flex justify-center flex-col items-center border bg-white rounded-2xl py-1 shadow-md">
                    <li
                      className=" w-full px-4  font-content py-2 border-b"
                      onClick={() => {
                        sortByClicks('desc');
                      }}
                    >
                      Hight to Low Clicks
                    </li>
                    <li
                      className=" w-full px-4  font-content py-2 border-b"
                      onClick={() => {
                        sortByClicks('asc');
                      }}
                    >
                      Low to High Clicks
                    </li>
                    <li className=" w-full px-4  font-content py-2 border-b">
                      <span>By Dates</span>
                    </li>
                    <li className=" w-full px-4  font-content py-2">
                      Menue Item x
                    </li>
                  </ul>
                </Dropdown>
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
                <input
                  type="checkbox"
                  className="w-5 h-5"
                  checked={selectAll}
                  onClick={handleSelectAll}
                />
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
              <button
                onClick={handleDeleteLinks}
                className="w-[150px] ml-0 border-[1px] border-[#113E53] font-bold bg-[#113E53] rounded-full px-[10px] py-[8px] md:py-[12px] text-white font-header"
              >
                Delete
              </button>
            </div>
          </div>
        )}
        {!isTable ? (
          <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {filteredData?.map((val: any, index: any) => {
              return (
                <div key={index} className="">
                  <LinkSquare
                    isDelete={isDelete}
                    minimize={minimize}
                    editModalOpen={() => editModalOpen(val)}
                    detailsModelOpen={detailsModelOpen}
                    handleSelectLink={handleSelectLink}
                    shareModalOpen={handleShareModalOpen}
                    selectedData={selectedData}
                    link={val}
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
            handleSelectLink={handleSelectLink}
            selectedData={selectedData}
            setSelectedData={setSelectedData}
          />
        )}
      </div>
    </div>
  );
};
export default MyLinks;
