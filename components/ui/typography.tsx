import { cn } from '@/lib/utils'
import React from 'react'

export const Typography = ({ children, className }: { children: string, className?: string }) => {
  return (
    <p className={cn(`w-full max-w-[524px] text-gray text-[12px] leading-[16px] tracking-[0.4px] font-sansRegular text-center`, className)}>{children}</p>
  )
}
