// Pagination.js
import React, { useEffect } from 'react';
import { LeftArrow, RightArrow } from '../../../svg';

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  limit
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-between items-center mt-1">
      <span className="text-sm font-content text-gray-700">{`showing ${limit.start} to ${limit.end} from ${totalItems} entries`}</span>
      <div className="pagination flex items-center font-content">
        <LeftArrow
          className={'size-5 cursor-pointer'}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        <div className="flex mx-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <span
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              style={{
                border:
                  index + 1 === currentPage ? '1px solid black' : '#f9f9f9',
              }}
              className="h-[25px] w-[40px] rounded-full cursor-pointer select-none flex justify-center items-center text-sm"
            >
              {index + 1}
            </span>
          ))}
        </div>
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
