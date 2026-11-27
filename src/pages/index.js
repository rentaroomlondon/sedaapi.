import Head from "next/head";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Industry from "@/components/Industry";
import Statement from "@/components/Statement";
import Partners from "@/components/Partners";
import About from "@/components/About";
import Why from "@/components/Why";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ToTop from "@/components/ToTop";
import useReveal from "@/hooks/useReveal";

export default function Home() {
  useReveal();
  return (
    <>
      <Head>
        <title>SEDAAPI · Digital Healthcare Innovation</title>
        <meta
          name="description"
          content="A Saudi-focused technology startup advancing digital healthcare innovation through intelligent software, strategic partnerships, and enterprise-grade solutions aligned with Vision 2030."
        />
        <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />
      </Head>
      <Nav />
      <main id="top">
        <Hero />
        <Marquee />
        <Industry />
        <Statement />
        <Partners />
        <About />
        <Why />
        <Contact />
      </main>
      <Footer />
      <ToTop />
    </>
  );
}
