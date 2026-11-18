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
  weight: ["500", "600", "700", "800"],
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
    default: `${SITE_CONFIG.name} | Official Tech Fest — IEDC ${SITE_CONFIG.collegeName}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "Aarambh 4.0 is the flagship annual technology and innovation festival organised by IEDC at College of Engineering Karunagappally, Kerala. January 16–17, 2027.",
  keywords: [
    "Aarambh 4.0",
    "IEDC CEK",
    "College of Engineering Karunagappally",
    "Kerala tech fest",
    "hackathon",
    "robowar",
    "workshops",
    "innovation festival",
  ],
  authors: [{ name: "IEDC CEK Tech Team" }],
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
        alt: `${SITE_CONFIG.name} Official Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.datesDisplay} | IEDC CEK`,
    description: SITE_CONFIG.heroSubtitle,
    images: [SITE_CONFIG.assets.logoFull],
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
        <SmoothScrollProvider>
          <Preloader />
          <Navbar />
          <main className="relative z-10 min-h-screen">{children}</main>
          <Footer />
          <BackToTop />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
