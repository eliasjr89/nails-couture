"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ThemeToggleProps {
  shouldDarken?: boolean;
}

export function ThemeToggle({ shouldDarken = false }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`group relative w-9 h-9 rounded-md border transition-all duration-400 flex items-center justify-center ${
        shouldDarken
          ? "border-white hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(250,204,21,0.5)]"
          : "border-gray-900 dark:border-white dark:hover:border-yellow-400 dark:hover:shadow-[0_0_15px_rgba(250,204,21,0.5)]"
      }`}
      aria-label="Toggle theme">
      {/* Moon icon shows in LIGHT mode (when you can switch to dark) */}
      <Moon
        className={`h-5 w-5 scale-100 transition-all duration-300 dark:scale-0 ${
          shouldDarken
            ? "text-white group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:via-yellow-500 group-hover:to-yellow-600 group-hover:bg-clip-text group-hover:text-transparent"
            : "text-gray-900 dark:text-white dark:group-hover:bg-gradient-to-r dark:group-hover:from-yellow-400 dark:group-hover:via-yellow-500 dark:group-hover:to-yellow-600 dark:group-hover:bg-clip-text dark:group-hover:text-transparent"
        }`}
      />
      {/* Sun icon shows in DARK mode (when you can switch to light) */}
      <Sun className="absolute h-5 w-5 scale-0 transition-all duration-300 dark:scale-100 text-white group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:via-yellow-500 group-hover:to-yellow-600 group-hover:bg-clip-text group-hover:text-transparent" />
    </motion.button>
  );
}
