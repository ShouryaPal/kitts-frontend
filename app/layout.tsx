import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ppNeueMontreal = localFont({
  src: [
    {
      path: "../public/fonts/PPNeueMontreal-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/PPNeueMontreal-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/PPNeueMontreal-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/PPNeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/PPNeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/PPNeueMontreal-SemiBolditalic.otf",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-pp-neue-montreal",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ppNeueMontreal.variable} font-sans`}>{children}</body>
    </html>
  );
}
