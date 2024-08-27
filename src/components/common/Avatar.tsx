interface Props {
  image: string;
}

const Avatar: React.FC<Props> = ({ image }) => {
  return (
    <div className="border rounded-full h-[25px] w-[25px] flex items-center bg-gray-100">
      <img
        src={image}
        alt="user"
        className="border rounded-full w-full h-full pt-1"
      />
    </div>
  );
};

export default Avatar;
