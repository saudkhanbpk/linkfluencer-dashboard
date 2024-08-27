import { useEffect, useState } from 'react';
import Table from '../components/common/table';
import { UserManagementData } from '../sampleData';
import { CrossIcon, DeleteIcon, FilterIcon, SearchIcon } from '../svg';
import Dropdown from '../components/common/Dropdown';
import useDeviceDetect from '../helpers/screens';
import UserSquare from '../components/common/cards/userSquar';
import Model from '../components/common/models/Model';
interface Props {}

const UserManagement: React.FC<Props> = () => {
  const [isDelete, setIsDelete] = useState(false);
  const [filteredData, setFilteredData] = useState(UserManagementData);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [edit, setEdit] = useState({
    name: '',
    email: '',
    role: '',
  });
  const { isMobile } = useDeviceDetect();
  const handleModalOpen = () => {
    setIsModalOpen(true);
    // // alert(typeof value)
    // const data = UserManagementData.find((val, index) => {
    //   // alert(typeof index)
    //   return val.id === value;
    // });
    // setEdit({
    //   name: '',
    //   email: '',
    //   role: '',
    // });
  };
  const handleModalClose = () => setIsModalOpen(false);
  const columns = [
    {
      title: 'User ID',
      dataIndex: 'id',
      key: 'id',
      width: '120px',
      headerAlign: 'left',
      cellAlign: 'left',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '200px',
      headerAlign: 'left',
      cellAlign: 'left',
    },
    {
      title: 'Email ID',
      dataIndex: 'email',
      key: 'email',
      width: '200px',
      headerAlign: 'left',
      cellAlign: 'left',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      width: '200px',
      headerAlign: 'left',
      cellAlign: 'left',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      width: '200px',
      headerAlign: 'left',
      cellAlign: 'left',
    },
    {
      title: 'Invited By',
      dataIndex: 'invitedBy',
      key: 'invitedBy',
      width: '200px',
      headerAlign: 'left',
      cellAlign: 'left',
    },
  ];
  const tableData = {
    select: isDelete,
  };

  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = UserManagementData.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    );
    setFilteredData(results);
  }, [searchTerm]);

  return (
    <div className="">
      <Model isOpen={isModalOpen} onClose={handleModalClose}>
        <div className="md:w-[400px]">
          <h1 className="text-[24px] font-header text-[#212121]">
            Add New User
          </h1>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-full border border-gray-400 my-[16px] font-content"
          />
          <input
            type="text"
            // value={edit.tags}
            placeholder="Work Email"
            className="w-full p-3 rounded-full border border-gray-400 mb-[16px] font-content"
          />
          <select className="w-full cursor-pointer p-3 rounded-full border outline-none border-gray-400 mb-[16px]">
            <option value="" selected>
              Select Role
            </option>
            <option className="">User</option>
            <option>Manager</option>
            <option>Admin</option>
          </select>
          <div className={'mt-2 flex justify-end items-center gap-2'}>
            <button
              onClick={() => {
                setIsModalOpen(false);
              }}
              className=" border border-gray-800 font-bold rounded-full px-[20px] py-[8px] font-header"
            >
              Cancel
            </button>
            <button className=" border-[1px] font-bold bg-[#020D3A] rounded-full px-[20px] py-[8px] text-white font-header">
              Create User
            </button>
          </div>
        </div>
      </Model>
      <div className="flex flex-col p-[12px] sm:p-[24px]">
        <div className="flex flex-col xs:flex-row xs:justify-between items-start xs:items-center">
          <h1 className="text-2xl font-header">User Management</h1>
          <button
            onClick={handleModalOpen}
            className="w-full xs:w-[150px] mt-2 md:mt-0 md:ml-2 ml-0 border-[1px] border-[#113E53] font-bold bg-[#113E53] rounded-full px-[20px] py-[8px] text-white font-header"
          >
            Add User
          </button>
        </div>
      </div>
      <div className="bg-white p-[12px] sm:p-[24px]">
        {!isDelete ? (
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
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
            <div className="flex items-center gap-2 justify-end mt-[8px] md:mt-0">
              <div className="">
                <Dropdown
                side='right'
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
          <div className="flex flex-col-reverse md:flex-row justify-between items-between">
            {isDelete && isMobile ? (
              <div className="flex items-center gap-3 mb-2">
                <input type="checkbox" className="w-5 h-5 " />
                <span className="font-bold font-header text-[#172B4D]">
                  Select All
                </span>
              </div>
            ) : (
              <div></div>
            )}
            <div className="flex justify-end gap-2 my-4">
              <button
                onClick={() => {
                  setIsDelete(false);
                }}
                className="md:mt-0 md:ml-2 ml-0 border-[1px] w-[150px] border-[#113E53] font-bold rounded-full px-[20px] py-[8px] text-[#113E53] font-header"
              >
                Cancel
              </button>
              <button className="md:mt-0 md:ml-2 ml-0 border-[1px] w-[150px] border-[#113E53] font-bold bg-[#113E53] rounded-full px-[20px] py-[8px] text-white font-header">
                Delete
              </button>
              <button className="md:mt-0 md:ml-2 ml-0 border-[1px] w-[150px] border-[#113E53] font-bold bg-[#113E53] rounded-full px-[20px] py-[8px] text-white font-header">
                Block
              </button>
            </div>
          </div>
        )}
        {!isMobile ? (
          <Table
            columns={columns}
            dataSource={filteredData}
            tableData={tableData}
          />
        ) : (
          UserManagementData.map((val, index) => {
            return (
              <div className="mb-4">
                <UserSquare
                  isDelete={isDelete}
                  values={val}
                  // handleModalOpen={handleModalOpen}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default UserManagement;
