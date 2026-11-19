import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/data/site";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Preloader } from "@/components/ui/Preloader";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/BackToTop";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#070505",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: `${SITE_CONFIG.name} | Tech Fest — IEDC ${SITE_CONFIG.collegeName}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "Aarambh 4.0 is the flagship technology and entrepreneurship festival hosted by IEDC at College of Engineering Karunagappally, Kerala. January 15–16, 2027.",
  keywords: [
    "Aarambh 4.0",
    "IEDC CEK",
    "College of Engineering Karunagappally",
    "Kerala tech fest",
    "hackathon",
    "robowar",
    "workshops",
    "technology festival",
  ],
  authors: [{ name: "IEDC CEKNPY" }],
  icons: {
    icon: SITE_CONFIG.assets.logoMark,
    apple: SITE_CONFIG.assets.logoMark,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.siteUrl,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.datesDisplay} | IEDC CEK`,
    description: SITE_CONFIG.heroSubtitle,
    images: [
      {
        url: SITE_CONFIG.assets.logoFull,
        width: 731,
        height: 635,
        alt: `${SITE_CONFIG.name} Official Emblem`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakarta.variable} dark`}>
      <body className="bg-dot-grid min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased selection:bg-[var(--brand-primary)] selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-xl focus:bg-[var(--brand-primary)] focus:px-4 focus:py-2.5 focus:text-sm focus:font-bold focus:text-white focus:shadow-xl focus:outline-none"
        >
          Skip to main content
        </a>
        <SmoothScrollProvider>
          <Preloader />
          <Navbar />
          <main id="main-content" className="relative z-10 min-h-screen">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
