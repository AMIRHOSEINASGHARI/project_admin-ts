"use client";

// react
import { useState } from "react";
// types
import { NavColor, PresetType } from "@/types/shared";
// providers
import {
  useDarkMode,
  useNavColor,
  useThemePreset,
} from "@/providers/ThemeProvider";
// cmp
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
// icons
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";
import View from "./View";
// icons
import {
  CrossRegular,
  MoonRegular,
  RectanglesMixedRegular,
  SettingsRegular,
  SidebarLeftFill,
  SidebarRegular,
  SunRegular,
} from "@/components/svg";
import clsx from "clsx";

type PresetButton = {
  name: PresetType;
  color: string;
  background: string;
  isActive: boolean;
};

type NavColorButton = {
  name: NavColor;
  icon: JSX.Element;
  isActive: boolean;
};

const HiddenTags = () => (
  <VisuallyHidden.Root>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription></SheetDescription>
    </SheetHeader>
  </VisuallyHidden.Root>
);

const AppearanceSettings = () => {
  const [open, setOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { themePreset, changeThemePreset } = useThemePreset();
  const { navColor, changeNavColor } = useNavColor();

  const onOpenChange = () => {
    setOpen(!open);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onOpen = () => {
    setOpen(true);
  };

  const presets: PresetButton[] = [
    {
      name: "teal",
      color: "text-theme-teal",
      background: "bg-teal-500/20 border border-teal-500/20",
      isActive: themePreset === "teal",
    },
    {
      name: "sky",
      color: "text-theme-sky",
      background: "bg-sky-500/20 border border-sky-500/20",
      isActive: themePreset === "sky",
    },
    {
      name: "violet",
      color: "text-theme-violet",
      background: "bg-violet-500/20 border border-violet-500/20",
      isActive: themePreset === "violet",
    },
    {
      name: "blue",
      color: "text-theme-blue",
      background: "bg-blue-500/20 border border-blue-500/20",
      isActive: themePreset === "blue",
    },
    {
      name: "yellow",
      color: "text-theme-yellow",
      background: "bg-yellow-500/20 border border-yellow-500/20",
      isActive: themePreset === "yellow",
    },
    {
      name: "rose",
      color: "text-theme-rose",
      background: "bg-rose-500/20 border border-rose-500/20",
      isActive: themePreset === "rose",
    },
  ];

  const navColors: NavColorButton[] = [
    {
      name: "Integrate",
      icon: <SidebarRegular className="text-icon" />,
      isActive: navColor === "Integrate",
    },
    {
      name: "Apparent",
      icon: <SidebarLeftFill className="text-icon" />,
      isActive: navColor === "Apparent",
    },
  ];

  const sheetContent = (
    <div>
      <div className="flex items-center justify-between">
        <span className="bold-value-2 dark:text-light1">Settings</span>
        <Button variant="icon" onClick={onClose} className="text-small">
          <CrossRegular />
        </Button>
      </div>
      <Separator className="my-4" />
      <View className="space-y-11">
        <Card
          onClick={toggleDarkMode}
          className="cursor-pointer flex flex-col gap-4 bg-white/50 dark:bg-dark2/50"
        >
          <div className="flex items-center justify-between">
            {darkMode ? (
              <SunRegular className="text-xl" />
            ) : (
              <MoonRegular className="text-xl" />
            )}
            <Switch checked={darkMode} />
          </div>
          <span className="text-small">Dark mode</span>
        </Card>
        <Card className="relative space-y-4 bg-white/50 dark:bg-dark2/50">
          <Badge className="absolute -top-3 left-5">Nav</Badge>
          <span className="text-small text-dark3 dark:text-light3">Color</span>
          <View variant="flex-wrap">
            {navColors.map((item) => (
              <div
                key={item.name}
                className={`flex flex-1 items-center justify-center gap-3 p-5 border rounded-xl dark:border-dark3 cursor-pointer w-full text-slate-500`}
                onClick={() => changeNavColor(item.name)}
              >
                <div
                  className={clsx({
                    "text-primary-1": item.isActive,
                  })}
                >
                  {item.icon}
                </div>
                <span className="text-small">{item.name}</span>
              </div>
            ))}
          </View>
        </Card>
        <Card className="relative space-y-4 bg-white/50 dark:bg-dark2/50">
          <Badge className="absolute -top-3 left-5">Presets</Badge>
          <View className="grid grid-cols-3 gap-3">
            {presets.map((item) => (
              <div
                key={item.name}
                className={`w-full  h-[50px] flex items-center justify-center rounded-xl cursor-pointer ${
                  item.color
                } ${item.isActive && item.background}`}
                onClick={() => changeThemePreset(item.name)}
              >
                <RectanglesMixedRegular className="text-icon" />
              </div>
            ))}
          </View>
        </Card>
      </View>
    </div>
  );

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <Button variant="icon" onClick={onOpen} className="animate-spin-slow">
        <SettingsRegular />
      </Button>
      <SheetContent>
        <HiddenTags />
        {sheetContent}
      </SheetContent>
    </Sheet>
  );
};

export default AppearanceSettings;
