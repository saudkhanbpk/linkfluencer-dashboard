import React from 'react';

interface InfoPopupProps {
  show: boolean;
  onClose: () => void;
}

const InfoPopup: React.FC<InfoPopupProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
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
              Uniqueness: Ensure both prefix and suffix are unique for all smart
              links you&apos;re creating in this bulk upload.
            </li>
          </ul>
        </div>
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="py-2 px-4 bg-white text-[#113E53] border-[1px] border-[#113E53] rounded-full shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoPopup;
