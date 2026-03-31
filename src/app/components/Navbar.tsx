"use client";

import sunIcon from "@/assets/sun-icon.svg";
import moonIcon from "@/assets/moon-icon.svg";
import accessibilityIcon from "@/assets/accessibility-icon.svg";
import Image from "next/image";
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
        <Image
          className={clsx(currentPath === "/" && "hidden")}
          src={accessibilityIcon}
          alt="Accessibility Icon"
        />
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
        <Image src={sunIcon} alt="Light mode" />
        <input
          className="toggle toggle-md bg-(--purple-600) text-white px-1 py-3 mx-2"
          type="checkbox"
        />
        <Image src={moonIcon} alt="Dark mode" />
      </div>
    </div>
  );
}
