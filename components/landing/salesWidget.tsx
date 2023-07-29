"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface SalesWidgetProps {
  className?: string;
  children: ReactNode;
}
export const SalesWidget: React.FC<SalesWidgetProps> = ({ children, className }) => {
  return <div className={cn(`bg-white w-full max-w-[260px] h-auto rounded-xl`, className)}>{children}</div>;
};
