import StatCard from "../components/StatCard";

interface StatItem {
  title: string;
  value: string;
  icon: string;
  change: string | null;
  status: string | null;
}

const stats: StatItem[] = [
  {
    title: "Average Completion",
    value: "6.382%",
    icon: "icon-cup",
    change: "5%",
    status: "Healthy",
  },
  {
    title: "Total Order",
    value: "524",
    icon: "icon-total-order",
    change: null,
    status: null,
  },
  {
    title: "Completed",
    value: "524",
    icon: "icon-check",
    change: "5%",
    status: "Healthy",
  },
  {
    title: "Overdue",
    value: "1",
    icon: "icon-close",
    change: null,
    status: null,
  },
];

const Statistics: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default Statistics;
