// types
import { PageParams } from "@/types/pages";
// cmp
import EditProductPage from "@/components/pages/edit-product/EditProductPage";

const EditProduct = ({ params: { id } }: PageParams) => {
  return <EditProductPage id={id} />;
};

export default EditProduct;
