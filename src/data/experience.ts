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
    type: "Production Hardware & Kiosk Systems",
    description:
      "Leading client architecture, peripheral hardware integration, and over-the-air fleet management for commercial photobooth kiosks in retail venues.",
    highlights: [
      "Architected Flutter desktop & mobile application serving thousands of customer photo sessions across commercial retail locations.",
      "Engineered low-latency live camera view pipeline utilizing hybrid WebRTC and custom-patched MJPEG streaming engines.",
      "Integrated Shorebird OTA Code Push to achieve zero-downtime fleet deployments and instant patch delivery without physical site visits.",
      "Built automated background print-spooling and 300-DPI composite rendering pipelines using Dart isolates and 3D LUT shaders."
    ],
    technologies: ["Flutter", "Riverpod (MVVM)", "WebRTC", "MJPEG", "Shorebird OTA", "Windows SDK", "fpdart"]
  },
  {
    role: "Senior Mobile Engineer",
    company: "Enterprise & Fleet Logistics Systems",
    period: "2023 — 2024",
    location: "Indonesia / Remote",
    type: "Logistics & Enterprise Sales",
    description:
      "Architected high-reliability mobile applications for freight logistics dispatchers, corporate sales teams, and municipal field surveyors.",
    highlights: [
      "Built 'Land Manifest' driver logistics client with decoupled Expo TaskManager background GPS tracking and persistent FileSystem dead-zone queuing.",
      "Engineered 'Product Catalog Mobile' for Telkom enterprise sales teams, migrating features to Clean Architecture + MVVM with complete DI test harnesses on Expo SDK 57 / RN 0.86.",
      "Developed 'SIPKL Mobile' geospatial field management client with Mapbox vector clustering, image downsampling, and staged EAS Update OTA channels."
    ],
    technologies: ["React Native", "Expo SDK 54/57", "Clean Architecture", "Mapbox", "TypeScript", "TanStack Query", "EAS Update"]
  },
  {
    role: "Mobile Software Engineer",
    company: "Independent & Client Products",
    period: "2021 — 2023",
    location: "Remote",
    type: "Client Products & Native Systems",
    description:
      "Delivered native macOS utilities, consumer EdTech applications, and offline-first personal financial architectures.",
    highlights: [
      "Created 'BRB', a macOS menu bar presence daemon written in native Swift / SwiftUI with CoreBluetooth RSSI EMA smoothing algorithms.",
      "Engineered 'Cash', an offline-first financial tracker with hardware-accelerated Shopify Skia graphics and domain-isolated Clean Architecture.",
      "Developed 'Amal Academy' (CTP/PTP) multi-platform Flutter apps with Midtrans Snap payment gateway integration and FL Chart analytics."
    ],
    technologies: ["Swift", "SwiftUI", "CoreBluetooth", "Flutter", "Hooks Riverpod", "Shopify Skia", "Midtrans"]
  }
];
