//utils
import { getServerSession } from "@/utils/session";
// constants
import { coursePage_courseCards_data } from "@/constants";
// cmp
import { Card } from "@/components/ui/card";
import View from "@/components/shared/layout/View";

const CourseCards = () => {
  const session = getServerSession();

  return (
    <div>
      <div className="xl:my-10 max-xl:mb-10">
        <h1 className="bold-value">Hi, {session?.name}👋</h1>
        <p className="text-slate-500">Let's learn something new today!</p>
      </div>
      <View variant="flex-wrap">
        {coursePage_courseCards_data.map((item) => (
          <Card
            key={item.title}
            className="relative overflow-hidden flex flex-col flex-1 min-w-[250px]"
          >
            <div
              className={`${item.bgColor} absolute top-0 right-0 transform translate-x-[60px] translate-y-[-20px] rotate-[40deg] w-[140px] h-full rounded-3xl`}
            />
            <div className="flex items-center justify-between">
              <span className="font-black text-3xl">{item.value}</span>
              <div className={`text-4xl ${item.color}`}>{item.icon}</div>
            </div>
            <span className="mt-3 text-slate-500 text-small">{item.title}</span>
          </Card>
        ))}
      </View>
    </div>
  );
};

export default CourseCards;
