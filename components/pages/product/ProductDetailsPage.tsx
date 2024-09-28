// next
import Link from "next/link";
import { notFound } from "next/navigation";
// actions
import { getProduct } from "@/actions/product";
// icons
import { SolarAltArrowLeftLineDuotone } from "@/components/svg";
// cmp
import View from "@/components/shared/layout/View";
import ProductImages from "./ui/ProductImages";
import ProductSummaryInfo from "./ui/ProductSummaryInfo";
import ProductBadges from "./ui/ProductBadges";
import ProductInformationTabs from "./ui/ProductInformationTabs";
import ProductHeadingActions from "./ui/ProductHeadingActions";

const ProductDetailsPage = async ({ id }: { id: string }) => {
  const data = await getProduct(id);

  if (!data?.product) notFound();

  return (
    <View className="space-y-10">
      <div className="flex items-center justify-between">
        <Link href="/products" className="back-link">
          <SolarAltArrowLeftLineDuotone />
          <span>Back</span>
        </Link>
        <ProductHeadingActions id={id} published={data?.product?.published} />
      </div>
      <View variant="flex-gap" className="gap-[40px]">
        <ProductImages images={data?.product?.images} />
        <ProductSummaryInfo
          brand={data?.product?.brand}
          category={data?.product?.category}
          createdBy={data?.product?.createdBy}
          discount={data?.product?.discount}
          price={data?.product?.price}
          stock={data?.product?.stock}
          subDescription={data?.product?.subDescription}
          title={data?.product?.title}
        />
      </View>
      <ProductBadges />
      <ProductInformationTabs content={data?.product?.content} />
    </View>
  );
};

export default ProductDetailsPage;
