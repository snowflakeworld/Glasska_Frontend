import { Notification } from "../types";

const NotificationItem: React.FC<{ notification: Notification }> = ({
  notification,
}) => (
  <div className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-xl transition">
    <img
      src={`/images/${notification.userAvatar}`}
      alt={notification.userName}
      className="w-10 h-10 rounded-full aspect-square object-cover"
    />
    <div className="flex-grow">
      <div className="flex flex-col justify-between items-start gap-1">
        <p className="text-base text-gray-900">
          <span className="font-semibold text-primary-text">
            {notification.userName}
          </span>{" "}
          <span className="text-grey font-medium">{notification.action}</span>{" "}
          <span className="text-primary-text font-semibold">
            {notification.orderId}
          </span>
        </p>
        <p className="text-sm text-gray-400 whitespace-nowrap">
          {notification.timestamp}
        </p>
      </div>

      {notification.isStatusChange && (
        <div className="flex items-center gap-4 mt-4 text-sm font-medium">
          {/* Previous Status (Orange) */}
          <div className="flex items-center gap-1.5 text-orange">
            <div className="w-5 h-5 flex items-center justify-center bg-orange-alpha rounded-full">
              <span className="w-1.5 h-1.5 bg-orange rounded-full" />
            </div>
            {notification.oldStatus}
          </div>
          {/* Arrow */}
          <img
            src="/images/icon-arrow.svg"
            alt="Calendar"
            className="w-5 h-auto fill-grey"
          />
          {/* New Status (Green) */}
          <div className="flex items-center gap-1.5 text-green">
            <div className="w-5 h-5 flex items-center justify-center bg-green-alpha rounded-full">
              <span className="w-1.5 h-1.5 bg-green rounded-full" />
            </div>
            {notification.newStatus}
          </div>
        </div>
      )}
    </div>
    {/* Ellipsis/Menu Button */}
    <button className="text-sm bg-white border border-border p-1.5 rounded-lg flex items-center hover:bg-gray-50 transition">
      {/* Simple SVG calendar icon */}
      <img
        src="/images/icon-more.svg"
        alt="Calendar"
        className="w-6 h-auto fill-primary-text"
      />
    </button>
  </div>
);

export default NotificationItem;
