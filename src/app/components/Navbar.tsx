"use client";

import SunIcon from "@/assets/sun-icon.svg";
import MoonIcon from "@/assets/moon-icon.svg";
import AccessibilityIcon from "@/assets/accessibility-icon.svg";
import clsx from "clsx";

import { Rubik } from "next/font/google";
import { usePathname } from "next/navigation";

const rubik = Rubik({
  weight: "500",
});

export default function Navbar() {
  const currentPath = usePathname();

  return (
    <div className="navbar pt-4">
      <div className="navbar-start gap-6">
        <div className="flex justify-center items-center p-2 bg-(--purple-100) rounded-sm">
          <AccessibilityIcon
            className={clsx(
              "text-(--purple-600)",
              currentPath === "/" && "hidden",
            )}
          />
        </div>
        <p
          className={clsx(
            `${rubik.className} text-(--blue-900) text-2xl`,
            currentPath === "/" && "hidden",
          )}
        >
          Accessibility
        </p>
      </div>
      <div className="navbar-end">
        <SunIcon className="w-4 h-4 text-(--grey-500)" />
        <input
          className="toggle toggle-md bg-(--purple-600) text-white px-1 py-3 mx-2"
          type="checkbox"
        />
        <MoonIcon className="w-4 h-4 text-(--grey-500)" />
      </div>
    </div>
  );
}
