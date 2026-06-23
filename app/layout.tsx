import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EVOTECH | Software, IoT & Digital Solutions",

  description:
    "EVOTECH develops custom software, mobile applications, IoT solutions, cloud platforms and business automation systems for modern organizations.",

  keywords: [
    "software development",
    "iot solutions",
    "business automation",
    "mobile app development",
    "web application",
    "custom software",
    "cloud solutions",
    "esp32",
    "digital transformation",
    "EVOTECH",
  ],

  authors: [
    {
      name: "EVOTECH",
    },
  ],

  openGraph: {
    title: "EVOTECH",
    description:
      "Modern software, IoT and digital solutions for growing businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}