import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MotionProvider from "@/components/motion/MotionProvider";
import ThemeProvider from "@/components/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Synergy Evolution | Asset Management Specialists",
    template: "%s | Synergy Evolution"
  },
  description: "Public and private sector asset management specialists delivering audit-ready compliance and governance frameworks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300`}
      >
        <ThemeProvider>
          <Header />
          <MotionProvider>
            <main className="flex-grow">
              {children}
            </main>
          </MotionProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
