"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    rootClassName?: string;
  }
>(({ className, value, rootClassName, max, ...props }, ref) => {
  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-[8px] w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800",
        rootClassName
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          "h-full w-full rounded-full flex-1 bg-slate-900 transition-all dark:bg-slate-50",
          className
        )}
        style={{
          transform: `translateX(-${
            (((max !== undefined ? max : 100) -
              (value !== null && value !== undefined ? value : 0)) /
              (max !== undefined ? max : 100)) *
            100
          }%)`,
        }}
      />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
