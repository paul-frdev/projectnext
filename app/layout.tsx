import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BG Capital",
  description: "Investing app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-body bg-main">
        <main>{children}</main>
      </body>
    </html>
  );
}
