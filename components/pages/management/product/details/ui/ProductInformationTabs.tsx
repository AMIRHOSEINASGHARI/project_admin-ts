// cmp
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductReviews from "./ProductReviews";

const ProductInformationTabs = ({ content }: { content: string }) => {
  return (
    <Card
      style={{
        padding: 0,
      }}
    >
      <Tabs defaultValue="description">
        <div className="border-b border-border-light dark:border-border-dark px-card">
          <TabsList className="bg-transparent dark:bg-transparent h-[48px] rounded-none gap-10">
            <TabsTrigger
              value="description"
              className="h-full px-0 data-[state=active]:border-black border-transparent data-[state=active]:dark:border-white border-b-2 rounded-none"
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="h-full px-0 data-[state=active]:border-black border-transparent data-[state=active]:dark:border-white border-b-2 rounded-none"
            >
              Reviews (8)
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="description" className="p-card">
          <div
            className="tiptap"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </TabsContent>
        <TabsContent value="reviews">
          <ProductReviews />
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default ProductInformationTabs;
