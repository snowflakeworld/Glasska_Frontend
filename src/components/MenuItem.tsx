import { MenuItemProps } from "../types";

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  label,
  badge,
  isSelected = false,
  isExtra = false,
}) => {
  return (
    <div
      className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-colors ${
        isSelected
          ? "bg-prime-2 text-primary-text"
          : `${isExtra ? "text-primary-text" : "text-secondary-text"} hover:bg-grey-100`
      }`}
    >
      <div className="flex items-center space-x-3">
        <img src={`/images/${icon}.svg`} alt={label} className="w-5 h-5" />
        <span
          className={`text-sm ${isSelected ? "font-medium" : "font-normal"}`}
        >
          {label}
        </span>
      </div>
      {badge && (
        <span className="bg-border text-secondary-text font-medium text-xs rounded-full px-2">
          {badge}
        </span>
      )}
    </div>
  );
};

export default MenuItem;
