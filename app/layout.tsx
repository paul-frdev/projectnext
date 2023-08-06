import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academy",
  description: "Investing app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-body bg-main">
        <main className="h-full">{children}</main>
      </body>
    </html>
  );
}
