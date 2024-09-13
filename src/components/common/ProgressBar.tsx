interface Props {
  completed: number;
}
const ProgressBar: React.FC<Props> = ({ completed }) => {
  return (
    <div className="h-[5px] flex flex-row w-full rounded-full gap-2">
      <div
        style={{
          width: `${completed}%`,
        }}
        className={`h-[5px] bg-white rounded-full`}
      >
        <div className="w-[100%] h-[5px] bg-green-950 rounded-full"></div>
      </div>
      <div
        style={{
          width: `${100 - completed}%`,
        }}
        className={`h-[5px] bg-white rounded-full`}
      ></div>
    </div>
  );
};

export default ProgressBar;
