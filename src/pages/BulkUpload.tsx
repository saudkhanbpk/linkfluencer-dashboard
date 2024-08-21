import React, { useState } from 'react';

const BulkUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showInfo, setShowInfo] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [smartLinksCreated, setSmartLinksCreated] = useState<number | null>(
    null,
  );

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
        setSmartLinksCreated(112); // Example number of smart links created
        setUploadComplete(true);
      }, 2000); // Simulate upload time
    }
  };

  const handleDownloadTemplate = () => {
    console.log('Downloading template...');
    // Logic to handle downloading template goes here
  };

  const handleGoToLinks = () => {
    console.log('Navigating to My Links...');
    // Logic to navigate to the user's links goes here
  };

  return (
    <div className="flex flex-col items-center px-4 py-8 lg:py-16 lg:px-32 bg-white">
      {/* Header Section */}
      <div className="p-6 w-full flex flex-col items-start">
        <h1 className="text-2xl font-header text-left">Bulk Upload</h1>
      </div>

      {/* File Upload Section */}
      <div className="border-dashed border-2 border-gray-300 rounded-lg w-full lg:max-w-4xl p-8 lg:p-16 mt-4">
        {uploading ? (
          <div className="flex flex-col items-center justify-center h-64 lg:h-72">
            <p className="text-gray-500 text-center">Uploading...</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: '70%' }}
              ></div>
            </div>
          </div>
        ) : uploadComplete && smartLinksCreated !== null ? (
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
              {smartLinksCreated} Smart link{smartLinksCreated > 1 ? 's' : ''}{' '}
              has been created successfully
            </p>
            <button
              className="mt-4 md:w-[189px] border-[1px] border-[#113E53] font-bold bg-[#113E53] rounded-full px-[20px] py-[12px] text-white font-header"
              onClick={handleGoToLinks}
            >
              Go to My Links
            </button>
          </div>
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
              <button
                className="w-full mt-4 md:mt-0 md:w-[189px] border-[1px] border-[#113E53] font-bold bg-[#113E53] rounded-full px-[20px] py-[12px] text-white font-header"
                onClick={handleImport}
              >
                Import
              </button>
              <button
                onClick={handleDownloadTemplate}
                className="w-full mt-4 md:mt-0 md:w-[189px] font-bold bg-[#F1F5F9] rounded-full px-[20px] py-[12px] text-[#113E53] font-header whitespace-nowrap"
              >
                Download Template
              </button>
            </div>
          </div>
        ) : (
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
                {selectedFile.name}
              </p>
              <p className="text-sm text-gray-400 text-center mr-2 lg:mr-4 whitespace-nowrap">
                {(selectedFile.size / (1024 * 1024)).toFixed(1)}mb
              </p>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={handleRemoveFile}
              >
                &times;
              </button>
            </div>
            <button
              className="w-full mt-4 md:w-[189px] border-[1px] border-[#113E53] font-bold bg-[#113E53] rounded-full px-[20px] py-[12px] text-white font-header"
              onClick={handleUpload}
            >
              Upload
            </button>
          </div>
        )}
      </div>

      {/* More Info Button */}
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

      {/* Popup d'informations supplémentaires */}
      {showInfo && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 max-w-sm lg:max-w-lg mx-4 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Bulk Upload</h2>
            <div className="text-sm text-gray-700">
              <p className="font-bold">Campaign Name, Link Tags:</p>
              <ul className="list-disc pl-5 mb-4">
                <li>Character limit: 3 to 200 characters</li>
                <li>
                  Allowed characters: Letters (uppercase & lowercase), numbers,
                  spaces, underscores (_), and hyphens (-)
                </li>
              </ul>
              <p className="font-bold">Prefix & Suffix:</p>
              <ul className="list-disc pl-5">
                <li>Character limit: Minimum of 5 characters</li>
                <li>Allowed characters: Lowercase letters and numbers</li>
                <li>
                  Uniqueness: Ensure both prefix and suffix are unique for all
                  smart links you&apos;re creating in this bulk upload.
                </li>
              </ul>
            </div>
            <div className="flex justify-end mt-6">
              <button
                onClick={() => setShowInfo(false)}
                className="py-2 px-4 bg-white text-[#113E53] border-[1px] border-[#113E53] rounded-full shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BulkUpload;
