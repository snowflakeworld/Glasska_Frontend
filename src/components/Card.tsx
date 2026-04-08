// A simple default filter component to match the images
export const AllTimeFilter: React.FC = () => (
  <button className="text-sm font-medium text-secondary-text bg-white border border-border px-3 py-2 rounded-lg flex items-center gap-2.5 hover:bg-gray-50 transition">
    <span>All time</span>
    <img src="/images/icon-down.svg" alt="Dropdown" className="w-5 h-5 p-1" />
  </button>
);

// Another default filter for specific date ranges
export const DateRangeFilter: React.FC<{ range: string }> = ({ range }) => (
  <button className="text-sm bg-white border border-border px-3 py-2 rounded-lg flex items-center gap-2.5 hover:bg-gray-50 transition">
    {/* Simple SVG calendar icon */}
    <img
      src="/images/icon-schedule.svg"
      alt="Calendar"
      className="w-4 h-4 fill-primary-text"
    />
    <span className="text-sm font-medium text-secondary-text">{range}</span>
  </button>
);
