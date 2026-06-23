import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EVOTECH | Software, IoT & Digital Solutions",
  description:
    "EVOTECH develops custom software, mobile applications, IoT solutions, cloud platforms and business automation systems for modern organizations.",
  keywords: [
    "software development",
    "IoT solutions",
    "business automation",
    "mobile app development",
    "web application",
    "custom software",
    "cloud solutions",
    "ESP32",
    "digital transformation",
    "EVOTECH",
  ],
  authors: [{ name: "EVOTECH" }],
  creator: "EVOTECH",
  publisher: "EVOTECH",
  openGraph: {
    title: "EVOTECH | Software, IoT & Digital Solutions",
    description:
      "Modern software, IoT and digital solutions for growing businesses.",
    type: "website",
    siteName: "EVOTECH",
    locale: "en_MY",
  },
  twitter: {
    card: "summary_large_image",
    title: "EVOTECH | Software, IoT & Digital Solutions",
    description:
      "Custom software, mobile apps, IoT systems and automation solutions for modern businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-MY">
      <body>{children}</body>
    </html>
  );
}