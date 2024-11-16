// next
import { Metadata } from "next";
// cmp
import EcommercePage from "@/components/pages/overview/ecommerce/EcommercePage";

export const metadata: Metadata = {
  title: "Ecommerce",
};

const Ecommerce = () => {
  return <EcommercePage />;
};

export default Ecommerce;
