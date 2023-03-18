import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function DarkModeToggle() {
  const [mode, setMode] = useState(localStorage.theme);

  const currentTheme = localStorage.theme;

  function toggleTheme() {
    if (currentTheme === "dark") {
      setMode("light");
      localStorage.theme = "light";
    } else {
      setMode("dark");
      localStorage.theme = "dark";
    }
    document.documentElement.classList.toggle("dark");
  }

  return (
    <div onClick={toggleTheme}>
      {mode === "light" ? (
        <MoonIcon className="h-6 w-6 text-slate-800 " />
      ) : (
        <SunIcon className="h-6 w-6 dark:text-white " />
      )}
    </div>
  );
}
