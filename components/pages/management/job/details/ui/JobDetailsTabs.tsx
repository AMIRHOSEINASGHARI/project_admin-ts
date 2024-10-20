// cmp
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import JobContent from "./JobContent";
import JobCandidates from "./JobCandidates";

const JobDetailsTabs = () => {
  return (
    <Tabs defaultValue="jobContent" className="w-[400px]">
      <TabsList className="tabList dark:bg-transparent">
        <TabsTrigger value="jobContent" className="tabTrigger">
          Job Content
        </TabsTrigger>
        <TabsTrigger value="candidates" className="tabTrigger">
          Candidates
          <Badge variant="default">12</Badge>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="jobContent">
        <JobContent />
      </TabsContent>
      <TabsContent value="candidates">
        <JobCandidates />
      </TabsContent>
    </Tabs>
  );
};

export default JobDetailsTabs;
