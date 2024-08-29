import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit items-center rounded-lg px-2.5 py-1 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:focus:ring-slate-300",
  {
    variants: {
      variant: {
        default:
          "bg-slate-700 text-slate-50 dark:bg-slate-700 dark:text-slate-300",
        secondary:
          "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-50",
        destructive:
          "bg-red-500 text-slate-50 dark:bg-red-700 dark:text-slate-50",
        outline: "text-slate-950 dark:text-slate-50",
        green:
          "bg-green-100 text-green-700 dark:bg-green-800/30 dark:text-green-300",
        blue: "bg-blue-100 text-blue-700 dark:bg-blue-800/30 dark:text-blue-300",
        orange:
          "bg-orange-100 text-orange-700 dark:bg-orange-800/30 dark:text-orange-300",
        slate:
          "bg-slate-100 text-slate-700 dark:bg-slate-800/30 dark:text-slate-300",
        gray: "bg-gray-100 text-gray-700 dark:bg-gray-800/30 dark:text-gray-300",
        favorite: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
