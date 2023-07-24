import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

export const TypographyLink = ({ href, children }: { href: string, children: string }) => {
  return (
    <Link className={cn(`text-[12px] font-normal tracking-[0.4px] leading-[18px] text-[#ED9F72] underline`)} href={href}>{children}</Link>
  )
}
