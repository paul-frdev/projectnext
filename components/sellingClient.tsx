"use client";

import { GetAcademy } from "./landing/getAcademy";
import { ProfileResults } from "./landing/profileResults";
import { Testimonials } from "./landing/testimonials";
import { TryAcademy } from "./landing/tryAcademy";
import { Container } from "./ui/container";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

export const SellingClient = () => {
  const router = useRouter();

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollY >= totalHeight) {
      setTimeout(() => {
        router.push("/discount-page");
      }, 2000);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Container>
        <ProfileResults />
        <TryAcademy />
        <GetAcademy />
        <Testimonials />
      </Container>
    </>
  );
};
