import { Inter } from "next/font/google";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FARM TO TABLE",
  description: "A website to directly connect farmers and consumers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-24">{children}</main>
      <Footer />
    </div>
      </body>
    </html>
  );
}
