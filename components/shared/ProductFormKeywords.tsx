"use client";

// react
import { useState } from "react";
// cmp
import { Input } from "../ui/input";
import clsx from "clsx";

type ProductFormKeywordsProps = {
  keywords: string[];
  onFieldChange: (value: string[]) => void;
};

const ProductFormKeywords = ({
  keywords,
  onFieldChange,
}: ProductFormKeywordsProps) => {
  const [inputFocus, setInputFocus] = useState(false);
  const [value, setValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Check if "Enter" is pressed
    if (e.key === "Enter" && value.trim()) {
      e.preventDefault(); // Prevent form submission

      // Prevent adding duplicate keywords
      if (!keywords.includes(value.trim())) {
        // Add the new keyword
        onFieldChange([...keywords, value.trim()]);
      }

      // Clear the input field
      setValue("");
    }
  };

  return (
    <div
      className={clsx(
        inputFocus &&
          "ring-offset-white ring-2 ring-slate-950 ring-offset-2 dark:ring-offset-slate-950 dark:ring-slate-300",
        "flex flex-wrap items-center gap-2 p-[10px] h-fit rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-transparent dark:text-light3 text-sm ring-offset-white"
      )}
    >
      <Input
        placeholder="+ Tags"
        className="flex flex-1 border-none p-[7px] w-full rounded-md bg-white dark:bg-transparent dark:text-light3 text-sm ring-offset-white focus-visible:ring-0 focus-visible:ring-offset-0 dark:border-none dark:ring-offset-0 dark:focus-visible:ring-0"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default ProductFormKeywords;
