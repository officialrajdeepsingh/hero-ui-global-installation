"use client";

import { Button, Select, SelectItem } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, themes } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <Button
      isIconOnly
      aria-label="Change The theme"
      onPress={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <Icon icon="material-symbols:moon-stars" />
      ) : (
        <Icon icon="material-symbols:sunny" />
      )}
    </Button>
  );
}
