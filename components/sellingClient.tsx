import { staggerContainer } from '@/constants/variants';
import { Footer } from "./footer";
import { GetAcademy } from "./landing/getAcademy";
import { ProfileResults } from "./landing/profileResults";
import { Testimonials } from "./landing/testimonials";
import { TryAcademy } from "./landing/tryAcademy";
import { Container } from "./ui/container";
import React from "react";

export const SellingClient = () => {
  return (
    <>
      <Container>
        <ProfileResults />
        <TryAcademy />
        <GetAcademy />
        <Testimonials />
      </Container>
      <Footer />
    </>
  );
};
