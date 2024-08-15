"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Define the shape of the DarkMode context
interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

// Create the context with an undefined default value
const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

// Custom hook to use the DarkMode context
export function useDarkMode(): DarkModeContextType {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
}

// DarkModeProvider component
export default function DarkModeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);

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

  const toggleDarkMode = () => {
    const root = window.document.documentElement;
    const isDark = root.classList.toggle("dark");
    setDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
