"use client";

import { PresetType } from "@/types/shared";
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
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [themePreset, setThemePreset] = useState<PresetType | null>(null);

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

  useEffect(() => {
    const initialThemePreset: PresetType | null = localStorage.getItem(
      "preset"
    ) as PresetType;

    if (initialThemePreset === null) {
      localStorage.setItem("preset", "teal");
    }

    setThemePreset(initialThemePreset);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const preset = localStorage.getItem("preset");

    if (preset === "teal") {
      root.style.setProperty("--primary-1", "#0d9488"); // teal-600
      root.style.setProperty("--primary-2", "#134e4a"); // teal-900
      root.style.setProperty("--primary-darkmode", "#115e59"); // teal-800
      root.style.setProperty("--primary-light", "#1725541c"); // teal- low opacity
      root.style.setProperty("--primary-light-2", "#14b8a6"); // teal-500
      root.style.setProperty("--primary-light-3", "#2dd4bf"); // teal-400
    } else if (preset === "blue") {
      root.style.setProperty("--primary-1", "#2563eb"); // blue-600
      root.style.setProperty("--primary-2", "#1e3a8a"); // blue-900
      root.style.setProperty("--primary-darkmode", "#1e40af"); // blue-800
      root.style.setProperty("--primary-light", "#1725541c"); // blue- low opacity
      root.style.setProperty("--primary-light-2", "#3b82f6"); // blue-500
      root.style.setProperty("--primary-light-3", "#60a5fa"); // blue-400
    } else if (preset === "violet") {
      root.style.setProperty("--primary-1", "#7c3aed"); // violet-600
      root.style.setProperty("--primary-2", "#4c1d95"); // violet-900
      root.style.setProperty("--primary-darkmode", "#5b21b6"); // violet-800
      root.style.setProperty("--primary-light", "#1725541c"); // violet- low opacity
      root.style.setProperty("--primary-light-2", "#8b5cf6"); // violet-500
      root.style.setProperty("--primary-light-3", "#a78bfa"); // violet-400
    } else if (preset === "sky") {
      root.style.setProperty("--primary-1", "#0284c7"); // sky-600
      root.style.setProperty("--primary-2", "#0c4a6e"); // sky-900
      root.style.setProperty("--primary-darkmode", "#075985"); // sky-800
      root.style.setProperty("--primary-light", "#1725541c"); // sky- low opacity
      root.style.setProperty("--primary-light-2", "#0ea5e9"); // sky-500
      root.style.setProperty("--primary-light-3", "#38bdf8"); // sky-400
    } else if (preset === "yellow") {
      root.style.setProperty("--primary-1", "#ca8a04"); // yellow-600
      root.style.setProperty("--primary-2", "#713f12"); // yellow-900
      root.style.setProperty("--primary-darkmode", "#854d0e"); // yellow-800
      root.style.setProperty("--primary-light", "#1725541c"); // yellow- low opacity
      root.style.setProperty("--primary-light-2", "#eab308"); // yellow-500
      root.style.setProperty("--primary-light-3", "#facc15"); // yellow-400
    } else if (preset === "rose") {
      root.style.setProperty("--primary-1", "#e11d48"); // rose-600
      root.style.setProperty("--primary-2", "#881337"); // rose-900
      root.style.setProperty("--primary-darkmode", "#9f1239"); // rose-800
      root.style.setProperty("--primary-light", "#1725541c"); // rose- low opacity
      root.style.setProperty("--primary-light-2", "#f43f5e"); // rose-500
      root.style.setProperty("--primary-light-3", "#fb7185"); // rose-400
    }
  }, [themePreset]);

  return (
    <ThemeContext.Provider
      value={{ darkMode, toggleDarkMode, themePreset, changeThemePreset }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useDarkMode(): {
  darkMode: boolean;
  toggleDarkMode: () => void;
} {
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
