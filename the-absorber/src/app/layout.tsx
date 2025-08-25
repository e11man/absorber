import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: 'swap',
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "The Absorber - Revolutionary PVA Technology",
  description: "Experience automotive perfection with our exclusive PVA technology. Premium automotive drying towel for luxury car owners who demand nothing less than perfection.",
  keywords: "PVA towel, automotive care, luxury car care, car drying, premium automotive products",
  authors: [{ name: "The Absorber" }],
  creator: "The Absorber",
  publisher: "The Absorber",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://the-absorber.vercel.app'),
  openGraph: {
    title: "The Absorber - Revolutionary PVA Technology",
    description: "Experience automotive perfection with our exclusive PVA technology.",
    url: 'https://the-absorber.vercel.app',
    siteName: 'The Absorber',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Absorber - Revolutionary PVA Technology",
    description: "Experience automotive perfection with our exclusive PVA technology.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${montserrat.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-inter bg-black text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
