import { useState } from 'react';

const useFileUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showInfo, _setShowInfo] = useState(false);
  const [uploading, _setUploading] = useState(false);
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

  return {
    selectedFile,
    showInfo,
    uploading,
    uploadComplete,
    smartLinksCreated,
    handleFileChange,
    handleRemoveFile,
    handleImport,
  };
};

export default useFileUpload;
