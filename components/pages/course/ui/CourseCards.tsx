//utils
import { getServerSession } from "@/utils/session";
// constants
// cmp
import { Card } from "@/components/ui/card";
import View from "@/components/shared/layout/View";
// icons
import {
  SolarDocumentsBoldDuotone,
  SolarFolderCheckBoldDuotone,
  SolarMedalRibbonStarBoldDuotone,
} from "@/components/svg";

const coursePage_courseCards_data = [
  {
    value: 6,
    title: "Courses in progress",
    icon: <SolarDocumentsBoldDuotone className="text-yellow-500 text-4xl" />,
    bgColor: "bg-gradient-to-b from-yellow-500/20 to-yellow-500/10",
  },
  {
    value: 3,
    title: "Courses completed",
    icon: <SolarFolderCheckBoldDuotone className="text-green-500 text-4xl" />,
    bgColor: "bg-gradient-to-b from-green-500/20 to-green-500/10",
  },
  {
    value: 2,
    title: "Certificates",
    icon: (
      <SolarMedalRibbonStarBoldDuotone className="text-purple-500 text-4xl" />
    ),
    bgColor: "bg-gradient-to-b from-purple-500/20 to-purple-500/10",
  },
];

const CourseCards = () => {
  const session = getServerSession();

  return (
    <div>
      <div className="xl:my-10 max-xl:mb-10">
        <h1 className="bold-value">Hi, {session?.name}👋</h1>
        <p className="text-slate-500">Let&apos;s learn something new today!</p>
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
              <div>{item.icon}</div>
            </div>
            <span className="mt-3 text-slate-500 text-small">{item.title}</span>
          </Card>
        ))}
      </View>
    </div>
  );
};

export default CourseCards;
