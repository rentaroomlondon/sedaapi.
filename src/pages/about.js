import Head from "next/head";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import SkillCard from "@/components/SkillCard";
import CapabilityGrid from "@/components/CapabilityGrid";
import Why from "@/components/Why";
import HubVisual from "@/components/HubVisual";
import Statement from "@/components/Statement";
import Footer from "@/components/Footer";
import ToTop from "@/components/ToTop";
import { VALUES } from "@/components/About";
import { IconRocket, IconHeartPulse, IconBook, IconAward, IconLeaf, IconBulb, IconPeople, IconTarget } from "@/components/Icons";
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

const HUB_NODES = [
  { icon: IconBulb, label: "Innovation" },
  { icon: IconPeople, label: "Collaboration" },
  { icon: IconTarget, label: "Vision 2030" },
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
        <PageHero
          pill="About SEDAAPI"
          title="A Saudi technology company with a"
          heat="clear purpose"
          lede={DESCRIPTION}
          ctas={
            <>
              <Link className="btn primary" href="/contact">
                Become a Partner <span className="ar">→</span>
              </Link>
              <a className="btn light" href="#why">
                Why SEDAAPI
              </a>
            </>
          }
          stats={[
            { to: 3, label: "Core values" },
            { to: 5, label: "Vision commitments" },
            { to: 6, label: "Reasons to partner" },
          ]}
          aside={<HubVisual nodes={HUB_NODES} />}
        />

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
