import Head from "next/head";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Statement from "@/components/Statement";
import HubVisual from "@/components/HubVisual";
import Footer from "@/components/Footer";
import ToTop from "@/components/ToTop";
import { IconHospital, IconChip, IconGov, IconFlask, IconCog, IconTrend } from "@/components/Icons";
import useReveal from "@/hooks/useReveal";

const DESCRIPTION =
  "We welcome opportunities to collaborate with organizations advancing digital transformation in Saudi Arabia and the wider GCC.";

const PARTNER_TYPES = [
  { icon: IconHospital, title: "Healthcare Organizations" },
  { icon: IconChip, title: "Technology Companies" },
  { icon: IconGov, title: "Government Programs" },
  { icon: IconFlask, title: "Research Institutions" },
  { icon: IconCog, title: "System Integrators" },
  { icon: IconTrend, title: "Strategic Investors" },
];

const HUB_NODES = [
  { icon: IconHospital, label: "Healthcare" },
  { icon: IconChip, label: "Technology" },
  { icon: IconGov, label: "Government" },
  { icon: IconFlask, label: "Research" },
  { icon: IconCog, label: "Integrators" },
  { icon: IconTrend, label: "Investors" },
];

export default function Partnerships() {
  useReveal();
  return (
    <>
      <Head>
        <title>Partnerships | SEDAAPI</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />
      </Head>
      <Nav page="partners" />
      <main id="top">
        <PageHero
          pill="Partnerships"
          title="Meaningful innovation is"
          heat="built together"
          lede={DESCRIPTION}
          ctas={
            <>
              <Link className="btn primary" href="/contact">
                Become a Partner <span className="ar">→</span>
              </Link>
              <a className="btn light" href="#partner-types">
                Who we work with
              </a>
            </>
          }
          stats={[
            { to: 6, label: "Partner types" },
            { to: 6, label: "Industry domains" },
            { to: 10, label: "Core capabilities" },
          ]}
          aside={<HubVisual nodes={HUB_NODES} />}
        />

        <section id="partner-types">
          <div className="wrap">
            <SectionHead
              eyebrow="Partnerships"
              title="Building Strategic Partnerships"
              lede="SEDAAPI believes meaningful innovation is achieved through collaboration. We welcome opportunities to work with healthcare providers, government organizations, insurers, technology companies, system integrators, research institutions, and strategic investors to support digital transformation initiatives within Saudi Arabia and the GCC."
            />
            <div className="ptypes">
              {PARTNER_TYPES.map(({ icon: Icon, title }, i) => (
                <div className="ptype rv" key={title}>
                  <span className="pt-n">
                    <Icon />
                  </span>
                  <h3>{title}</h3>
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="pt-bar"></span>
                </div>
              ))}
            </div>
            <div className="center-cta rv">
              <Link className="btn primary" href="/contact">
                Become a Partner <span className="ar">→</span>
              </Link>
            </div>
          </div>
        </section>

        <Statement card />
      </main>
      <Footer />
      <ToTop />
    </>
  );
}
