// // Pagination.js
// import React, { useEffect } from 'react';
// import { LeftArrow, RightArrow } from '../../../svg';

// const Pagination = ({
//   totalItems,
//   itemsPerPage,
//   currentPage,
//   onPageChange,
//   limit
// }) => {
//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       onPageChange(page);
//     }
//   };

//   return (
//     <div className="flex justify-between items-center mt-1">
//       <span className="text-sm font-content text-gray-700">{`showing ${limit.start} to ${limit.end} from ${totalItems} entries`}</span>
//       <div className="pagination flex items-center font-content">
//         <LeftArrow
//           className={'size-5 cursor-pointer'}
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//         />
//         <div className="flex mx-4">
//           {Array.from({ length: totalPages }, (_, index) => (
//             <span
//               key={index + 1}
//               onClick={() => handlePageChange(index + 1)}
//               style={{
//                 border:
//                   index + 1 === currentPage ? '1px solid black' : '#f9f9f9',
//               }}
//               className="h-[25px] w-[40px] rounded-full cursor-pointer select-none flex justify-center items-center text-sm"
//             >
//               {index + 1}
//             </span>
//           ))}
//         </div>
//         <RightArrow
//           className="size-5 cursor-pointer"
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//         />
//       </div>
//     </div>
//   );
// };

// export default Pagination;

import React from 'react';
import { LeftArrow, RightArrow } from '../../../svg';
import useDeviceDetect from '../../../helpers/screens';
const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  limit,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const { isMobile } = useDeviceDetect();
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbersToShow = 3; // Number of page links to show before the ellipsis

    if (totalPages <= maxPageNumbersToShow + 2) {
      // If the total pages are less than or equal to 5, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Add the first page always
      pageNumbers.push(1);

      // Show pages around the current page
      let startPage = Math.max(currentPage - 1, 2);
      let endPage = Math.min(currentPage + 1, totalPages - 1);

      if (startPage > 2) {
        pageNumbers.push('...');
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }

      // Add the last page always
      pageNumbers.push(totalPages);
    }

    return pageNumbers.map((page, index) => (
      <span
        key={index}
        onClick={() => typeof page === 'number' && handlePageChange(page)}
        style={{
          border: page === currentPage ? '1px solid black' : '#f9f9f9',
        }}
        className="h-[25px] w-[40px] rounded-full cursor-pointer select-none flex justify-center items-center text-sm"
      >
        {page}
      </span>
    ));
  };

  return (
    <div className="flex justify-between items-center mt-1">
      {!isMobile ? 
        <span className="text-sm font-content text-gray-700">{`Showing ${limit.start} to ${limit.end} of ${totalItems} entries`}</span> : <span></span>
      }
      <div className="pagination flex items-center font-content">
        <LeftArrow
          className={'size-5 cursor-pointer'}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        <div className="flex mx-4">{renderPageNumbers()}</div>
        <RightArrow
          className="size-5 cursor-pointer"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </div>
    </div>
  );
};

export default Pagination;
