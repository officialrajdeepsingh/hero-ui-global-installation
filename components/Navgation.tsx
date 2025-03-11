"use client";
import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarBrand,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Navgation() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Navbar className="">
      <NavbarContent
        className="flex w-full justify-center gap-8"
        justify="center"
      >
        <NavbarBrand>
          <p className="font-bold text-inherit">Hero UI</p>
        </NavbarBrand>
        <NavbarItem>
          <Link href="#">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">About</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">Contact</Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            isIconOnly
            onPress={toggleTheme}
            aria-label="Toggle theme dark and light mode"
          >
            <Icon
              icon={theme === "light" ? "lucide:moon" : "lucide:sun"}
              className="h-5 w-5"
            />
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
