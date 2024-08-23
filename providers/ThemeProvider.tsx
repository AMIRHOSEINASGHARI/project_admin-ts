"use client";

import { NavColor, PresetType } from "@/types/shared";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  themePreset: PresetType | null;
  changeThemePreset: (presetName: PresetType) => void;
  navColor: NavColor | null;
  changeNavColor: (name: NavColor) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [themePreset, setThemePreset] = useState<PresetType | null>(null);
  const [navColor, setNavColor] = useState<NavColor | null>(null);

  const toggleDarkMode = () => {
    const root = window.document.documentElement;
    const isDark = root.classList.toggle("dark");

    setDarkMode(isDark);

    window.localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  const changeThemePreset = (presetName: PresetType) => {
    if (!presetName) return;

    setThemePreset(presetName);

    window.localStorage.setItem("preset", presetName);
  };

  const changeNavColor = (name: NavColor) => {
    if (!name) return;

    setNavColor(name);

    window.localStorage.setItem("navColor", name);
  };

  // dark mode check
  useEffect(() => {
    const root = window.document.documentElement;
    const initialDarkMode = localStorage.getItem("theme") === "dark";

    if (initialDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    setDarkMode(initialDarkMode);
  }, []);

  // preset check
  useEffect(() => {
    const initialThemePreset: PresetType | null = localStorage.getItem(
      "preset"
    ) as PresetType;

    if (initialThemePreset === null) {
      localStorage.setItem("preset", "teal");
    }

    setThemePreset(initialThemePreset);
  }, []);

  // setting default preset color
  useEffect(() => {
    const root = document.documentElement;
    const preset = localStorage.getItem("preset");

    if (preset === "teal") {
      root.style.setProperty("--primary-1", "#00a76f"); // teal-600
      root.style.setProperty("--primary-2", "#004b50"); // teal-900
      root.style.setProperty("--primary-3", "#007867"); // teal-800
      root.style.setProperty("--primary-4", "#c8fad6"); // teal- low opacity
      root.style.setProperty("--primary-5", "#5be49b"); // teal-500
      root.style.setProperty("--primary-6", "#122527"); // teal-400
    } else if (preset === "blue") {
      root.style.setProperty("--primary-1", "#0c68e9"); // blue-600
      root.style.setProperty("--primary-2", "#1c252e"); // blue-900
      root.style.setProperty("--primary-3", "#063ba7"); // blue-800
      root.style.setProperty("--primary-4", "#cde9fd"); // blue- low opacity
      root.style.setProperty("--primary-5", "#6bb1f8"); // blue-500
      root.style.setProperty("--primary-6", "#132030"); // blue-400
    } else if (preset === "violet") {
      root.style.setProperty("--primary-1", "#8e33ff"); // violet-600
      root.style.setProperty("--primary-2", "#27097a"); // violet-900
      root.style.setProperty("--primary-3", "#5119b7"); // violet-800
      root.style.setProperty("--primary-4", "#efd6ff"); // violet- low opacity
      root.style.setProperty("--primary-5", "#c684ff"); // violet-500
      root.style.setProperty("--primary-6", "#23263b"); // violet-400
    } else if (preset === "sky") {
      root.style.setProperty("--primary-1", "#00b8d9"); // sky-600
      root.style.setProperty("--primary-2", "#003768"); // sky-900
      root.style.setProperty("--primary-3", "#006c9c"); // sky-800
      root.style.setProperty("--primary-4", "#cafdf5"); // sky- low opacity
      root.style.setProperty("--primary-5", "#61f3f3"); // sky-500
      root.style.setProperty("--primary-6", "#1b2d3d"); // sky-400
    } else if (preset === "yellow") {
      root.style.setProperty("--primary-1", "#ffab00"); // yellow-600
      root.style.setProperty("--primary-2", "#7a4100"); // yellow-900
      root.style.setProperty("--primary-3", "#b76e00"); // yellow-800
      root.style.setProperty("--primary-4", "#fff5cc"); // yellow- low opacity
      root.style.setProperty("--primary-5", "#ffd666"); // yellow-500
      root.style.setProperty("--primary-6", "#262522"); // yellow-400
    } else if (preset === "rose") {
      root.style.setProperty("--primary-1", "#ff5630"); // rose-600
      root.style.setProperty("--primary-2", "#7a0916"); // rose-900
      root.style.setProperty("--primary-3", "#b71d18"); // rose-800
      root.style.setProperty("--primary-4", "#ffe9d5"); // rose- low opacity
      root.style.setProperty("--primary-5", "#ffac82"); // rose-500
      root.style.setProperty("--primary-6", "#261c22"); // rose-400
    }
  }, [themePreset]);

  //   nav color check
  useEffect(() => {
    const initialNavColor = localStorage.getItem("navColor") as NavColor;

    if (initialNavColor === null) {
      localStorage.setItem("navColor", "Integrate");
    }

    setNavColor(initialNavColor);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        themePreset,
        changeThemePreset,
        navColor,
        changeNavColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useDarkMode must be used within a ThemeProvider");
  }
  return { darkMode: context.darkMode, toggleDarkMode: context.toggleDarkMode };
}

export function useThemePreset() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemePreset must be used within a ThemeProvider");
  }
  return {
    themePreset: context.themePreset,
    changeThemePreset: context.changeThemePreset,
  };
}

export function useNavColor() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useNavColor must be used within a ThemeProvider");
  }
  return {
    navColor: context.navColor,
    changeNavColor: context.changeNavColor,
  };
}
