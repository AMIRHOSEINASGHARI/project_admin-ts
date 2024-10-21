// types
import { TourType } from "@/types/tour";
// utils
import { jsonParser } from "@/utils/functions";
// cmp
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TourContent from "./TourContent";
import TourCandidates from "./TourCandidates";

const TourDetailsTabs = ({ tour }: { tour: TourType }) => {
  return (
    <Tabs defaultValue="tourContent">
      <TabsList className="tabList dark:bg-transparent mb-5">
        <TabsTrigger value="tourContent" className="tabTrigger">
          Tour Content
        </TabsTrigger>
        <TabsTrigger value="booker" className="tabTrigger">
          Booker
          <Badge variant="default">12</Badge>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tourContent">
        <TourContent tour={tour} />
      </TabsContent>
      <TabsContent value="booker">
        <TourCandidates />
      </TabsContent>
    </Tabs>
  );
};

export default TourDetailsTabs;
