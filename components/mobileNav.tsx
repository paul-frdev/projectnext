"use client";

import { Button } from "./ui/button";
import { LinkHref } from "./ui/linkHref";
import { navItems } from "@/constants";
import { childrenMobileNav, staggerMobileNav } from "@/constants/variants";
import { Person } from "@/icons/person";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface MobileNavProps {
  isOpen: boolean;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen }) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <motion.div
      variants={staggerMobileNav}
      initial="closed"
      animate={isOpen ? "opened" : "closed"}
      viewport={{ once: false }}
      whileInView={"animate"}
      className={cn(
        `w-full z-20 bg-white absolute top-[65px] bottom-0 right-0 left-0 pt-14 flex flex-col justify-start items-center`,
        !isOpen ? "hidden" : "block"
      )}
    >
      <ul className="flex flex-col justify-start items-start gap-y-4 w-full max-w-[328px] m-auto">
        {navItems &&
          navItems.map(item => {
            if (item && item.id <= 4) {
              return (
                <motion.li initial="hidden" animate={isOpen ? "visible" : "hidden"} variants={childrenMobileNav} key={item.id}>
                  <Link className="text-[16px] leading-[24px] text-colorTitle font-sansMedium" href={item.src!}>
                    {item.title}
                  </Link>
                </motion.li>
              );
            }
            return (
              <motion.span
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
                variants={childrenMobileNav}
                key={item.id}
                className="flex flex-col justify-start items-start gap-y-4"
              >
                <Button
                  onClick={() => router.push("/sign-in")}
                  className={cn(`justify-center gap-x-2 items-center md:hidden uppercase`, pathname === "/selling-page" ? "hidden" : "flex")}
                >
                  <Person />
                  Log in
                </Button>
                <LinkHref className="text-[16px] leading-[24px] text-colorTitle font-sansMedium no-underline" href="mailto:support@academy.io">
                  {item.title}
                </LinkHref>
              </motion.span>
            );
          })}
      </ul>
    </motion.div>
  );
};
