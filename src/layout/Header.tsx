import React from "react";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="px-4 pt-4 md:px-6 md:pt-6 pb-4">
      <div className="flex items-center justify-between">
        <button
          onClick={onMenuClick}
          className="md:hidden flex items-center mr-3 text-secondary-text hover:text-gray-900"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="flex-1 md:flex-none">
          <h2 className="text-xl md:text-2xl font-semibold text-black">
            Welcome Irvan,
          </h2>
          <p className="text-sm line-clamp-2 text-grey-600">
            It’s a sunny day today, ready to make money today? 😊
          </p>
        </div>
        <button className="bg-white border border-border px-[6px] md:px-2 py-[6px] rounded-lg flex items-center gap-2 shadow-sm hover:bg-gray-50 transition ml-2">
          {/* Simple SVG calendar icon */}
          <span className="w-9 h-9 flex items-center justify-center rounded-full bg-background">
            <img
              src="/images/icon-schedule.svg"
              alt="Schedule Icon"
              className="w-5 h-5 mx-auto"
            />
          </span>
          <div className="w-32 flex-col items-start hidden md:flex">
            <span className="text-xs font-normal text-secondary-text">
              Today’s Date
            </span>
            <span className="text-sm font-semibold text-primary-text">
              1st July, 2023
            </span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
