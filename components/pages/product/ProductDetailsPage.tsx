// next
import Link from "next/link";
import { notFound } from "next/navigation";
// actions
import { getProduct } from "@/actions/product";
// icons
import { SolarAltArrowLeftLineDuotone } from "@/components/svg";
// cmp
import HeadingActions from "./ui/HeadingActions";

const ProductDetailsPage = async ({ id }: { id: string }) => {
  const data = await getProduct(id);

  if (!data?.product) notFound();

  return (
    <>
      <div className="flex items-center justify-between">
        <Link href="/products" className="back-link">
          <SolarAltArrowLeftLineDuotone />
          <span>Back</span>
        </Link>
        <HeadingActions id={id} published={data?.product?.published} />
      </div>
    </>
  );
};

export default ProductDetailsPage;
