import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import semiCircleImg from "@/assets/semi-circle.png";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quiz App V2",
  description:
    "A Simple Quiz Application built with NextJs, Typescript and TailwindCss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col px-6 relative overflow-hidden md:px-28 lg:pt-12">
        <Image
          src={semiCircleImg}
          alt="Semi-circle decoration"
          className="absolute top-0 left-0 z-0"
          loading="eager"
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
