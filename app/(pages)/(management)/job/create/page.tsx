// next
import { Metadata } from "next";
// cmp
import CreateJobPage from "@/components/pages/management/job/create/CreateJobPage";

export const metadata: Metadata = {
  title: "Create a new job",
};

const CreateJob = () => {
  return <CreateJobPage />;
};

export default CreateJob;
