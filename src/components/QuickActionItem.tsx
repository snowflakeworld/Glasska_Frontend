import { QuickAction } from "../types";

const QuickActionItem: React.FC<QuickAction> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <span className="w-10 h-10 bg-background rounded-full flex items-center justify-center self-center">
            <img src={`/images/${icon}.svg`} alt={title} />
          </span>
          <div>
            <h4 className="text-base font-medium text-grey-900">{title}</h4>
            <p className="text-sm font-normal text-grey-600 mt-1">
              {description}
            </p>
          </div>
        </div>
        <svg
          className="w-5 h-5 text-grey-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );
};

export default QuickActionItem;
