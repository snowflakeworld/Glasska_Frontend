import QuickActionItem from "../components/QuickActionItem";
import { QuickAction } from "../types";

const quickActions: QuickAction[] = [
  {
    icon: "icon-add",
    title: "Create Order",
    description: "Start an order from your custo...",
  },
  {
    icon: "icon-person",
    title: "Add Customers",
    description: "Add your customer information",
  },
  {
    icon: "icon-people",
    title: "Add Employee",
    description: "After that you give them an order",
  },
];

const QuickActionView: React.FC = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-grey-900">
        Quick Actions
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {quickActions.map((action, index) => (
          <QuickActionItem key={index} {...action} />
        ))}
      </div>
    </div>
  );
};

export default QuickActionView;
