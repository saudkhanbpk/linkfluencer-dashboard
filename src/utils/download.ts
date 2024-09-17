export const handleDownloadBulkUploadTemplete = () => {
  fetch('/bulkUploadTamplate.xlsx')
    .then((response) => response.blob())
    .then((blob) => {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'bulkUploadTamplate.xlsx';
      link.click();
    })
    .catch((error) => console.error('Error downloading file:', error));
};
