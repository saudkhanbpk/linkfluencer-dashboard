import { DropIcon } from '../../svg';
import { UserContext } from '../../context/UserContext';
import {
  UserPassword,
  UserProfile,
  UserUpdate,
} from '../../services/userService';
import { useContext, useEffect, useState } from 'react';
import { formatISODateToDMY } from '../../utils/DateIosToDMY';
import { getCountriesData } from '../../utils/countryUtils';
import CountriesDropdown from '../../components/common/CountriesDropdown';

const Influencer: React.FC = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    status: '',
    gender: '',
    country: '',
    city: '',
    mobileNumber: '',
    address: '',
    postalCode: '',
    birthDate: '',
  });

  const [passValues, setPassValues] = useState({
    oldPassword: '',
    newPassword: '',
    conformNewPassword: '',
  });

  const [countries, setCountries] = useState<
    {
      name: string;
      iso2: string;
      iso3: string;
      dialCode: string;
      flag: string;
    }[]
  >([]);
  const [selectedDialCode, setSelectedDialCode] = useState<string>('');
  const [selectedFlag, setSelectedFlag] = useState<string>('');

  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error('useContext must be used within a UserProvider');
  }
  const { user } = userContext;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { value, name } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setPassValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleEdit = async () => {
    if (user && user._id) {
      try {
        const updatedUser = await UserUpdate(user._id, values);
        setValues(updatedUser);
      } catch (error) {
        alert('Failed to update profile');
      }
    }
  };

  const handleUpdatePassword = async () => {
    if (passValues.newPassword === passValues.conformNewPassword) {
      if (user && user._id) {
        try {
          await UserPassword(user._id, {
            oldPassword: passValues.oldPassword,
            newPassword: passValues.newPassword,
          });
          alert('Password updated successfully');
        } catch (error) {
          alert('Failed to update password');
        }
      }
    } else {
      alert('New passwords do not match');
    }
  };

  useEffect(() => {
    const getUserProfile = async () => {
      if (user && user._id) {
        const userData = await UserProfile(user._id);
        setValues({
          ...userData,
          birthDate: formatISODateToDMY(userData?.birthDate),
        });
      }
    };
    setCountries(getCountriesData());
    getUserProfile();
  }, [user]);

  return (
    <div>
      <div className="gap-4 flex flex-col md:flex-row relative mt-8">
        <div className="border md:w-3/12 py-[12px] px-[24px] rounded-3xl flex justify-center flex-col bg-[#F0F5FF]">
          <div className="flex flex-col ">
            <img
              src="/assets/sampleProfile.svg"
              alt="profile-pic"
              className="h-[50px] w-[50px]"
            />
            <h2 className="font-header text-[20px] font-[500]">FLYBIRD</h2>
          </div>
          <span className="text-sm leading-none mt-4 mb-5 text-[#4F4949] font-content">
            Complete Your Profile for a Personalized Experience!
          </span>
          <button className="border-[1px] w-[150px] text-sm md:w-auto border-[#113E53] font-bold bg-[#113E53] rounded-full px-[20px] py-[8px] text-white font-header">
            Upload Photo
          </button>
        </div>
        <div className="md:w-4/12 flex flex-col justify-between">
          <input
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            value={values.firstName}
            className="p-2 rounded-full border border-[#B3B3B2] w-full mb-4 outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            value={values.lastName}
            name="lastName"
            className="p-2 rounded-full border border-[#B3B3B2] w-full mb-4 outline-none"
          />
          <select
            className="p-2 rounded-full border border-[#B3B3B2] w-full mb-4"
            value={values.gender}
            name="gender"
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input
            type="text"
            placeholder="Email Address"
            value={values.email}
            onChange={handleChange}
            name="email"
            className="p-2 rounded-full border border-[#B3B3B2] w-full mb-4 outline-none"
          />
          <input
            type="date"
            placeholder="Birth Date"
            value={values.birthDate}
            onChange={handleChange}
            name="birthDate"
            className="p-2 rounded-full border border-[#B3B3B2] w-full mb-4 outline-none"
          />
          <div className="rounded-full border border-[#B3B3B2] w-full mb-4 outline-none flex">
            <div className="border h-full rounded-l-full bg-gray-100 p-1 w-1/4 flex justify-center items-center gap-3 border-r border-gray-300">
              <CountriesDropdown
                countries={countries}
                setSelectedDialCode={setSelectedDialCode}
                setSelectedFlag={setSelectedFlag}
                selectedDialCode={selectedDialCode}
                selectedFlag={selectedFlag}
              />
              <DropIcon
                className="text-gray-500 size-4"
                onClick={console.log()}
              />
            </div>
            <input
              type="text"
              placeholder="Mobile Number"
              value={values.mobileNumber}
              onChange={handleChange}
              name="mobileNumber"
              className="border w-full rounded-r-full px-2"
            />
          </div>
        </div>
        <div className="md:w-5/12 flex flex-col justify-between">
          <input
            type="text"
            placeholder="Enter Country"
            value={values.country}
            onChange={handleChange}
            name="country"
            className="p-2 rounded-full border border-[#B3B3B2] w-full mb-4 outline-none"
          />
          <textarea
            placeholder="Enter Address"
            value={values.address}
            onChange={handleChange}
            name="address"
            className="w-full h-[50px] md:h-full rounded-3xl border border-gray-400 outline-none resize-none p-3 mb-4"
            cols={500}
          />
          <input
            type="text"
            placeholder="Postal Code"
            value={values.postalCode}
            onChange={handleChange}
            name="postalCode"
            className="p-2 rounded-full border border-[#B3B3B2] w-full mb-4 outline-none"
          />
          <input
            type="text"
            placeholder="Enter City"
            value={values.city}
            name="city"
            onChange={handleChange}
            className="p-2 rounded-full border border-[#B3B3B2] w-full mb-4 outline-none"
          />
        </div>
      </div>
      <div className="flex mt-6 justify-end gap-4">
        <button className="md:mt-0 md:ml-2 ml-0 border-[1px] w-[120px] font-bold bg-[#F1F5F9] rounded-full px-[20px] py-[8px] text-[#113E53] font-header">
          Cancel
        </button>
        <button
          onClick={handleEdit}
          className="md:mt-0 md:ml-2 ml-0 border-[1px] w-[120px] border-[#113E53] font-bold bg-[#113E53] rounded-full px-[20px] py-[8px] text-white font-header"
        >
          Save
        </button>
      </div>
      <div className="flex flex-col mt-6 gap-4">
        <h1 className="text-4 font-[600] text-[#172B4D]">Password Set-up</h1>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="password"
            placeholder="Old Password"
            value={passValues.oldPassword}
            name="oldPassword"
            onChange={handlePassChange}
            className="p-2 rounded-full border border-[#B3B3B2] w-6/6 md:w-2/6"
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            value={passValues.conformNewPassword}
            name="conformNewPassword"
            onChange={handlePassChange}
            className="p-2 rounded-full border border-[#B3B3B2] w-6/6 md:w-2/6"
          />
          <input
            type="password"
            placeholder="New Password"
            value={passValues.newPassword}
            name="newPassword"
            onChange={handlePassChange}
            className="p-2 rounded-full border border-[#B3B3B2] w-6/6 md:w-2/6"
          />
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <button className="md:mt-0 md:ml-2 ml-0 border-[1px] w-[120px] font-bold bg-[#F1F5F9] rounded-full px-[20px] py-[8px] text-[#113E53] font-header">
          Cancel
        </button>
        <button
          onClick={handleUpdatePassword}
          className="md:mt-0 md:ml-2 ml-0 border-[1px] w-[120px] border-[#113E53] font-bold bg-[#113E53] rounded-full px-[20px] py-[8px] text-white font-header"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Influencer;
