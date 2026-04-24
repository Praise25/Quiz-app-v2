"use client";

import SunIcon from "@/assets/sun-icon.svg";
import MoonIcon from "@/assets/moon-icon.svg";
import AccessibilityIcon from "@/assets/accessibility-icon.svg";
import clsx from "clsx";
import Link from "next/link";
import Logo from "./Logo";

import { rubikMedium } from "@/fonts/rubikFonts";
import { usePathname } from "next/navigation";
import { useAppContext } from "@/hooks/useAppContext";

export default function Navbar() {
  const currentPath = usePathname();
  const { activeSubject } = useAppContext();

  const Icon = activeSubject.icon || AccessibilityIcon;

  return (
    <div className="navbar pt-4 relative z-100">
      <div className="navbar-start">
        <Link href="/" className="flex justify-center items-center gap-6">
          <Logo
            subject={activeSubject}
            Icon={Icon}
            iconContainerStyles={clsx(
              `flex justify-center items-center p-2 ${activeSubject.iconBackgroundColor} rounded-sm`,
              currentPath === "/" && "hidden",
            )}
            iconStyles={`${activeSubject.iconColor}`}
            logoTextStyles={clsx(
              `${rubikMedium.className} text-(--blue-900) text-2xl`,
              currentPath === "/" && "hidden",
            )}
          />
        </Link>
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
