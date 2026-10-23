export interface SkillCategory {
  title: string;
  description: string;
  skills: Array<{
    name: string;
    level?: string;
    badge?: string;
  }>;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Mobile Core & Client Frameworks",
    description: "Production experience shipping robust cross-platform and native mobile apps.",
    skills: [
      { name: "Flutter & Dart", badge: "Primary" },
      { name: "Swift & SwiftUI", badge: "Native iOS/macOS" },
      { name: "React Native & TypeScript", badge: "Cross-Platform" },
      { name: "Kotlin & Android SDK", badge: "Native Android" },
      { name: "AppKit", badge: "macOS Desktop" }
    ]
  },
  {
    title: "Hardware, Media & Native Bridges",
    description: "Interfacing directly with camera sensors, RF radios, and desktop peripheral hardware.",
    skills: [
      { name: "WebRTC & MJPEG Streaming", badge: "Low-Latency" },
      { name: "Camera Windows & Mobile SDKs" },
      { name: "CoreBluetooth & BLE (RSSI)" },
      { name: "Platform Channels & JSI Bridges" },
      { name: "3D LUT Real-time Color Shaders" }
    ]
  },
  {
    title: "Architecture & Data Engineering",
    description: "Disciplined software craft designed for multi-year maintainability and scale.",
    skills: [
      { name: "Clean Architecture (Domain/Data/UI)" },
      { name: "State: Riverpod, MVVM, Redux" },
      { name: "Offline-First Sync & SQLite / Drift" },
      { name: "Functional Programming (fpdart)" },
      { name: "REST & WebSocket Protocols" }
    ]
  },
  {
    title: "Deployment, Tooling & DevOps",
    description: "Automated test suites, over-the-air continuous updates, and release pipelines.",
    skills: [
      { name: "Shorebird OTA Code Push", badge: "Fleet Deploy" },
      { name: "Fastlane & Automated Builds" },
      { name: "GitHub Actions CI/CD" },
      { name: "App Store Connect & Play Console" },
      { name: "Jest, XCTest, Headless Test Runners" }
    ]
  }
];
