// next
import { Metadata } from "next";
// cmp
import CoursePage from "@/components/pages/overview/course/CoursePage";

export const metadata: Metadata = {
  title: "Course",
};

const Course = () => {
  return <CoursePage />;
};

export default Course;
