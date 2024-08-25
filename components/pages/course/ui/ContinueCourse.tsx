// next
import Image from "next/image";
// constants
import { coursePage_continueCourse_data } from "@/constants";
// cmp
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const ContinueCourse = () => {
  return (
    <Card className="w-full xl:w-1/2">
      <CardHeader className="mb-8">
        <CardTitle>Continue course</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {coursePage_continueCourse_data.map((item) => (
          <div key={item.id} className="flex items-center gap-4 w-full">
            <Image
              src={`/images/courses/course-${item.id}.png`}
              width={100}
              height={100}
              alt="course"
              priority
              className="rounded-xl w-[55px]"
            />
            <div className="overflow-hidden w-full">
              <p className="truncate text-small font-medium">{item.title}</p>
              <div>
                <span className="text-xs text-slate-400 dark:text-slate-500">
                  Lessons: {item.lessons}/12
                </span>
                <div className="flex items-center justify-between gap-3">
                  <Progress
                    value={(item.lessons * 100) / item.max}
                    className="bg-theme-yellow"
                  />
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                    {((item.lessons / item.max) * 100).toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ContinueCourse;
