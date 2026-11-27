import { Html, Head, Main, NextScript } from "next/document";

const ORG_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SEDAAPI",
  url: "https://www.sedaapi.ai",
  logo: "https://www.sedaapi.ai/sedaapi-mark-ink.png",
  email: "info@sedaapi.ai",
  slogan: "Where Intelligence Meets Humanity",
  description:
    "A Saudi-focused technology startup advancing digital healthcare innovation through intelligent software, strategic partnerships, and enterprise-grade solutions aligned with Vision 2030.",
  address: { "@type": "PostalAddress", addressLocality: "Riyadh", addressCountry: "SA" },
  areaServed: "SA",
};

export default function Document() {
  return (
    <Html lang="en" data-scroll-behavior="smooth">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="64x64" />
        <link rel="icon" href="/icon-dark.png" type="image/png" sizes="64x64" media="(prefers-color-scheme: dark)" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_LD) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
