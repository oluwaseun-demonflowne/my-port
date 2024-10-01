import type { Metadata } from "next";
import "./globals.css";
import { Oxanium } from "next/font/google";

const inter = Oxanium({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ibu EMMANUEL",
  description: "Frontend Engineer, amateur gamer, turn ideas into softwares",
  openGraph: {
    images: [
      {
        url: "https://utfs.io/f/rPTSFWjsAVS8bJN0YoBvq8QNRPaJy692jo4ht1XILVWBDGgl",
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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
