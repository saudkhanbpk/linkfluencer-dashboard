// Pagination.js
import React, { useEffect } from 'react';

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  useEffect(() => {
    console.log({ currentPage });
  }, []);
  return (
    <div className="flex justify-between items-center mt-1">
      <span className='text-sm font-content text-gray-700'>{`showing 1 to 6 from ${totalItems} entries`}</span>
      <div className="pagination flex items-center font-content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="size-5 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>

        <div className='flex mx-4'>
        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            style={{
              border: index + 1 === currentPage ? '1px solid black' : '#f9f9f9',
            }}
            className="h-[25px] w-[40px] rounded-full cursor-pointer select-none flex justify-center items-center text-sm"
          >
            {index + 1}
          </span>
        ))}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 cursor-pointer"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Pagination;
