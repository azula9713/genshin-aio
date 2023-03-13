import { MoonIcon } from "@heroicons/react/24/solid";

export default function DarkModeToggle() {
  function toggleTheme() {
    const currentTheme = localStorage.theme;
    if (currentTheme === "dark") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
    document.documentElement.classList.toggle("dark");
  }

  return (
    <MoonIcon
      onClick={toggleTheme}
      className="h-6 w-6 text-slate-800 dark:text-white "
    />
  );
}
