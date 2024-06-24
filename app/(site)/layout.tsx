import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

import ToasterContext from "../context/ToastContext";
import Providers from "@/components/providers";
import { Metadata } from "next";
import { config } from "@/lib/config";

export const metadata: Metadata = {
  title: {
    default: config.siteTitle,
    template: `%s - ${config.siteTitle}`,
  },
  description: config.siteDescription,
  metadataBase: new URL(config.siteUrl),
  openGraph: {
    title: config.siteTitle,
    description: config.siteDescription,
    url: config.siteUrl,
    siteName: config.siteTitle,
    images: [
      {
        url: "/thumbnail.png",
        width: 600,
        height: 400,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          <ToasterContext />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
