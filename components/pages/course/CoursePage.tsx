// cmp
import { Card } from "@/components/ui/card";
import View from "@/components/shared/layout/View";
import CourseCards from "./ui/CourseCards";
import HoursSpent from "./ui/HoursSpent";
import CourseProgress from "./ui/CourseProgress";
import ContinueCourse from "./ui/ContinueCourse";
import FeaturedCourse from "./ui/FeaturedCourse";
import UserProfile from "./ui/UserProfile";
import UserStrength from "./ui/UserStrength";
import UserReminders from "./ui/UserReminders";

const CoursePage = () => {
  return (
    <View variant="flex-gap">
      <View orientation="vertical" className="w-full xl:w-[70%]">
        <CourseCards />
        <HoursSpent />
        <View variant="flex-gap">
          <CourseProgress />
          <ContinueCourse />
        </View>
        <FeaturedCourse />
      </View>
      <Card className="w-full xl:w-[30%]">
        <UserProfile />
        <UserStrength />
        <UserReminders />
      </Card>
    </View>
  );
};

export default CoursePage;
