import { BadgeProps } from "../types";

const Badge: React.FC<BadgeProps> = ({ icon, value, bgColor, textColor }) => {
  return (
    <span
      className={`w-fit flex items-center px-1 rounded-xl gap-2 bg-${bgColor}`}
    >
      {icon && (
        <img
          src={`/images/${icon}.svg`}
          alt="Badge Icon"
          className="w-3 h-auto"
        />
      )}
      <span className={`text-${textColor} font-medium text-xs leading-[1.45]`}>
        {value}
      </span>
    </span>
  );
};

export default Badge;
