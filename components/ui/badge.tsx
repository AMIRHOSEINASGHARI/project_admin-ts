import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit items-center rounded-lg border border-slate-200 px-2.5 py-1 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-slate-700 text-slate-50 hover:bg-slate-700/80 dark:bg-slate-700 dark:text-slate-400 dark:hover:bg-slate-50/80",
        secondary:
          "border-transparent bg-slate-100 text-slate-700 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
        destructive:
          "border-transparent bg-red-500 text-slate-50 hover:bg-red-500/80 dark:bg-red-700 dark:text-slate-50 dark:hover:bg-red-700/80",
        outline: "text-slate-950 dark:text-slate-50",
        green:
          "border-transparent bg-green-100 text-green-700 hover:bg-green-600/80 dark:bg-green-950 dark:text-green-400 dark:hover:bg-green-50/80",
        blue: "border-transparent bg-blue-100 text-blue-700 hover:bg-blue-600/80 dark:bg-blue-950 dark:text-blue-400 dark:hover:bg-blue-50/80",
        orange:
          "border-transparent bg-orange-100 text-orange-700 hover:bg-orange-600/80 dark:bg-orange-950 dark:text-orange-400 dark:hover:bg-orange-50/80",
        slate:
          "border-transparent bg-slate-100 text-slate-700 hover:bg-slate-600/80 dark:bg-slate-950 dark:text-slate-400 dark:hover:bg-slate-50/80",
        gray: "border-transparent bg-gray-100 text-gray-700 hover:bg-gray-600/80 dark:bg-gray-950 dark:text-gray-400 dark:hover:bg-gray-50/80",
        favorite: "border-transparent",
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
