import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UploadButton from '../components/BulkUpload/UploadButton';
import ProgressBar from '../components/BulkUpload/ProgressBar';
import FileInfo from '../components/BulkUpload/FileInfo';
import SuccessMessage from '../components/BulkUpload/SuccessMessage';
import InfoPopup from '../components/BulkUpload/InfoPopup';

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
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setUploadComplete(false);
      setSmartLinksCreated(null);
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

  const handleUpload = () => {
    if (selectedFile) {
      setUploading(true);
      setTimeout(() => {
        setUploading(false);
        setSmartLinksCreated(112);
        setUploadComplete(true);
      }, 2000);
    }
  };

  const handleDownloadTemplate = () => {
    console.log('Downloading template...');
  };

  const handleGoToLinks = () => {
    navigate('/my-links');
  };

  return (
    <div className="flex flex-col items-center px-4 py-8 lg:py-16 lg:px-32 bg-white">
      <div className="p-6 w-full flex flex-col items-start">
        <h1 className="text-2xl font-header text-left">Bulk Upload</h1>
      </div>

      <div className="border-dashed border-2 border-gray-300 rounded-lg w-full lg:max-w-4xl p-8 lg:p-16 mt-4">
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

      <div className="flex justify-end w-full lg:max-w-4xl mt-2">
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
