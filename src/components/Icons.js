const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function Svg({ sw = 1.7, children }) {
  return (
    <svg {...base} strokeWidth={sw}>
      {children}
    </svg>
  );
}

/* Industry domains */
export const IconHospital = () => <Svg><path d="M3 21h18M5 21V7l7-4 7 4v14" /><path d="M12 9v6M9 12h6" /></Svg>;
export const IconShieldPlus = () => <Svg><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" /><path d="M12 9v6M9 12h6" /></Svg>;
export const IconGov = () => <Svg><path d="M3 21h18M4 10h16M12 3l9 5H3z" /><path d="M6 10v8M10 10v8M14 10v8M18 10v8" /></Svg>;
export const IconHeartPulse = () => <Svg><path d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.5-7 11-7 11z" /><path d="M8 12h2l1-2 2 4 1-2h2" /></Svg>;
export const IconServer = () => <Svg><rect x="3" y="4" width="18" height="7" rx="2" /><rect x="3" y="13" width="18" height="7" rx="2" /><path d="M7 7.5h.01M7 16.5h.01" /></Svg>;
export const IconChip = () => <Svg><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4M10 12h4M12 10v4" /></Svg>;

/* Skill cards */
export const IconBulb = () => <Svg><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" /></Svg>;
export const IconPeople = () => <Svg><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20a6 6 0 0 1 12 0M15 20a4.5 4.5 0 0 1 6-4.2" /></Svg>;
export const IconTarget = () => <Svg><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></Svg>;
export const IconPin = ({ sw }) => <Svg sw={sw}><path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></Svg>;
export const IconShieldCheck = () => <Svg><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" /><path d="M9 12l2 2 4-4" /></Svg>;
export const IconChart = () => <Svg><path d="M3 3v18h18" /><path d="M7 15l4-4 3 3 6-6M15 8h5v5" /></Svg>;
export const IconCompass = () => <Svg><circle cx="12" cy="12" r="9" /><path d="M16 8l-2 6-6 2 2-6z" /></Svg>;

/* Contact */
export const IconMail = () => <Svg sw={1.8}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Svg>;
export const IconGlobe = () => <Svg sw={1.8}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></Svg>;
export const IconCheck = ({ sw = 2 }) => <Svg sw={sw}><path d="M20 6 9 17l-5-5" /></Svg>;

/* Capabilities */
export const IconBrain = () => <Svg><path d="M9.5 4A2.5 2.5 0 0 0 7 6.5v.3A3 3 0 0 0 5 12a3 3 0 0 0 1.5 2.6V16a3 3 0 0 0 5.5 1.7V5.5A1.5 1.5 0 0 0 9.5 4z" /><path d="M14.5 4A2.5 2.5 0 0 1 17 6.5v.3a3 3 0 0 1 2 5.2 3 3 0 0 1-1.5 2.6V16a3 3 0 0 1-5.5 1.7" /><path d="M8.5 9.5h1.5M14 12h1.5" /></Svg>;
export const IconRefresh = () => <Svg><path d="M20 11a8 8 0 0 0-14.9-4M4 3v4h4" /><path d="M4 13a8 8 0 0 0 14.9 4M20 21v-4h-4" /></Svg>;
export const IconBoxes = () => <Svg><rect x="3" y="13" width="8" height="8" rx="1.5" /><rect x="13" y="13" width="8" height="8" rx="1.5" /><rect x="8" y="3" width="8" height="8" rx="1.5" /></Svg>;
export const IconCloud = () => <Svg><path d="M7 18h10a4 4 0 0 0 .6-8A6 6 0 0 0 6 11.5 3.3 3.3 0 0 0 7 18z" /></Svg>;
export const IconNetwork = () => <Svg><rect x="9" y="3" width="6" height="5" rx="1" /><rect x="3" y="16" width="6" height="5" rx="1" /><rect x="15" y="16" width="6" height="5" rx="1" /><path d="M12 8v4M6 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" /></Svg>;
export const IconPlug = () => <Svg><path d="M9 2v5M15 2v5M6 7h12v4a6 6 0 0 1-12 0zM12 17v5" /></Svg>;
export const IconRoute = () => <Svg><circle cx="6" cy="5" r="2" /><circle cx="18" cy="19" r="2" /><path d="M8 5h7a3.5 3.5 0 0 1 0 7H9a3.5 3.5 0 0 0 0 7h7" /></Svg>;

/* Partner types */
export const IconFlask = () => <Svg><path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3" /><path d="M7.5 15h9" /></Svg>;
export const IconCog = () => <Svg><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1" /></Svg>;
export const IconTrend = () => <Svg><path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" /></Svg>;

/* Vision 2030 commitments */
export const IconRocket = () => <Svg><path d="M5 15c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9A2 2 0 0 0 5 15z" /><path d="M12 15l-3-3a22 22 0 0 1 2-4A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22 22 0 0 1-4 2z" /><path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5" /></Svg>;
export const IconBook = () => <Svg><path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2zM22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z" /></Svg>;
export const IconAward = () => <Svg><circle cx="12" cy="8" r="6" /><path d="M8.2 13 7 22l5-3 5 3-1.2-9" /></Svg>;
export const IconLeaf = () => <Svg><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z" /><path d="M2 21c0-3 1.9-5.4 5.1-6C9.5 14.5 12 13 13 12" /></Svg>;
export const IconSend = () => <Svg sw={1.9}><path d="M22 2 11 13M22 2l-7 20-4-9-9-4z" /></Svg>;
