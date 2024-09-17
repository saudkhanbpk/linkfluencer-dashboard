import React from 'react';
import UploadButton from './UButton';

interface SuccessMessageProps {
  smartLinksCreated: number;
  onGoToLinks: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({
  smartLinksCreated,
  onGoToLinks,
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-64 lg:h-72 text-center">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8 text-blue-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <p className="text-gray-700 font-medium">
        {smartLinksCreated} Smart link{smartLinksCreated > 1 ? 's' : ''} has
        been created successfully
      </p>
      <UploadButton label="Go to My Links" onClick={onGoToLinks} />
    </div>
  );
};

export default SuccessMessage;
