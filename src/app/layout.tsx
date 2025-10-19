import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import LaunchOfferBanner from "@/components/ui/LaunchOfferBanner";
import LaunchOfferStrip from "@/components/ui/LaunchOfferStrip";
import FloatingOfferPopup from "@/components/ui/FloatingOfferPopup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://webaesthetic.vercel.app'),
  title: "Webasthetic - Premium Web Development Agency",
  description: "Transform your digital presence with custom web solutions, modern designs, and cutting-edge development from Webasthetic agency.",
  keywords: ["web development", "web design", "react development", "next.js", "custom websites", "digital agency"],
  authors: [{ name: "Webasthetic Team" }],
  creator: "Webasthetic",
  publisher: "Webasthetic",
  openGraph: {
    title: "Webasthetic - Premium Web Development Agency",
    description: "Transform your digital presence with custom web solutions",
    url: "https://webasthetic.com",
    siteName: "Webasthetic",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Webasthetic - Premium Web Development Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webasthetic - Premium Web Development Agency",
    description: "Transform your digital presence with custom web solutions",
  images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ackeeServer = process.env.NEXT_PUBLIC_ACKEE_SERVER
  const ackeeDomainId = process.env.NEXT_PUBLIC_ACKEE_DOMAIN_ID
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-J247NNNVC4"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-J247NNNVC4');
        `}
      </Script>
      {ackeeServer && ackeeDomainId ? (
        <Script
          src={`${ackeeServer}/tracker.js`}
          data-ackee-server={ackeeServer}
          data-ackee-domain-id={ackeeDomainId}
          strategy="afterInteractive"
        />
      ) : null}
      <body
        className={`${inter.variable} ${poppins.variable} font-inter antialiased`}
        suppressHydrationWarning={true}
      >
        <LaunchOfferBanner />
        <LaunchOfferStrip />
        {children}
        <FloatingOfferPopup />
      </body>
    </html>
  );
}
