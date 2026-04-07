import { type FC } from "react";

import OrderOverview from "../views/OrderOverview";
import TerritorySales from "../views/TerritorySales";
import RecentNotification from "../views/RecentNotification";
import CardDonutChart from "../views/ChartView";
import Statistics from "../views/Statistics";
import QuickActionView from "../views/QuickActionView";

const Admin: FC = () => {
  return (
    <div className="flex-1 overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <div className="px-4 pb-4 md:px-6 md:pb-6 space-y-6">
        {/* Statistics Cards */}
        <Statistics />

        {/* Order Overview */}
        <OrderOverview />

        {/* Territory Sales and Recent Notifications */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="h-full">
            <TerritorySales />
          </div>
          <div className="h-full">
            <RecentNotification />
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="h-full">
            <CardDonutChart type="pie" />
          </div>
          <div className="h-full">
            <CardDonutChart type="doughnut" />
          </div>
        </div>

        {/* Quick Actions */}
        <QuickActionView />
      </div>
    </div>
  );
};

export default Admin;
