import { ChipProps } from "../types";

const Chip: React.FC<ChipProps> = ({ value, bgColor, textColor }) => {
  return (
    <span
      className={`w-fit flex items-center pl-2.5 pr-3 py-1 rounded-xl gap-1.5  bg-${bgColor}`}
    >
      <span className={`w-1.5 h-1.5 bg-${textColor} rounded-full`} />
      <span className={`text-${textColor} font-medium text-sm leading-[20px]`}>
        {value}
      </span>
    </span>
  );
};

export default Chip;
