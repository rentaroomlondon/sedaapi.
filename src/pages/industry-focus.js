import Head from "next/head";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import SkillCard from "@/components/SkillCard";
import CapabilityGrid from "@/components/CapabilityGrid";
import HubVisual from "@/components/HubVisual";
import Statement from "@/components/Statement";
import Footer from "@/components/Footer";
import ToTop from "@/components/ToTop";
import { DOMAINS } from "@/components/Industry";
import { IconHospital, IconShieldPlus, IconGov, IconHeartPulse, IconServer, IconChip } from "@/components/Icons";
import useReveal from "@/hooks/useReveal";

const DESCRIPTION =
  "SEDAAPI concentrates its technology investment across six interconnected domains that define the future of Saudi healthcare and enterprise innovation.";

const HUB_NODES = [
  { icon: IconHospital, label: "Providers" },
  { icon: IconShieldPlus, label: "Insurance" },
  { icon: IconGov, label: "Government" },
  { icon: IconHeartPulse, label: "Digital Health" },
  { icon: IconServer, label: "Enterprise" },
  { icon: IconChip, label: "AI" },
];

export default function IndustryFocus() {
  useReveal();
  return (
    <>
      <Head>
        <title>Industry Focus | SEDAAPI</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />
      </Head>
      <Nav page="industry" />
      <main id="top">
        <PageHero
          pill="Industry Focus"
          title="Focused on the sectors"
          heat="shaping tomorrow"
          lede={DESCRIPTION}
          ctas={
            <>
              <Link className="btn primary" href="/contact">
                Become a Partner <span className="ar">→</span>
              </Link>
              <a className="btn light" href="#capabilities">
                Our Capabilities
              </a>
            </>
          }
          stats={[
            { to: 6, label: "Industry domains" },
            { to: 10, label: "Core capabilities" },
          ]}
          aside={<HubVisual nodes={HUB_NODES} />}
        />

        <section id="domains">
          <div className="wrap">
            <SectionHead
              eyebrow="Industry Focus"
              title="Where we create measurable impact"
              lede="Six intersecting domains where SEDAAPI concentrates its expertise, partnerships, and technology investment."
            />
            <div className="skills bento">
              {DOMAINS.map((d, i) => (
                <SkillCard key={d.title} num={String(i + 1).padStart(2, "0")} {...d} />
              ))}
            </div>
          </div>
        </section>

        <CapabilityGrid />

        <Statement card />
      </main>
      <Footer />
      <ToTop />
    </>
  );
}
