interface Props {
  label: string;
  background: string;
  width: string;
  height: string;
  color: string;
}

const Button: React.FC<Props> = ({ label, background }) => {
  return <button className={`bg-[${background}]`}>{label}</button>;
};

export default Button;
