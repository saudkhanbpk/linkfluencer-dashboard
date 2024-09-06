import React from 'react';
import UploadButton from './UploadButton';

interface FileInfoProps {
  file: File;
  onRemoveFile: () => void;
  onUpload: () => void;
}

const FileInfo: React.FC<FileInfoProps> = ({
  file,
  onRemoveFile,
  onUpload,
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-64 lg:h-72">
      <img
        src="/assets/fileIcon.svg"
        alt="File Icon"
        className="w-12 h-12 mb-4"
      />
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <p className="text-gray-500 text-center mr-2 lg:mr-4 whitespace-nowrap">
          Selected file
        </p>
        <p className="text-gray-700 text-center font-semibold mr-2 lg:mr-4 whitespace-nowrap">
          {file.name}
        </p>
        <p className="text-sm text-gray-400 text-center mr-2 lg:mr-4 whitespace-nowrap">
          {(file.size / (1024 * 1024)).toFixed(1)}mb
        </p>
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={onRemoveFile}
        >
          &times;
        </button>
      </div>
      <UploadButton label="Upload" onClick={onUpload} />
    </div>
  );
};

export default FileInfo;
