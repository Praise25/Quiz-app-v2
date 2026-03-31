import Navbar from "@/app/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quiz App V2",
  description: "A Simple Quiz Application built with NextJs, Typescript and TailwindCss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col px-6">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
