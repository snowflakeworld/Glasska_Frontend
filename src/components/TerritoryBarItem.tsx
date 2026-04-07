const TerritoryBarItem: React.FC<{
  value: string;
  height: number;
  label: string;
}> = ({ value, height, label }) => {
  return (
    <div className="flex flex-col items-center flex-1 w-full max-w-sm relative">
      {/* The data label (e.g., 40k) */}
      <div className="absolute -top-7 text-sm font-semibold text-gray-900 bg-white/70 px-2 rounded">
        {value}
      </div>

      {/* The main bar */}
      <div
        style={{ height: `${height}px` }}
        className="w-full bg-cyan-100 rounded-md border-t-2 border-cyan-400"
      />

      {/* The X-axis label */}
      <p className="mt-2 text-sm text-gray-900 font-medium">{label}</p>
    </div>
  );
};

export default TerritoryBarItem;