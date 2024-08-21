// next
import Link from "next/link";
import Image from "next/image";
// actions
import { getLatestProducts } from "@/actions/product";
// utils
import { shorterText } from "@/utils/functions";
// cmp
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const LatestProducts = async () => {
  const data = await getLatestProducts();

  if (data?.code !== 200) {
    return (
      <Card className="w-full xl:w-[40%] min-h-full">
        <CardHeader>
          <CardTitle>Latest products</CardTitle>
        </CardHeader>
        <div className="w-full h-full flex flex-col justify-center">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{data?.message}</AlertDescription>
          </Alert>
        </div>
      </Card>
    );
  }

  return (
    <Card className="w-full xl:w-[40%] h-fit">
      <CardHeader>
        <CardTitle>Latest products</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {data?.products?.map((product) => (
          <Link
            key={product._id}
            href={`/products/${product._id}`}
            className="flex items-center gap-3"
          >
            <Image
              src={product?.image}
              width={100}
              height={100}
              alt="product"
              priority
              className="w-[50px] h-[50px]"
            />
            <div className="flex flex-col">
              <span className="text-small">
                {shorterText(product.title, 20)}
              </span>
              <span className="text-small text-slate-500">
                ${product.price.toLocaleString()}
              </span>
            </div>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
};

export default LatestProducts;
