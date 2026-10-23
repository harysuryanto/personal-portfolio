export interface SiteConfig {
  name: string;
  title: string;
  headline: string;
  bio: string;
  email: string;
  location: string;
  status: {
    available: boolean;
    label: string;
  };
  socials: {
    github: string;
    linkedin?: string;
    email: string;
  };
  nav: Array<{
    label: string;
    href: string;
  }>;
}

export const siteConfig: SiteConfig = {
  name: "Hary Suryanto",
  title: "Hary Suryanto | Mobile Engineer",
  headline: "Mobile Engineer specializing in high-performance client architectures, native hardware bridges, and tactile UX.",
  bio: "Experienced in shipping cross-platform and native applications across Flutter, Swift (iOS/macOS), and React Native. Deep focus on direct camera/hardware integrations, offline-first data sync, and clean architecture.",
  email: "hary.suryanto01@gmail.com",
  location: "Indonesia",
  status: {
    available: true,
    label: "Open to Mobile & Systems Engineering Roles"
  },
  socials: {
    github: "https://github.com/harysuryanto",
    linkedin: "https://linkedin.com/in/harysuryanto",
    email: "mailto:hary.suryanto01@gmail.com"
  },
  nav: [
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ]
};
