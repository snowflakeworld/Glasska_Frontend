import { ChipProps } from "../types";

const Chip: React.FC<ChipProps> = ({
  value,
  bgColor,
  iconColor,
  textColor,
}) => {
  return (
    <span
      className={`w-fit flex items-center pl-2.5 pr-3 py-1 rounded-xl gap-1.5 ${bgColor}`}
    >
      <span className={`w-1.5 h-1.5 ${iconColor} rounded-full`} />
      <span className={`${textColor} font-medium text-sm leading-[20px]`}>
        {value}
      </span>
    </span>
  );
};

export default Chip;
