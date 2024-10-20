import Logo from "../../assets/outlineIcon/logo";

type IProps = {
  className?: string;
  height?: string;
  width?: string;
  color?: string;
};

const GetLogo = ({ className = "", height = "32", width = "32" }: IProps) => {
  return (
    <div>
      <Logo
        className={className}
        height={height}
        width={width}
        color={"var(--text-100)"}
      />
    </div>
  );
};

export default GetLogo;
