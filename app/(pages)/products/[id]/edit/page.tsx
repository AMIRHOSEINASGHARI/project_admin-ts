import EditProductPage from "@/components/pages/edit-product/EditProductPage";

const EditProduct = ({ params }: { params: { id: string } }) => {
  return <EditProductPage id={params.id} />;
};

export default EditProduct;
