import { useState } from "react";
import Pagination from "./pagination";
import useDeviceDetect from "../../../helpers/screens";
const Index = ({ columns, dataSource, tableData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8)
  const [limit] = useState({
    start: 1,
    end: itemsPerPage, 
  })

  const {isMobile} = useDeviceDetect()

  // Calculate the start and end index of items to be displayed
  const startIndex = (currentPage - 1) * itemsPerPage;
  console.log({startIndex, itemsPerPage});
  
  const endIndex = startIndex + itemsPerPage;
  const currentItems = dataSource.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="flex flex-col mt-4 -z-50">
        <div className="overflow-x-auto pb-2 mb-2">
          <div className="min-w-full inline-block align-middle">
          {isMobile && <span className="text-sm font-content text-gray-700">{`showing ${limit.start} to ${limit.end} from ${dataSource.length} entries`}</span>}
            <div className="overflow-hidden rounded-2xl border border-gray-200 mt-1">
              <table className="table-auto min-w-full rounded-3xl">
                <thead>
                  <tr className="bg-gray-100 flex justify-start items-center border px-2 h-[50px] relative">
                    {tableData?.select && (
                      <th>
                        <div className="flex justify-center px-2 w-[60px]">
                          <input type="checkbox" className="w-5 h-5" />
                        </div>
                      </th>
                    )}
                    {columns.map((column) => (
                      <th
                        key={column.key}
                        className="font-[500] font-content px-2"
                        style={{
                          width: column.width,
                          textAlign: column.headerAlign,
                        }}
                      >
                        {column.title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  {currentItems.map((data, index) => (
                    <tr
                      key={index}
                      className="bg-white transition-all px-2 duration-500 hover:bg-gray-50 border flex justify-start items-center relative"
                    >
                      {tableData.select && (
                        <td>
                          <div className="flex items-center py-5 px-5 w-[60px]">
                            <input type="checkbox" className="w-5 h-5" />
                          </div>
                        </td>
                      )}
                      {columns.map((column) => (
                        <td
                          key={column.key}
                          className="whitespace-nowrap overflow-hidden px-2 py-4 text-sm font-medium text-gray-900 font-content"
                          style={{
                            textAlign: column.cellAlign,
                            width: column.width,
                          }}
                        >
                          {column.render ? column.render(data) : data[column.dataIndex]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
     {dataSource.length >itemsPerPage && <Pagination
        totalItems={dataSource.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        limit={{ start: startIndex + 1, end: Math.min(endIndex, dataSource.length) }} 
      />}
    </div>
  );
};

export default Index;
