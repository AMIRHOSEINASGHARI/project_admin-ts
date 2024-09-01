"use client";

import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import View from "@/components/shared/layout/View";
// icons
import { SolarCalendarBoldDuotone } from "@/components/svg";

const CalendarSearch = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  return (
    <View variant="flex-gap" className="w-full xl:w-[40%]">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "w-full bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent flex items-center justify-between py-[16px] px-[14px] rounded-md border border-slate-200 dark:border-slate-700",
              !startDate && "text-muted-foreground"
            )}
          >
            {startDate ? (
              format(startDate, "MM/dd/yyyy")
            ) : (
              <span className="text-slate-500 text-small font-light">
                Start date
              </span>
            )}
            <SolarCalendarBoldDuotone className="text-icon-size text-icon-light dark:text-icon-dark" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto" side="bottom">
          <Calendar
            mode="single"
            selected={startDate}
            onSelect={setStartDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "w-full bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent flex items-center justify-between py-[16px] px-[14px] rounded-md border border-slate-200 dark:border-slate-700",
              !endDate && "text-muted-foreground"
            )}
          >
            {endDate ? (
              format(endDate, "MM/dd/yyyy")
            ) : (
              <span className="text-slate-500 text-small font-light">
                End date
              </span>
            )}
            <SolarCalendarBoldDuotone className="text-icon-size text-icon-light dark:text-icon-dark" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={endDate}
            onSelect={setEndDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </View>
  );
};

export default CalendarSearch;