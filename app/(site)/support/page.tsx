import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import FAQ from "@/components/FAQ";

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <FAQ />
      <Contact />
    </div>
  );
};

export default SupportPage;
