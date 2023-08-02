import { Footer } from '@/components/footer';
import { Navbar } from "@/components/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz",
  description: "start your investing journey",
};

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
