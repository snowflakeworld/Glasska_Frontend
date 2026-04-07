import { BadgeProps } from "../types";

const Badge: React.FC<BadgeProps> = ({ icon, value, bgClass, textClass }) => {
  return (
    <span
      className={`w-fit flex items-center px-1 rounded-xl gap-2 ${bgClass}`}
    >
      {icon && (
        <img
          src={`/images/${icon}.svg`}
          alt="Badge Icon"
          className="w-3 h-auto"
        />
      )}
      <span className={`${textClass} font-medium text-xs leading-[1.45]`}>
        {value}
      </span>
    </span>
  );
};

export default Badge;
