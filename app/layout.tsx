import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "tbtsocial. — AI-Native Content Operations & Automation Platform",
  description:
    "Streamline your digital agency workflows. Connect real-time trend data, automate script generation, and manage campaigns in one platform.",
  keywords: [
    "AI content automation",
    "social media automation",
    "Claude API",
    "Make.com",
    "ElevenLabs",
    "content ops SaaS",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="bg-[#061325] text-white antialiased selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
