import React from "react";
import { StatCardProps } from "../types";
import Badge from "./Badge";

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  change,
  status,
}) => {
  return (
    <div className="flex flex-row bg-white border border-border rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
      <div className="flex flex-col flex-1 gap-2">
        <h4 className="text-sm text-grey-600 font-normal">{title}</h4>
        <p className="text-xl font-semibold text-secondary-text">{value}</p>
        {change && status && (
          <div className="flex gap-[6px]">
            <Badge
              icon="icon-stat"
              value={change}
              bgColor="success-50"
              textColor="green"
            />
            <span className="text-green font-normal text-xs">{status}</span>
          </div>
        )}
      </div>
      <span className="w-10 h-10 bg-background border-[1px] border-border rounded-full flex items-center justify-center ml-4 self-center">
        <img src={`/images/${icon}.svg`} alt={title} />
      </span>
    </div>
  );
};

export default StatCard;
