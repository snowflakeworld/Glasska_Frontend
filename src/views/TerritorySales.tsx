// src/components/Card_BarChart.tsx
import React from "react";

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

import { DateRangeFilter } from "../components/Card";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

// --- Mock Data ---
const labels = ["March", "April"];

const chartData: ChartData<"bar"> = {
  labels,
  datasets: [
    {
      label: "Territory",
      data: [60, 35],
      backgroundColor: "rgba(40, 197, 238, 0.5)",
      barThickness: 120,
      borderColor: "#28C5EE",
      borderWidth: {
        top: 4,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
  ],
};

const TerritorySales: React.FC = () => {
  // Hardcoded simple data structure

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }, // Using custom Tailwind legend instead
    },
    scales: {
      x: {
        stacked: true,
        grid: { display: false },
        ticks: { color: "#081526", font: { size: 16 } },
      },
      y: {
        stacked: true,
        max: 80,
        ticks: {
          stepSize: 20,
          color: "#5B6581",
          callback: (value) => `${value}k`,
        },
        border: { dash: [5, 5] },
        grid: { color: "#D0D5DD", drawTicks: true },
      },
    },
  };

  return (
    <div className="bg-white rounded-lg border border-border shadow-sm">
      <div className="flex items-center justify-between border-b border-border p-4">
        <h3 className="text-lg font-bold">Territory Wise Sales</h3>
        <DateRangeFilter range="March to April" />
      </div>
      <div className="relative w-full h-full flex flex-col p-4 gap-4">
        <p className="text-sm font-normal text-grey-600 px-1">
          Last synced 20 minutes ago
        </p>

        {/* Simple visual bar chart using flex */}
        {/* {barData.map((bar, index) => (
            <TerritoryBarItem key={index} {...bar} />
          ))} */}
        <div className="h-72">
          <Bar data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default TerritorySales;
