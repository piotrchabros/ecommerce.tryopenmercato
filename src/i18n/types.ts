export type Language = "en" | "pl";

export interface LegalSection {
  title: string;
  content?: string;
  items?: string[];
  footer?: string;
}

export interface Translations {
  nav: {
    links: { label: string; href: string }[];
    cta: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
  };
  services: {
    label: string;
    titleStart: string;
    titleHighlight: string;
    description: string;
    items: { title: string; description: string }[];
  };
  capabilities: {
    label: string;
    titleStart: string;
    titleHighlight: string;
    description: string;
    items: { title: string; description: string }[];
  };
  process: {
    label: string;
    titleStart: string;
    titleHighlight: string;
    description: string;
    stepPrefix: string;
    items: { step: string; title: string; description: string }[];
  };
  techStack: {
    label: string;
    titleStart: string;
    titleHighlight: string;
    description: string;
    categories: { label: string; items: string[] }[];
  };
  team: {
    label: string;
    titleStart: string;
    titleHighlight: string;
    description: string;
    members: {
      name: string;
      role: string;
      initials: string;
      description: string;
    }[];
  };
  contact: {
    label: string;
    titleStart: string;
    titleHighlight: string;
    description: string;
    benefits: { title: string; desc: string }[];
    ctaPrimary: string;
    emailPrefix: string;
  };
  contactForm: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    companyLabel: string;
    companyOptional: string;
    companyPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    sentTitle: string;
    sentDescription: string;
    errorTitle: string;
    errorDescription: string;
    tryAgain: string;
  };
  footer: {
    tagline: string;
    companyTitle: string;
    addressTitle: string;
    phoneTitle: string;
    emailTitle: string;
    openSourceNote: string;
    copyright: string;
    privacyPolicy: string;
    termsOfService: string;
    backToHome: string;
  };
  privacy: {
    title: string;
    lastUpdated: string;
    intro: string;
    sections: LegalSection[];
  };
  terms: {
    title: string;
    lastUpdated: string;
    intro: string;
    sections: LegalSection[];
  };
}
