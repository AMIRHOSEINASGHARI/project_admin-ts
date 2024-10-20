// types
import { JobType } from "@/types/job";
// utils
import { jsonParser } from "@/utils/functions";
// cmp
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import JobContent from "./JobContent";
import JobCandidates from "./JobCandidates";

const JobDetailsTabs = ({ job }: { job: JobType }) => {
  return (
    <Tabs defaultValue="jobContent">
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
        <JobContent job={job} />
      </TabsContent>
      <TabsContent value="candidates">
        <JobCandidates />
      </TabsContent>
    </Tabs>
  );
};

export default JobDetailsTabs;
