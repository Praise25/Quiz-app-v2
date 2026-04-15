import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import semiCircleImg from "@/assets/semi-circle.png";
import semiCircleImg2 from "@/assets/semi-circle-2.png";
import semiCircleImg3 from "@/assets/semi-circle-3.png";
import AppContextProvider from "@/context/AppContextProvider";
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
      <body className="min-h-full flex flex-col px-6 pb-15 relative md:px-28 lg:pt-12">
        <Image
          src={semiCircleImg}
          alt="Semi-circle decoration"
          className="absolute top-0 left-0 z-0 h-screen w-screen md:hidden"
          loading="eager"
        />
        <Image
          src={semiCircleImg2}
          alt="Semi-circle decoration at top left corner"
          className="absolute top-0 left-0 z-0 hidden md:block"
          loading="eager"
        />
        <Image
          src={semiCircleImg3}
          alt="Semi-circle decoration at bottom right corner"
          className="absolute bottom-0 right-0 z-0 hidden xl:block"
          loading="eager"
        />
        <AppContextProvider>
          <Navbar />
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
