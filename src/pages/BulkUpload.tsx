import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import FileInfo from '../components/bulkUpload/FileInfo';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import { handleDownloadBulkUploadTemplete } from '../utils/download';
import SuccessMessage from '../components/bulkUpload/SuccessMessage';
import UploadButton from '../components/bulkUpload/UploadButton';
import InfoPopup from '../components/bulkUpload/InfoPopup';
import ProgressBar from '../components/bulkUpload/ProgressBar';
const BulkUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showInfo, setShowInfo] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [smartLinksCreated, setSmartLinksCreated] = useState<number | null>(
    null,
  );
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error('useContext must be used within a UserProvider');
  }
  const { user } = userContext;

  useEffect(() => {
    if (!uploading) return;

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [uploading]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files?.[0];
      console.log({ file });
      if (file) {
        setSelectedFile(file);
        setUploadComplete(false);
        setSmartLinksCreated(null);
      }
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setUploadComplete(false);
    setSmartLinksCreated(null);
  };

  const handleImport = () => {
    document.getElementById('file-upload')?.click();
  };

  const handleUpload = async () => {
    if (selectedFile) {
      setUploading(true);
      const formData = new FormData();
      formData.append('file', selectedFile);

      // const response = await axios.post(
      //   `http://localhost:5005/users/${user?._id}/links/upload`,
      //   formData,
      //   {
      //     headers: {
      //       'Content-Type': 'multipart/form-data',
      //     },
      //   },
      // );

      // setTimeout(() => {
      setUploading(false);
      setSmartLinksCreated(112);
      setUploadComplete(true);
      // }, 2000);
    }
  };

  const handleDownloadTemplate = () => {
    handleDownloadBulkUploadTemplete();
  };

  const handleGoToLinks = () => {
    navigate('/my-links');
  };

  return (
    <div className="p-[12px] md:p-[24px] bg-white min-h-[85vh]">
      <div>
        <h1 className="text-2xl font-header">Bulk Upload</h1>
      </div>
      <div className="border-dashed border-2 border-gray-300 rounded-lg w-full mt-4 p-8">
        {uploading ? (
          <ProgressBar progress={progress} />
        ) : uploadComplete && smartLinksCreated !== null ? (
          <SuccessMessage
            smartLinksCreated={smartLinksCreated}
            onGoToLinks={handleGoToLinks}
          />
        ) : !selectedFile ? (
          <div className="flex flex-col items-center justify-center h-64 lg:h-72">
            <img
              src="/assets/uploadIcon.svg"
              alt="Upload Icon"
              className="w-12 h-12 text-gray-400 mb-4"
            />
            <p className="text-gray-500 text-center">
              Select a file or drag and drop here
            </p>
            <p className="text-sm text-gray-400 text-center">
              XLS, CSV or PDF, file size no more than 5MB
            </p>
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />
            <div className="flex flex-col lg:flex-row gap-4 mt-8 lg:mt-12">
              <UploadButton label="Import" onClick={handleImport} />
              <UploadButton
                label="Download Template"
                onClick={handleDownloadTemplate}
                variant="outline"
              />
            </div>
          </div>
        ) : (
          <FileInfo
            file={selectedFile}
            onRemoveFile={handleRemoveFile}
            onUpload={handleUpload}
          />
        )}
      </div>

      <div className="flex justify-end mt-2">
        <button
          onClick={() => setShowInfo(true)}
          className="text-gray-500 text-sm focus:outline-none"
        >
          <span className="inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25z"
              />
            </svg>
            More Info
          </span>
        </button>
      </div>

      <InfoPopup show={showInfo} onClose={() => setShowInfo(false)} />
    </div>
  );
};

export default BulkUpload;
