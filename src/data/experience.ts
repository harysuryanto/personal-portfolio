export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: "Lead Mobile & Kiosk Systems Engineer",
    company: "Papyrus & A-CODE Tech",
    period: "2024 — Present",
    location: "Indonesia",
    type: "Production Client Engineering",
    description:
      "Led the client architecture and hardware integration for unattended commercial photobooth kiosks deployed in high-traffic retail venues.",
    highlights: [
      "Architected Flutter desktop & mobile application serving thousands of customer photo sessions across commercial venues.",
      "Engineered low-latency live camera view pipeline utilizing hybrid WebRTC and custom-patched MJPEG streaming engines.",
      "Integrated Shorebird OTA Code Push to achieve zero-downtime fleet deployments and instant patch delivery without physical site visits.",
      "Built automated background print-spooling and 300-DPI composite rendering pipelines using Dart isolates and 3D LUT shaders."
    ],
    technologies: ["Flutter", "Riverpod", "WebRTC", "MJPEG", "Shorebird", "Windows SDK", "fpdart"]
  },
  {
    role: "Mobile Software Engineer",
    company: "Independent & Client Products",
    period: "2022 — 2024",
    location: "Remote",
    type: "Client Applications",
    description:
      "Built and delivered production cross-platform mobile and desktop applications emphasizing Clean Architecture, offline resilience, and hardware integration.",
    highlights: [
      "Developed 'Cash', an offline-first wealth management app with React Native, Expo, and hardware-accelerated Shopify Skia charts.",
      "Created 'BRB', a macOS presence-privacy menu bar daemon in native Swift leveraging CoreBluetooth RSSI EMA smoothing algorithms.",
      "Contributed to open-source mobile ecosystems including custom streaming patches for Flutter media libraries."
    ],
    technologies: ["Swift", "SwiftUI", "React Native", "Expo", "Shopify Skia", "CoreBluetooth", "TypeScript"]
  }
];
