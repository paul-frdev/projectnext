"use client";

import { SalesPanel } from "./landing/salesPanel";
import { Button } from "./ui/button";
import { Container } from "./ui/container";
import { fadeIn, staggerTextContainer } from "@/constants/variants";
import { Menu } from "@/icons/menu";
import { Person } from "@/icons/person";
import { QuestionMark } from "@/icons/questionMark";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

export const Navbar = () => {
  const [logedIn, setLogedIn] = useState(true);

  const route = useRouter();
  const pathname = usePathname();

  return (
    <motion.div
      variants={staggerTextContainer}
      className="font-body"
      initial="initial"
      whileInView={"animate"}
      viewport={{ once: false, amount: 0.1 }}
    >
      <Container className="flex justify-between items-center mb-[56px] py-2">
        <motion.div variants={fadeIn}>
          <Link href="/" className="text-4xl font-logo font-sansBold">
            Academy
          </Link>
        </motion.div>
        {pathname === "/selling-page" && <SalesPanel />}
        <motion.div variants={fadeIn} className="flex justify-between items-center gap-x-6">
          {!logedIn && (
            <Button variant="buttonPrimaryBlue" className="hidden md:flex font-sansBold uppercase">
              <Person />
              Log in
            </Button>
          )}
          <Button
            variant="buttonPrimaryBlueDestructive"
            className="flex rounded-full h-[45px] shadow-buttonShadow w-[45px] p-0 justify-center items-center hover:bg-transparent hover:border-2 hover:border-[rgba(114, 122, 237, 0.50)]"
          >
            <QuestionMark />
          </Button>
          <Button variant="buttonPrimaryOrangeDestructive">
            <Menu />
          </Button>
        </motion.div>
      </Container>
    </motion.div>
  );
};
