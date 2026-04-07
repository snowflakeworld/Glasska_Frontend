import React from "react";

import Logo from "./Logo";
import MenuItem from "../components/MenuItem";
import { MenuItemProps } from "../types";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const menuItems: MenuItemProps[] = [
    { icon: "icon-dashboard", label: "Dashboard", badge: null },
    { icon: "icon-order", label: "Order Management", badge: "6" },
    { icon: "icon-schedule", label: "Schedule", badge: null },
    { icon: "icon-customer", label: "Customers", badge: null },
    { icon: "icon-notification", label: "Notifications", badge: "10" },
  ];

  const integrations: MenuItemProps[] = [
    { icon: "icon-g-drive", label: "Google Drive", badge: null },
    { icon: "icon-paypal", label: "Paypal", badge: null },
  ];

  const extraItems: MenuItemProps[] = [
    { icon: "icon-setting", label: "Settings", badge: null },
    { icon: "icon-help", label: "Help Center", badge: null },
    { icon: "icon-refer", label: "Refer family & friends", badge: null },
  ];

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 md:w-72 bg-white transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-3">
          {/* Logo */}
          <Logo />

          {/* Menu Items */}
          <nav className="space-y-1 mb-3">
            {menuItems.map((item, index) => (
              <MenuItem key={index} {...item} isSelected={index === 0} />
            ))}
          </nav>

          {/* Integrations Section */}
          <div className="mb-5 border-t border-border">
            <p className="text-xs text-grey font-medium mt-5 mb-3 mx-3">
              INTEGRATIONS
            </p>
            <div className="space-y-1">
              {integrations.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>
          </div>

          {/* Settings & Help */}
          <div className="flex flex-col flex-1 justify-end">
            <div className="space-y-1 pt-4">
              {extraItems.map((item, index) => (
                <MenuItem key={index} {...item} isExtra={true} />
              ))}
            </div>

            {/* User Profile */}
            <div className="flex items-center p-3 bg-white rounded-lg mt-6 gap-3">
              <div className="w-11 h-11 bg-gradient-to-br from-prime to-blue-1 rounded-full flex items-center justify-center text-white font-bold border-2 border-border relative">
                <span>AD</span>
                <span className="w-3 h-3 bg-green rounded-full border-[1px] border-background absolute bottom-0 right-0"></span>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary-text">
                  Admin Manager
                </p>
                <p className="text-sm font-normal text-secondary-text">
                  admin1@glasska.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
