// next
import { Metadata } from "next";
// cmp
import CreateProductPage from "@/components/pages/management/product/create/CreateProductPage";

export const metadata: Metadata = {
  title: "Create a new product",
};

const CreateProduct = () => {
  return <CreateProductPage />;
};

export default CreateProduct;
