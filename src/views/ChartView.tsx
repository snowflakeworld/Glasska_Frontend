// src/components/Card_DonutChart.tsx
import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  elements,
} from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";

import { AllTimeFilter } from "../components/Card";
import Chip from "../components/Chip";

// Types for the data
interface LegendItem {
  id: number;
  label: string;
  value: string;
  bgColor: string;
  textColor: string;
}

interface DonutCardProps {
  type: "pie" | "doughnut"; // Simple identifier for different data
}

// Registering the elements required for a Pie chart
ChartJS.register(ArcElement, Tooltip, Legend);

const pieData = {
  datasets: [
    {
      data: [2574, 525, 522, 123],
      backgroundColor: ["#28C5EE", "#47AF2A", "#695D48", "#D0C094"],
    },
  ],
};

const pieOptions = {
  rotation: 112,
};

const doughnutData = {
  datasets: [
    {
      data: [2574, 150],
      backgroundColor: ["#D0C094", "#47AF2A"],
    },
  ],
};

const doughnutOptions = {
  rotation: 20,
  cutout: "80%",
  elements: {
    arc: {
      borderWidth: 3,
    },
  },
};

// Legend/Metric list component
const MetricLegend: React.FC<{ items: LegendItem[] }> = ({ items }) => (
  <div className="w-full grid grid-cols-2 md:grid-cols-1 gap-3">
    {items.map((item) => (
      <div key={item.id} className="flex flex-col gap-1">
        <Chip
          value={item.label}
          bgColor={item.bgColor}
          textColor={item.textColor}
        />
        <p className="text-sm font-medium text-grey-600 pl-6">{item.value}</p>
      </div>
    ))}
  </div>
);

// Minimalist Donut Chart Visual
const DonutVisual: React.FC<{
  totalValue?: string;
  subValue?: string;
  showCenterText?: boolean;
}> = ({ totalValue, subValue, showCenterText = false }) => (
  <div className="relative w-60 aspect-square flex items-center justify-center p-4">
    {/* This is a simple Tailwind CSS representation of a donut chart shape.
         For a real chart, replace this with a Chart.js, Recharts, or SVG component. */}
    {/* Visual representation of a data segment (like 'Welcome' in image 1) */}
    <div className="absolute w-60 h-60">
      {showCenterText ? (
        <Doughnut data={doughnutData} options={doughnutOptions} />
      ) : (
        <Pie data={pieData} options={pieOptions} />
      )}
    </div>

    {showCenterText && (
      <div className="text-center">
        <p className="text-2xl font-semibold text-primary-text">{totalValue}</p>
        <p className="text-sm text-secondary-text mt-1">{subValue}</p>
      </div>
    )}
  </div>
);

const CardDonutChart: React.FC<DonutCardProps> = ({ type }) => {
  // Mock data tailored to the images
  const territoryMetrics: LegendItem[] = [
    {
      id: 1,
      label: "All Territories",
      value: "2,574",
      bgColor: "prime-2",
      textColor: "prime",
    },
    {
      id: 2,
      label: "United States",
      value: "525",
      bgColor: "green-alpha",
      textColor: "green",
    },
    {
      id: 3,
      label: "Rest Of The World",
      value: "522",
      bgColor: "brown-dark-alpha",
      textColor: "brown-dark",
    },
    {
      id: 4,
      label: "Not Specified",
      value: "123",
      bgColor: "brown-light-alpha",
      textColor: "brown-light",
    },
  ];

  const viaMetrics: LegendItem[] = [
    {
      id: 1,
      label: "Not Specified",
      value: "2,574",
      bgColor: "brown-light-alpha",
      textColor: "brown-dark",
    },
    {
      id: 2,
      label: "Welcome",
      value: "150",
      bgColor: "green-alpha",
      textColor: "green",
    },
  ];

  const isPie = type === "pie";
  const currentTitle = isPie
    ? "Territory Wise Opportunity"
    : "Opportunities via Campaign...";
  const currentMetrics = isPie ? territoryMetrics : viaMetrics;

  return (
    <div className="h-full bg-white rounded-lg border border-border shadow-sm">
      <div className="flex items-center justify-between border-b border-border p-4">
        <h3 className="text-lg font-bold">{currentTitle}</h3>
        <AllTimeFilter />
      </div>

      {/* 2-column layout */}
      <div className="w-full flex flex-col p-4 gap-4">
        <p className="text-sm font-normal text-grey-600 px-1">
          Last synced 20 minutes ago
        </p>
        <div className="flex flex-col md:flex-row gap-12 flex-grow pt-4">
          <div className="flex h-full items-center justify-start md:self-center">
            <MetricLegend items={currentMetrics} />
          </div>
          <div className="flex justify-center h-full">
            {/* Show center text only for the "Via..." chart (right side of image 1) */}
            <DonutVisual
              showCenterText={!isPie}
              totalValue="2,724"
              subValue="Total Opportunities"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDonutChart;
