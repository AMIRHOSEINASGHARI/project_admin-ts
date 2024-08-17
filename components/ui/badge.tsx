import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-slate-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300",
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
          "border-transparent bg-green-700 text-green-50 hover:bg-green-700/80 dark:bg-green-900 dark:text-green-400 dark:hover:bg-green-50/80",
        blue: "border-transparent bg-blue-700 text-blue-50 hover:bg-blue-700/80 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-50/80",
        orange:
          "border-transparent bg-orange-700 text-orange-50 hover:bg-orange-700/80 dark:bg-orange-900 dark:text-orange-400 dark:hover:bg-orange-50/80",
        slate:
          "border-transparent bg-slate-700 text-slate-50 hover:bg-slate-700/80 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-50/80",
        gray: "border-transparent bg-gray-700 text-gray-50 hover:bg-gray-700/80 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-50/80",
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
