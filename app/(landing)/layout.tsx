import { Navbar } from "@/components/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz",
  description: "start your investing journey",
};

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-body">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
