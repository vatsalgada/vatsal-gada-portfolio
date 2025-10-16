import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import LiquidEtherClient from "@/components/LiquidEtherClient";
import { Grain } from "@/components/Grain";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Vatsal Gada — Portfolio",
    template: "%s · Vatsal Gada",
  },
  description: "Dark, glassy portfolio with R3F Liquid Ether background and interactive cards.",
  metadataBase: new URL("https://example.com"),
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    url: "https://example.com",
    siteName: "Vatsal Gada",
    title: "Vatsal Gada — Portfolio",
    description: "Dark, glassy portfolio with R3F Liquid Ether background and interactive cards.",
    images: [{ url: "/vercel.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vatsal Gada — Portfolio",
    description: "Dark, glassy portfolio with R3F Liquid Ether background and interactive cards.",
    images: ["/vercel.svg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#hero" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-black focus:px-3 focus:py-2 focus:text-white">Skip to content</a>
        <div className="fixed inset-0 -z-10">
          <LiquidEtherClient
            colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
        <Grain />
        <Nav />
        <main className="pt-24">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
