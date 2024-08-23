// import { useState } from "react";
// import Pagination from "./pagination";

// const Index = ({ columns, dataSource, tableData }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };
//   return (
//    <div>
//      <div className="flex flex-col mt-4">
//       <div className=" overflow-x-auto pb-4">
//         <div className="min-w-full inline-block align-middle">
//           <div className="overflow-hidden rounded-2xl border border-gray-200">
//             <table className="table-auto min-w-full rounded-3xl">
//               <thead className="">
//                 <tr className="bg-gray-100 flex justify-start items-center h-[40px] relative">
//                   {tableData?.select && <th>
//                     <div className="flex items-center px-5 border w-[60px]">
//                       <input
//                         type="checkbox"
//                         className="w-5 h-5"
//                       />
//                     </div>
//                   </th>}
//                   {columns.map((val) => {
//                     return <th
//                     className="font-[500] font-content px-2"
//                     style={{ width: val.width, textAlign: val.headerAlign }}
//                     >{val.title}</th>;
//                   })}
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-300 ">
//                 {dataSource.map((data, index) => (
//                   <tr key={index} className="bg-white transition-all duration-500 hover:bg-gray-50 border flex justify-start items-center relative">
//                    {tableData.select && <td>
//                       <div className="flex items-center py-5 px-5 w-[60px]">
//                         <input
//                           type="checkbox"
//                           className="w-5 h-5"
//                         />
//                       </div>
//                     </td>}
//                     {columns.map((column) => (
//                       <td 
//                       key={column.key} 
//                       className="whitespace-nowrap overflow-hidden px-2 py-4 text-sm font-medium text-gray-900 font-content"
//                       style={{ textAlign: column.cellAlign, width:column.width }}
//                       >
//                         {data[column.key]}
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//     <Pagination totalItems={dataSource.length} itemsPerPage={5} currentPage={currentPage} onPageChange={handlePageChange}/>
//    </div>
//   );
// };

// export default Index;
import { useState } from "react";
import Pagination from "./pagination";

const Index = ({ columns, dataSource, tableData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Adjust this value as needed

  // Calculate the start and end index of items to be displayed
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = dataSource.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="flex flex-col mt-4">
        <div className="overflow-x-auto pb-4">
          <div className="min-w-full inline-block align-middle">
            <div className="overflow-hidden rounded-2xl border border-gray-200">
              <table className="table-auto min-w-full rounded-3xl">
                <thead>
                  <tr className="bg-gray-100 flex justify-start items-center h-[40px] relative">
                    {tableData?.select && (
                      <th>
                        <div className="flex items-center px-5 border w-[60px]">
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
                      className="bg-white transition-all duration-500 hover:bg-gray-50 border flex justify-start items-center relative"
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
      <Pagination
        totalItems={dataSource.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Index;
