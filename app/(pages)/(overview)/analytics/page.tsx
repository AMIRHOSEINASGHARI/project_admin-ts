// next
import { Metadata } from "next";
// cmp
import AnalyticsPage from "@/components/pages/overview/analytics/AnalyticsPage";

export const metadata: Metadata = {
  title: "Analytics",
};

const Analytics = () => {
  return <AnalyticsPage />;
};

export default Analytics;
