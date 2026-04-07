import React, { useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { AllTimeFilter } from "../components/Card";
import Chip from "../components/Chip";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

// --- Mock Data ---
const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
  "",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const chartData: ChartData<"bar"> = {
  labels,
  datasets: [
    {
      label: "Overdue",
      data: [
        20, 15, 5, 8, 12, 8, 2, 20, 4, 8, 4, 12, 0, 8, 8, 4, 8, 8, 8, 3, 3, 8,
        8, 2, 8,
      ],
      backgroundColor: "#28C5EE",
    },
    {
      label: "Completed",
      data: [
        10, 5, 5, 3, 3, 8, 10, 8, 8, 20, 18, 8, 0, 3, 20, 8, 20, 12, 3, 18, 18,
        8, 3, 25, 19,
      ],
      backgroundColor: "#47AF2A",
    },
    {
      label: "Total Task",
      data: [
        30, 25, 10, 12, 18, 16, 14, 30, 14, 18, 18, 24, 0, 14, 30, 18, 30, 14,
        12, 14, 8, 14, 14, 16, 18,
      ],
      backgroundColor: "#D0C094",
      borderRadius: 10, // Rounded only on the top dataset
    },
  ],
};

const chipItems = [
  {
    id: 1,
    label: "Overdue",
    bgClass: "bg-prime-2",
    iconClass: "bg-prime",
    textClass: "text-prime",
  },
  {
    id: 2,
    label: "Completed",
    bgClass: "bg-green-alpha",
    iconClass: "bg-green",
    textClass: "text-green",
  },
  {
    id: 3,
    label: "Total Task",
    bgClass: "bg-brown-light-alpha",
    iconClass: "bg-brown",
    textClass: "text-brown",
  },
];

const OrderOverview: React.FC = () => {
  const [tooltip, setTooltip] = useState<{
    opacity: number;
    top: number;
    left: number;
  }>({ opacity: 0, top: 0, left: 0 });

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }, // Using custom Tailwind legend instead
      tooltip: {
        enabled: false, // Disable default tooltip for custom cardview
        external: (context) => {
          const { tooltip: tooltipModel, chart } = context;
          if (tooltipModel.opacity === 0) {
            setTooltip((prev) => ({ ...prev, opacity: 0 }));
            return;
          }

          const position = chart.canvas.getBoundingClientRect();
          setTooltip({
            opacity: 1,
            left: position.left + window.pageXOffset + tooltipModel.caretX,
            top: position.top + window.pageYOffset + tooltipModel.caretY,
          });
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: { display: false },
        ticks: { color: "#A1AEBC", font: { size: 16 } },
      },
      y: {
        stacked: true,
        max: 80,
        ticks: { stepSize: 20, color: "#5B6581" },
        border: { dash: [5, 5] },
        grid: { color: "#f3f4f6" },
      },
    },
  };

  return (
    <div className="bg-white rounded-lg border border-border shadow-sm">
      <div className="flex items-center justify-between border-b border-border p-4">
        <h3 className="text-lg font-bold">Order Overview</h3>
        <AllTimeFilter />
      </div>
      <div className="p-4 flex justify-center">
        <div className="relative w-full bg-white">
          {/* Header & Legend */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex gap-3">
              {chipItems.map((item) => (
                <Chip
                  key={item.id}
                  value={item.label}
                  bgColor={item.bgClass}
                  iconColor={item.iconClass}
                  textColor={item.textClass}
                />
              ))}
            </div>
          </div>

          {/* Chart Area */}
          <div className="h-72">
            <Bar data={chartData} options={options} />
          </div>

          {/* Custom Card Tooltip */}
          {tooltip.opacity > 0 && (
            <div
              className="absolute z-50 pointer-events-none transition-all duration-200 bg-white p-3 rounded-xl shadow-xl border border-gray-100 min-w-52"
              style={{
                left: tooltip.left - 350, // Offset to align with the bar
                top: tooltip.top - 300,
                transform: "translate(-50%, -100%)",
              }}
            >
              <div className="flex flex-col gap-2.5">
                <Chip
                  value="30 total task"
                  bgColor="bg-brown-light-alpha"
                  iconColor="bg-brown"
                  textColor="text-brown"
                />
                <Chip
                  value="10 completed"
                  bgColor="bg-green-alpha"
                  iconColor="bg-green"
                  textColor="text-green"
                />
                <Chip
                  value="4 overdue"
                  bgColor="bg-prime-2"
                  iconColor="bg-prime"
                  textColor="text-prime"
                />
              </div>
              {/* Pointer arrow */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-gray-100"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderOverview;
