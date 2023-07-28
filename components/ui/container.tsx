import { cn } from "@/lib/utils";
import React from "react";

export const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn(`w-full max-w-[1230px] px-[15px] m-auto`, className)}>{children}</div>;
};
