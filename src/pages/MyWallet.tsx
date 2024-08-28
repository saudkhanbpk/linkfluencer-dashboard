import { useEffect, useState } from 'react';
import Table from '../components/common/table';
import { walletData } from '../sampleData';
import { CrossIcon, DeleteIcon, FilterIcon, SearchIcon } from '../svg';
import Dropdown from '../components/common/Dropdown';
import useDeviceDetect from '../helpers/screens';
import UserSquare from '../components/common/cards/userSquar';
import Model from '../components/common/models/Model';
interface Props {}

const MyWallet: React.FC<Props> = () => {
  const [filteredData, setFilteredData] = useState(walletData);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isMobile } = useDeviceDetect();
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => setIsModalOpen(false);
  const columns = [
    {
      title: 'No.',
      dataIndex: 'id',
      key: 'id',
      width: '120px',
      headerAlign: 'left',
      cellAlign: 'left',
    },
    {
      title: 'Invoice Date',
      dataIndex: 'invoiceDate',
      key: 'invoiceDate',
      width: '200px',
      headerAlign: 'left',
      cellAlign: 'left',
    },
    {
      title: 'Date Paid',
      dataIndex: 'datePaid',
      key: 'datePaid',
      width: '200px',
      headerAlign: 'left',
      cellAlign: 'left',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      rander:(row:any)=>(<span className={`${row.status === 'pending'?"bg-gray-300": row.status === "success"?"bg-green-200":"bg-red-200"}`}>row.status</span>),
      key: 'status',
      width: '200px',
      headerAlign: 'left',
      cellAlign: 'left',
    },
    {
      title: 'Payment Mode',
      dataIndex: 'paymentMode',
      key: 'paymentMode',
      width: '200px',
      headerAlign: 'left',
      cellAlign: 'left',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      width: '200px',
      headerAlign: 'left',
      cellAlign: 'left',
    },
  ];
  const tableData = {
    select: false,
  };
  useEffect(() => {
    const results = walletData.filter((item) =>
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
        <div className="flex flex-col">
          <h1 className="text-2xl font-header">My Wallett</h1>
          <div className="bg-white p-[24px] my-[24px] rounded-3xl flex flex-col md:flex-row items-center justify-between">
            <div className="w-full">
              <h1 className="text-[24px] font-[700] font-content text-[#172B4D] leading-none">
                $ 11253
              </h1>
              <span className="text-[#4F4949]">Available Balance</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:gap-4 w-full justify-end">
              <input
                type="text"
                placeholder="Amount"
                className="p-2 rounded-full border border-[#B3B3B2] w-full outline-none my-3 md:my-0"
              />
              <button className="w-[200px] border-[#113E53] font-bold bg-[#113E53] rounded-full px-[20px] py-[8px] text-white font-header">
                Add Money
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-[12px] sm:p-[24px]">
        {!isMobile ? (
          <Table
            columns={columns}
            dataSource={filteredData}
            tableData={tableData}
          />
        ) : (
          walletData.map((val, index) => {
            return (
              <div className="mb-4">
                {/* <UserSquare
                  isDelete={isDelete}
                  values={val}
                  // handleModalOpen={handleModalOpen}
                /> */}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default MyWallet;
