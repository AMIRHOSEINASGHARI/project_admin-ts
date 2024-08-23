import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-30 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default:
          "text-sm py-2 px-4 rounded-[8px] bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
        destructive:
          "text-sm py-2 px-4 rounded-[8px] bg-orange-500 text-slate-50 hover:bg-orange-500/90 dark:bg-orange-900/50 dark:text-orange-500 font-bold dark:hover:bg-orange-900/90",
        outline:
          "text-sm py-2 px-4 rounded-[8px] border border-slate-200 bg-white hover:bg-light2 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        secondary:
          "text-sm p-4 rounded-[8px] bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
        ghost:
          "text-sm py-2 px-4 rounded-[8px] text-slate-900 hover:bg-light3 bg-light2 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:text-light3 dark:bg-dark3",
        link: "py-2 px-4 rounded-[8px] text-slate-900 hover:bg-light2 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        icon: "p-[8px] rounded-full hover:bg-light3 hover:dark:bg-slate-800 hover:text-icon-hover-light dark:hover:text-icon-hover-dark dark:text-icon-dark text-icon-light text-[25px]",
      },
      size: {
        default: "",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
