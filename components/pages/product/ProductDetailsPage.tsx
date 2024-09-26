// next
import Link from "next/link";
import { notFound } from "next/navigation";
// actions
import { getProduct } from "@/actions/product";
// icons
import { SolarAltArrowLeftLineDuotone } from "@/components/svg";
// cmp
import HeadingActions from "./ui/HeadingActions";
import View from "@/components/shared/layout/View";
import ProductImages from "./ui/ProductImages";

const ProductDetailsPage = async ({ id }: { id: string }) => {
  const data = await getProduct(id);

  if (!data?.product) notFound();

  return (
    <View orientation="vertical">
      <div className="flex items-center justify-between">
        <Link href="/products" className="back-link">
          <SolarAltArrowLeftLineDuotone />
          <span>Back</span>
        </Link>
        <HeadingActions id={id} published={data?.product?.published} />
      </div>
      <View variant="flex-gap">
        <ProductImages images={data?.product?.images} />
      </View>
    </View>
  );
};

export default ProductDetailsPage;
