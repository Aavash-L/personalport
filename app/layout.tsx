import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Navigation } from "@/components/ui/Navigation";
import { CustomCursor } from "@/components/ui/CustomCursor";
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
  metadataBase: new URL("https://aavashlamichhane.com"),
  title: "Aavash Lamichhane — Builder of AI-native Products",
  description:
    "Portfolio of Aavash Lamichhane. CS student at Rutgers. Founder of Portlock Labs. Developer of Rotgen ($30K MRR).",
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
    title: "Aavash Lamichhane — Builder of AI-native Products",
    description:
      "Portfolio of Aavash Lamichhane. CS student at Rutgers. Founder of Portlock Labs. Developer of Rotgen ($30K MRR).",
    url: "https://aavashlamichhane.com",
    siteName: "Aavash Lamichhane",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aavash Lamichhane — Builder of AI-native Products",
    description: "CS student at Rutgers. Founder. Developer of Rotgen ($30K MRR).",
    images: ["/og.png"],
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
      <body>
        <CustomCursor />
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
