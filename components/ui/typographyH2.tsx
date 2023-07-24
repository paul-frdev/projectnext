import { cn } from '@/lib/utils'
import React from 'react'

interface TypographyH2Props {
  children: string;
}
export const TypographyH2: React.FC<TypographyH2Props> = ({ children }) => {
  return (
    <h2 className={cn(`scroll-m-20 text-[32px] text-[#101010] font-bold tracking-tight transition-colors first:mt-0`)}>
      {children}
    </h2>
  )
}
