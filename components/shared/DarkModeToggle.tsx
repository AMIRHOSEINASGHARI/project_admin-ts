"use client";

import { useDarkMode } from "@/providers/DarkModeProvider";
import { Button } from "../ui/button";
import { MoonRegular, SunRegular } from "../svg";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <Button onClick={toggleDarkMode} variant="icon">
      {darkMode ? <SunRegular /> : <MoonRegular />}
    </Button>
  );
};

export default DarkModeToggle;
