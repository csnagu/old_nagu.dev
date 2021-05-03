import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export default function ThemeColorChanger() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="DarkModeToggle"
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {mounted && <>{theme === "dark" ? <p>💡</p> : <p>🌙</p>}</>}
    </button>
  );
}
