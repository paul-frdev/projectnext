"use client";

import { Container } from "./ui/container";
import { LinkHref } from "./ui/linkHref";
import { Typography } from "./ui/typography";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-white h-[72px]">
      <Container className="flex justify-between items-center h-full">
        <Typography className="text-darkGray w-auto">Academy@2023</Typography>
        <LinkHref className="block text-darkGray" href="mailto:support@academy.io">
          support@brytix.io
        </LinkHref>
      </Container>
    </footer>
  );
};
