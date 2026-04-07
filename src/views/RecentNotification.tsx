// src/components/Card_Notification.tsx
import React from "react";
import { AllTimeFilter } from "../components/Card";
import NotificationItem from "../components/NotificationItem";
import { Notification } from "../types";

const RecentNotification: React.FC = () => {
  // Using generic placeholder avatars
  const mockNotifications: Notification[] = [
    {
      id: 1,
      userName: "Jason Stathem",
      userAvatar:
        "img-user.png",
      action: "update the order",
      orderId: "PO_FrontStore_#183",
      timestamp: "8 minutes ago",
      isStatusChange: true,
      oldStatus: "On progress",
      newStatus: "Completed",
    },
    {
      id: 2,
      userName: "Jason Stathem",
      userAvatar:
        "img-user.png",
      action: "update the order",
      orderId: "PO_FrontStore_#183",
      timestamp: "8 minutes ago",
    },
  ];

  return (
    <div className="h-full bg-white rounded-lg border border-border shadow-sm">
      <div className="flex items-center justify-between border-b border-border p-4">
        <h3 className="text-lg font-bold">Recent Notifications</h3>
        <AllTimeFilter />
      </div>
      <div className="pt-2">
        {mockNotifications.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
      </div>
    </div>
  );
};

export default RecentNotification;
