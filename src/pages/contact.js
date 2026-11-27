import Head from "next/head";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import HubVisual from "@/components/HubVisual";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ToTop from "@/components/ToTop";
import { IconMail, IconPin, IconGlobe, IconPeople, IconTrend } from "@/components/Icons";
import useReveal from "@/hooks/useReveal";

const DESCRIPTION =
  "We welcome discussions with healthcare organizations, technology partners, investors, and institutions interested in collaboration and innovation.";

/* the three inquiry types offered by the form */
const HUB_NODES = [
  { icon: IconGlobe, label: "General" },
  { icon: IconPeople, label: "Partnership" },
  { icon: IconTrend, label: "Investor" },
];

export default function Contact() {
  useReveal();
  return (
    <>
      <Head>
        <title>Contact | SEDAAPI</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />
      </Head>
      <Nav page="start" />
      <main id="top">
        <PageHero
          pill="Contact"
          title="Let's"
          heat="Connect"
          lede={DESCRIPTION}
          ctas={
            <>
              <a className="btn primary" href="#inquiry">
                Send an Inquiry <span className="ar">→</span>
              </a>
              <a className="btn light" href="mailto:info@sedaapi.ai">
                info@sedaapi.ai
              </a>
            </>
          }
          aside={<HubVisual nodes={HUB_NODES} />}
        />

        <section id="reach">
          <div className="wrap contact-grid">
            <aside className="reach-card rv">
              <span className="orb a"></span>
              <span className="orb b"></span>
              <div className="rule"></div>
              <h2>Reach the SEDAAPI team</h2>
              <p>We respond to strategic and partnership inquiries within a few business days.</p>
              <div className="rc-list">
                <a className="rc-item" href="mailto:info@sedaapi.ai">
                  <span className="rc-i">
                    <IconMail />
                  </span>
                  <span>
                    <span className="rc-l">Email</span>
                    <span className="rc-v mono">info@sedaapi.ai</span>
                  </span>
                </a>
                <div className="rc-item">
                  <span className="rc-i">
                    <IconPin sw={1.8} />
                  </span>
                  <span>
                    <span className="rc-l">Location</span>
                    <span className="rc-v">Riyadh, Kingdom of Saudi Arabia</span>
                  </span>
                </div>
              </div>
            </aside>
            <ContactForm variant="page" />
          </div>
        </section>
      </main>
      <Footer />
      <ToTop />
    </>
  );
}
