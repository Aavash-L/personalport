import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { PortfolioNav } from "@/components/PortfolioNav";

import "./globals.css";

// ─── Fonts ─────────────────────────────────────────────────────────────────

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-code",
  display: "swap",
  weight: ["400", "500"],
});

// ─── Metadata ──────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aavashlamichhane.com"),
  title: "Aavash Lamichhane — Software Developer",
  description:
    "Thoughtful software, real-world work. Rutgers CS student and former Verizon SWE intern. Explore my projects and how they work.",
  keywords: [
    "Aavash Lamichhane",
    "full-stack developer",
    "AI products",
    "Rutgers",
    "Next.js",
    "software engineer",
    "Portlock Labs",
    "Rotgen",
  ],
  authors: [{ name: "Aavash Lamichhane" }],
  openGraph: {
    title: "Aavash Lamichhane — Software Developer",
    description:
      "Thoughtful software, real-world work. Rutgers CS student and former Verizon SWE intern. Explore my projects and how they work.",
    url: "https://www.aavashlamichhane.com",
    siteName: "Aavash Lamichhane",
    images: [{ url: "/share-card", width: 1200, height: 630, type: "image/png", alt: "Aavash Lamichhane — Software Developer, Rutgers CS, previously Verizon" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aavash Lamichhane — Software Developer",
    description: "Rutgers CS junior and former Verizon SWE intern. Seeking Summer 2027 SWE internships.",
    images: ["/share-card"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

// ─── Layout ────────────────────────────────────────────────────────────────

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      {/* Grammarly injects body attributes before hydration; keep suppression scoped here. */}
      <body suppressHydrationWarning>
        <PortfolioNav />
        <main>{children}</main>
      </body>
    </html>
  );
}
