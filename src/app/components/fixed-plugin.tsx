"use client";
import Image from "next/image";
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

// ThemeToggle component integrated within FixedPlugin
export function FixedPlugin() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensuring the component is only rendered on the client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration mismatch

  const handleThemeSwitcher = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="!fixed bottom-4 right-4 flex flex-col items-center gap-2">
      <div 
        className="w-12 h-12 flex items-center justify-center bg-black dark:bg-black rounded" // Square background
      >
        <button
          onClick={handleThemeSwitcher}
          className="p-2 text-white dark:text-yellow-500 rounded-full"
        >
          {theme === 'light' ? (
            <SunIcon className="h-6 w-6" /> // Sun icon for light theme
          ) : (
            <MoonIcon className="h-6 w-6" /> // Moon icon for dark theme
          )}
        </button>
      </div>
    </div>
  );
}
