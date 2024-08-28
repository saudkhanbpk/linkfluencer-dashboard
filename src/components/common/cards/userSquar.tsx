import { DeleteIcon } from '../../../svg';
import Avatar from '../Avatar';
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  date: string;
  invitedBy: string;
}

interface Props {
  isDelete?: boolean;
  values?: User;
  handleEdit?:()=>void;
  handleModalOpen?:(val:string)=>void;
}

const UserSquare: React.FC<Props> = ({ isDelete, values, handleModalOpen }) => {
    const handleClick = (id:string) =>{
      handleModalOpen?.(id)
    }
  return (
    <div className="rounded-2xl bg-gray-200 border hover:border-black duration-150">
      <div className="flex justify-between items-center h-[64px] px-[24px]">
        <div className="flex flex-row items-center">
          <Avatar image="/assets/User 05a.png" />
          <label className="ml-2">{values?.name ?? ''}</label>
        </div>
        {!isDelete ? (
          <div className="flex flex-row items-center gap-4">
            <DeleteIcon
              className="size-4 text-[#4D494F] cursor-pointer select-none"
              onClick={() => {handleClick(values?.id ?? '')}}
            />
          </div>
        ) : (
          <input type="checkbox" className="w-6 h-6 cursor-pointer" />
        )}
      </div>
      <div className="border-x border-b px-[24px] py-[12px] h-auto flex flex-col justify-between bg-gray-50 rounded-b-2xl">
        <table className="">
          <tr className=" font-content">
            <td className="font-semibold py-2 text-sm sm:text-[16px]">User ID</td>
            <td className=" text-[#020D3A] text-sm sm:text-[16px]">{values?.id}</td>
          </tr>
          <tr className=" font-content">
            <td className="font-semibold py-2 text-sm sm:text-[16px]">Email ID</td>
            <td className="text-[#020D3A] text-sm sm:text-[16px]">{values?.email}</td>
          </tr>
          <tr className=" font-content">
            <td className=" font-semibold py-2 text-sm sm:text-[16px]">Role</td>
            <td className=" text-[#020D3A] text-sm sm:text-[16px]">{values?.role}</td>
          </tr>
          <tr className=" font-content">
            <td className="  font-semibold py-2 pr-4 text-sm sm:text-[16px]">Payment Mode</td>
            <td className=" text-[#020D3A] text-sm sm:text-[16px]">{values?.date}</td>
          </tr>
          <tr className=" font-content">
            <td className="  font-semibold py-2 text-sm sm:text-[16px]">Invited By</td>
            <td className=" text-[#020D3A] text-sm sm:text-[16px]">{values?.invitedBy}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default UserSquare;
