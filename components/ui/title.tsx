import { cn } from "@/lib/utils";
import React from "react";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}
export const Title: React.FC<TitleProps> = ({ children, className }) => {
  return (
    <h2 className={cn(`scroll-m-20 text-[32px] fade-in-100 text-basic font-sansBold tracking-tight transition-colors first:mt-0`, className)}>
      {children}
    </h2>
  );
};
