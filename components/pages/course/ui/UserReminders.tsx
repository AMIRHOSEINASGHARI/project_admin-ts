// constants
import { coursePage_userReminders_data } from "@/constants";
// cmp
import { SolarCalendarBoldDuotone } from "@/components/svg";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const UserReminders = () => {
  return (
    <div>
      <CardHeader>
        <CardTitle>Reminders</CardTitle>
      </CardHeader>
      <div className="space-y-7">
        {coursePage_userReminders_data.map((item) => (
          <div key={item.id} className="w-full flex gap-3">
            <div
              className={`w-[6px] h-[16px] rounded-full opacity-30 ${item.color}`}
            />
            <div className="w-full space-y-3">
              <p className="truncate text-small font-semibold">{item.title}</p>
              <div className="flex items-center gap-1">
                <SolarCalendarBoldDuotone className="text-icon-light dark:text-icon-dark" />
                <span className="text-xs text-slate-500">{item.date}</span>
              </div>
              <div className="flex items-center justify-between gap-3 w-full">
                <div className="w-[90%]">
                  <Progress
                    value={item.value}
                    max={100}
                    className={item.color}
                  />
                </div>
                <span className="text-xs text-slate-500 text-left w-[10%]">
                  {item.value}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserReminders;
