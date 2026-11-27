import SectionHead from "./SectionHead";
import ContactForm from "./ContactForm";
import { IconMail, IconGlobe, IconPin, IconCheck } from "./Icons";

export default function Contact() {
  return (
    <section id="start">
      <div className="wrap contact">
        <SectionHead
          eyebrow="Contact"
          title="Let's Connect"
          lede="We welcome discussions with healthcare organizations, technology partners, investors, and institutions interested in collaboration and innovation."
          style={{ margin: 0 }}
        >
          <div className="reach">
            <a href="mailto:info@sedaapi.ai">
              <IconMail />
              <span className="mono">info@sedaapi.ai</span>
            </a>
            <a href="https://www.sedaapi.ai" rel="noopener">
              <IconGlobe />
              <span className="mono">www.sedaapi.ai</span>
            </a>
            <div>
              <IconPin sw={1.8} />
              <span>Riyadh, Kingdom of Saudi Arabia</span>
            </div>
          </div>
          <div className="promise">
            <div>
              <IconCheck />
              We respond to strategic and partnership inquiries within a few business days.
            </div>
          </div>
        </SectionHead>
        <ContactForm />
      </div>
    </section>
  );
}
