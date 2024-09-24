import { useEffect, useState } from 'react';
import Table from '../components/common/table';
import { walletData } from '../sampleData';
import { DropIcon } from '../svg';
import Dropdown from '../components/common/Dropdown';
import useDeviceDetect from '../helpers/screens';

const MyWallet: React.FC = () => {
  const [filteredData, setFilteredData] = useState(walletData);
  const [searchTerm] = useState('');
  const [limit, setLimit] = useState('All');
  const [type, setType] = useState('Transaction');
  const { isMobile } = useDeviceDetect();

  const columns = [
    {
      title: 'No.',
      dataIndex: 'id',
      key: 'id',
      width: '150px',
      headerAlign: 'left',
      cellAlign: 'left',
    },
    {
      title: 'Invoice Date',
      dataIndex: 'invoiceDate',
      key: 'invoiceDate',
      width: '150px',
      headerAlign: 'left',
      cellAlign: 'left',
    },
    {
      title: 'Date Paid',
      dataIndex: 'datePaid',
      key: 'datePaid',
      width: '150px',
      headerAlign: 'left',
      cellAlign: 'left',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (row: any) => (
        <button
          className={`${
            row.status === 'pending'
              ? 'bg-gray-100'
              : row.status === 'success'
                ? 'bg-green-100 text-green-500'
                : 'bg-red-100 text-red-500'
          } px-4 rounded-full`}
        >
          {row.status}
        </button>
      ),
      key: 'status',
      width: '120px',
      headerAlign: 'left',
      cellAlign: 'left',
    },
    type === 'Purchasing' && {
      title: 'Plan',
      dataIndex: 'plan',
      render: (row: any) => <span className="text-blue-500">{row.plan}</span>,
      key: 'plan',
      width: '120px',
      headerAlign: 'left',
      cellAlign: 'left',
    },
    {
      title: 'Payment Mode',
      dataIndex: 'paymentMode',
      key: 'paymentMode',
      width: '250px',
      headerAlign: 'left',
      cellAlign: 'left',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      width: '150px',
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
      <div className="flex flex-col p-[12px] sm:p-[24px]">
        <div className="flex flex-col">
          <h1 className="text-2xl font-header">My Wallet</h1>
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
        {!isMobile && (
          <div className="flex items-center justify-between">
            <Dropdown
              label={
                <div className="flex items-center gap-4">
                  <h1 className="text-[20px] font-header">{type} History</h1>
                  <DropIcon
                    className={'size-4 text-gray-500'}
                    onClick={() => {
                      console.log('clicked');
                    }}
                  />
                </div>
              }
            >
              <div className="bg-white shadow-md w-[200px] rounded-3xl">
                <ul className="text-base">
                  <li
                    className="p-3 cursor-pointer hover:bg-gray-100 my-4"
                    onClick={() => {
                      setType('Transaction');
                    }}
                  >
                    Transaction History
                  </li>
                  <li
                    className="p-3 cursor-pointer hover:bg-gray-100 my-4"
                    onClick={() => {
                      setType('Purchasing');
                    }}
                  >
                    Purchasing History
                  </li>
                </ul>
              </div>
            </Dropdown>
            <ul className="flex gap-4 items-center">
              <li
                onClick={() => {
                  setLimit('All');
                }}
                className={`${
                  limit === 'All' ? 'text-blue-500' : 'text-[#9B919D]'
                } cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100`}
              >
                All
              </li>
              <li
                onClick={() => {
                  setLimit('Week');
                }}
                className={`${
                  limit === 'Week' ? 'text-blue-500' : 'text-[#9B919D]'
                } cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100`}
              >
                Week
              </li>
              <li
                onClick={() => {
                  setLimit('Month');
                }}
                className={`${
                  limit === 'Month' ? 'text-blue-500' : 'text-[#9B919D]'
                } cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100`}
              >
                Month
              </li>
              <li
                onClick={() => {
                  setLimit('Year');
                }}
                className={`${
                  limit === 'Year' ? 'text-blue-500' : 'text-[#9B919D]'
                } cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100`}
              >
                Year
              </li>
            </ul>
          </div>
        )}
        {isMobile && (
          <div className="flex items-center justify-between">
            <Dropdown
              label={
                <div className="flex items-center gap-4">
                  <h1 className="font-header">Transaction History</h1>
                  <DropIcon
                    className={'size-5 text-gray-500'}
                    onClick={() => {
                      console.log('hello');
                    }}
                  />
                </div>
              }
            >
              <div className="bg-white shadow-md w-[200px] rounded-3xl">
                <ul className="text-base">
                  <li
                    className="p-3 cursor-pointer hover:bg-gray-100 my-4"
                    onClick={() => setType('Transaction')}
                  >
                    Transaction History
                  </li>
                  <li
                    className="p-3 cursor-pointer hover:bg-gray-100 my-4"
                    onClick={() => setType('Purchasing')}
                  >
                    Purchasing History
                  </li>
                </ul>
              </div>
            </Dropdown>
            <Dropdown
              label={
                <div className="flex gap-2 items-center">
                  <span className="text-[#4D494F] font-header">{limit}</span>
                  <DropIcon className={'size-4'} onClick={console.log} />
                </div>
              }
              side="right"
            >
              <ul className="bg-white shadow-md py-2 rounded-2xl font-content">
                <li
                  onClick={() => {
                    setLimit('All');
                  }}
                  className={`${
                    limit === 'All' ? 'text-blue-500' : 'text-[#9B919D]'
                  } cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100`}
                >
                  All
                </li>
                <li
                  onClick={() => {
                    setLimit('Week');
                  }}
                  className={`${
                    limit === 'Week' ? 'text-blue-500' : 'text-[#9B919D]'
                  } cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100`}
                >
                  Week
                </li>
                <li
                  onClick={() => {
                    setLimit('Month');
                  }}
                  className={`${
                    limit === 'Month' ? 'text-blue-500' : 'text-[#9B919D]'
                  } cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100`}
                >
                  Month
                </li>
                <li
                  onClick={() => {
                    setLimit('Year');
                  }}
                  className={`${
                    limit === 'Year' ? 'text-blue-500' : 'text-[#9B919D]'
                  } cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100`}
                >
                  Year
                </li>
              </ul>
            </Dropdown>
          </div>
        )}
        {!isMobile ? (
          <Table
            columns={columns}
            dataSource={filteredData}
            tableData={tableData}
          />
        ) : (
          walletData.map((val, index) => (
            <div
              key={index}
              className="border-y border-b py-[12px] h-auto flex flex-col justify-between"
            >
              <table className="">
                <tbody>
                  <tr className="font-content">
                    <td className="font-semibold py-2 text-sm sm:text-[16px]">
                      Date
                    </td>
                    <td className="text-[#020D3A] text-sm sm:text-[16px]">
                      {val?.datePaid}
                    </td>
                  </tr>
                  <tr className="font-content">
                    <td className="font-semibold py-2 text-sm sm:text-[16px]">
                      Amount
                    </td>
                    <td className="text-[#020D3A] text-sm sm:text-[16px]">
                      {val?.amount}
                    </td>
                  </tr>
                  <tr className="font-content">
                    <td className="font-semibold py-2 text-sm sm:text-[16px]">
                      TRN
                    </td>
                    <td className="text-[#020D3A] text-sm sm:text-[16px]">
                      {val?.id}
                    </td>
                  </tr>
                  <tr className="font-content">
                    <td className="font-semibold py-2 pr-4 text-sm sm:text-[16px]">
                      Status
                    </td>
                    <td className={'text-[#020D3A] text-sm sm:text-[16px]'}>
                      <span
                        className={`${
                          val.status === 'pending'
                            ? 'bg-gray-100'
                            : val.status === 'success'
                              ? 'bg-green-100 text-green-500'
                              : 'bg-red-100 text-red-500'
                        } px-4 rounded-full`}
                      >
                        {val?.status}
                      </span>
                    </td>
                  </tr>
                  <tr className="font-content">
                    <td className="font-semibold py-2 text-sm sm:text-[16px]">
                      Payment
                    </td>
                    <td className="text-[#020D3A] text-sm sm:text-[16px]">
                      {val?.paymentMode}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyWallet;
