import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

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
        url: "/og-image.jpg",
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
    images: ["/og-image.jpg"],
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
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
