// next
import { Metadata } from "next";
// cmp
import DashboardPage from "@/components/pages/overview/dashboard/DashboardPage";

export const metadata: Metadata = {
  title: "Dashboard",
};

const Dashboard = () => {
  return <DashboardPage />;
};

export default Dashboard;
