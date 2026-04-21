import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { WhatIDo } from "@/components/sections/what-i-do";
import { HowItWorks } from "@/components/sections/how-it-works";
import { About } from "@/components/sections/about";
import { Proof } from "@/components/sections/proof";
import { FAQ } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { SiteFooter } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <Problem />
        <WhatIDo />
        <HowItWorks />
        <About />
        <Proof />
        <FAQ />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
