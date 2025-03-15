import type { Metadata } from "next";
import { Playfair_Display, Inconsolata } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const inconsolata = Inconsolata({
  variable: "--font-emblema-one",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "College Fest",
  description: "College Fest 2k25",
  icons: {
    icon: "/faviconIMAGE.png",
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
        className={`${playfairDisplay.variable} ${inconsolata.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}