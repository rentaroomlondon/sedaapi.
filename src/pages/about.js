import Head from "next/head";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SectionHead from "@/components/SectionHead";
import SkillCard from "@/components/SkillCard";
import CapabilityGrid from "@/components/CapabilityGrid";
import Why from "@/components/Why";
import Statement from "@/components/Statement";
import Footer from "@/components/Footer";
import ToTop from "@/components/ToTop";
import { VALUES } from "@/components/About";
import { IconRocket, IconHeartPulse, IconBook, IconAward, IconLeaf } from "@/components/Icons";
import useReveal from "@/hooks/useReveal";

const DESCRIPTION =
  "SEDAAPI advances the digital transformation of healthcare through intelligent software, enterprise capabilities, and long-horizon partnerships.";

const VISION_ITEMS = [
  { icon: IconRocket, title: "Digital Transformation" },
  { icon: IconHeartPulse, title: "Healthcare Innovation" },
  { icon: IconBook, title: "Knowledge Economy" },
  { icon: IconAward, title: "Technology Leadership" },
  { icon: IconLeaf, title: "Sustainable Growth" },
];

export default function AboutPage() {
  useReveal();
  return (
    <>
      <Head>
        <title>About | SEDAAPI</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />
      </Head>
      <Nav page="about" />
      <main id="top">
        <Hero variant="skills" />

        <section id="purpose">
          <div className="wrap split">
            <SectionHead
              eyebrow="About SEDAAPI"
              title="Innovation with Purpose"
              lede="SEDAAPI is dedicated to advancing digital transformation across the healthcare ecosystem through innovative technologies and collaborative partnerships. We support healthcare organizations, technology providers, and strategic stakeholders with scalable digital solutions that improve efficiency, interoperability, and long-term sustainability — built on innovation, collaboration, and alignment with Saudi Arabia's Vision 2030."
            />
            <div className="skills">
              {VALUES.map((v, i) => (
                <SkillCard key={v.title} num={String(i + 1).padStart(2, "0")} {...v} />
              ))}
            </div>
          </div>
        </section>

        <CapabilityGrid
          id="vision"
          eyebrow="Our Vision"
          title="Aligned with Saudi Vision 2030"
          lede="Contributing to the Kingdom's transformation through five interlocking commitments that guide every partnership and product decision."
          items={VISION_ITEMS}
          variant="timeline"
        />

        <Why />

        <Statement card />
      </main>
      <Footer />
      <ToTop />
    </>
  );
}
