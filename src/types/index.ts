export interface MenuItemProps {
  icon: string;
  label: string;
  badge: string | null;
  isSelected?: boolean;
  isExtra?: boolean;
}

export interface StatCardProps {
  title: string;
  value: string;
  icon: string;
  change: string | null;
  status: string | null;
}

export interface BadgeProps {
  icon?: string | null;
  value: string;
  bgClass: string;
  textClass: string;
}

export interface ChipProps {
  value: string;
  bgColor: string;
  iconColor: string;
  textColor: string;
}

export interface Notification {
  id: number;
  userName: string;
  userAvatar: string; // URL or local path
  action: string;
  orderId: string;
  timestamp: string;
  isStatusChange?: boolean; // Determines if the progress dots show
  oldStatus?: string;
  newStatus?: string;
}

export interface QuickAction {
  icon: string;
  title: string;
  description: string;
}
