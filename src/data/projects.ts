export interface CaseStudyChallenge {
  title: string;
  description: string;
  solution: string;
}

export interface CaseStudy {
  context: string;
  problem: string;
  architectureOverview: string;
  keyChallenges: CaseStudyChallenge[];
  techHighlights: string[];
  outcomes: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  isFlagship?: boolean;
  platforms: string[];
  techStack: string[];
  summary: string;
  metrics: Array<{ label: string; value: string }>;
  githubUrl?: string;
  demoUrl?: string;
  caseStudy: CaseStudy;
}

export const projects: Project[] = [
  {
    id: "papyrus-photobox",
    title: "Papyrus Photobox",
    tagline: "Commercial Photobox Kiosk App & Cross-Platform Client Architecture",
    category: "Commercial Hardware & Kiosk Systems",
    isFlagship: true,
    platforms: ["Flutter", "Windows", "macOS", "Android / iOS"],
    techStack: [
      "Flutter",
      "Dart",
      "Riverpod",
      "WebRTC",
      "MJPEG",
      "Shorebird OTA",
      "LUT Color Grading",
      "Camera Windows SDK",
      "fpdart"
    ],
    summary:
      "Full-featured commercial photobooth kiosk client engineered in Flutter. Powers live customer photo sessions, direct external camera hardware capture, real-time LUT color filters, instant thermal/inkjet print queuing, and QR mobile transfers in unattended high-traffic retail venues.",
    metrics: [
      { label: "OTA Updates", value: "Instant (Shorebird)" },
      { label: "Live Preview Latency", value: "< 60ms WebRTC/MJPEG" },
      { label: "Offline Resilience", value: "100% Kiosk Uptime" }
    ],
    githubUrl: "https://github.com/harysuryanto/flutter_mjpeg",
    caseStudy: {
      context:
        "Commercial photo booths operate in high-traffic retail environments with unstable network connectivity, heavy thermal print demands, and external DSLR/webcam hardware peripherals.",
      problem:
        "Standard mobile UI frameworks struggle with low-latency hardware camera streaming on desktop/Windows, zero-crash unattended operation, and the ability to patch production bugs without physical technician visits to kiosk locations.",
      architectureOverview:
        "Architected as a multi-layered Flutter client running on desktop and tablet hardware. Built with Riverpod for unidirectional state management, a dedicated hardware abstraction layer (HAL) for camera peripherals, and a background print-spooling subsystem.",
      keyChallenges: [
        {
          title: "Low-Latency Video Stream Pipeline",
          description:
            "Standard camera plugins caused dropped frames and frame-buffer lag when piping high-resolution live feeds to a multi-touch display.",
          solution:
            "Engineered hybrid WebRTC and optimized MJPEG pipelines with a custom fork of `flutter_mjpeg` supporting modern HTTP 1.0+ chunked streams and zero-copy texture rendering."
        },
        {
          title: "Zero-Downtime Field Updates in Unattended Booths",
          description:
            "Physical kiosks distributed across multiple shopping centers made manual app updates and emergency hotfixes costly and operationally fragile.",
          solution:
            "Integrated Shorebird Code Push for over-the-air (OTA) Flutter bytecode patching, allowing critical business logic and promotional UI updates to roll out without binary redeployments."
        },
        {
          title: "Real-Time Color Grading & Fast Client-Side Composite",
          description:
            "Customers expect instant filter previews and 300-DPI printable composite strip generation within seconds of session completion.",
          solution:
            "Implemented 3D LUT (Look-Up Table) color transformation shaders via `easy_lut` coupled with multi-threaded Dart isolate image processing to generate print-ready composites without freezing the UI."
        }
      ],
      techHighlights: [
        "Riverpod Annotation code-gen for predictable immutable state transitions",
        "Custom open-source contribution fork: `flutter_mjpeg` with modern HTTP chunking",
        "Shorebird OTA code push integration for continuous fleet deployment",
        "Touchscreen kiosk UX with multi-language virtual on-screen keyboard",
        "QR code generation and mobile client session handoff"
      ],
      outcomes: [
        "Successfully deployed across live commercial retail photo booths",
        "Sub-second session transition times and automated print queue recovery",
        "Zero field visits required for minor UI updates and configuration hotfixes"
      ]
    }
  },
  {
    id: "brb-macos",
    title: "BRB — Presence Privacy Utility",
    tagline: "Veil-First macOS Proximity Privacy App with Bluetooth Signal Engine",
    category: "macOS Native Systems & Security",
    platforms: ["macOS", "Swift", "SwiftUI", "AppKit"],
    techStack: [
      "Swift 5",
      "SwiftUI",
      "AppKit",
      "CoreBluetooth",
      "ServiceManagement",
      "Signal Processing",
      "EMA Smoothing"
    ],
    summary:
      "A lightweight macOS menu bar utility for wireless-earbud wearers. Monitors BLE radio signal strength (RSSI) with exponential moving average smoothing and hysteresis bands. When you walk away, it instantly blankets all displays with a privacy veil without nuking your active user session.",
    metrics: [
      { label: "Tick Engine", value: "0.5s LE Loop" },
      { label: "Filtering", value: "EMA (α = 0.8) + 6dB Hysteresis" },
      { label: "Test Coverage", value: "11/11 Suites Green" }
    ],
    githubUrl: "https://github.com/harysuryanto/BRB",
    caseStudy: {
      context:
        "Open-office and shared workspace environments expose sensitive development code, financial data, or chat windows whenever an engineer steps away for coffee or water.",
      problem:
        "Native macOS lock-screen forces full system lockouts, tearing down external display layouts and requiring full password/TouchID re-authentication on every brief absence. Traditional proximity locks suffer from radio noise jitter causing false lockouts.",
      architectureOverview:
        "Engineered as an unsandboxed macOS menu bar daemon in Swift. Features a multi-stage signal engine (`LERSSIReader` -> `SignalProcessor` -> `PresenceState`) governing full-screen multi-monitor `VeilWindowController` instances at the AppKit window server level.",
      keyChallenges: [
        {
          title: "Mitigating RF Noise and Multipath Signal Fluctuations",
          description:
            "Bluetooth RSSI exhibits severe noise spikes in office environments, causing abrupt signal drops when turning away from the desk.",
          solution:
            "Implemented Exponential Moving Average (EMA, α = 0.8) smoothing paired with an asymmetric 6 dBm hysteresis deadband (Veil-On at −80 dBm, Veil-Off at −74 dBm) and a 10s grace timer to eliminate false positives."
        },
        {
          title: "Multi-Display AppKit Veil Window Server Control",
          description:
            "Covering all attached displays seamlessly at system level while preventing user input bleed-through and managing display reconfiguration events.",
          solution:
            "Engineered borderless `NSWindow` overlays pinned to `screenSaver` window level with smooth crossfade animations and automatic NSScreen reconfiguration listeners."
        }
      ],
      techHighlights: [
        "Unsandboxed Developer-ID architecture accessing raw CoreBluetooth peripherals",
        "Deterministic 11-suite headless validation test suite (`EngineValidationTests.swift`)",
        "Automated drag-and-drop DMG packager script with vector asset generation",
        "Launch-at-login automation via `SMAppService`"
      ],
      outcomes: [
        "Smooth veil-first privacy without destroying open windows or session state",
        "Zero battery impact daemon running on continuous 500ms sampling ticks"
      ]
    }
  },
  {
    id: "cash-app",
    title: "Cash — Personal Wealth & Cash Flow",
    tagline: "Offline-First Mobile Finance Tracker built with Clean Architecture",
    category: "Mobile Architecture & FinTech",
    platforms: ["React Native", "Expo", "iOS / Android"],
    techStack: [
      "React Native",
      "Expo SDK 52+",
      "TypeScript",
      "NativeWind",
      "Shopify Skia",
      "PocketBase",
      "Clean Architecture",
      "Jest"
    ],
    summary:
      "High-performance personal financial manager engineered with domain-driven Clean Architecture principles. Features fluid Skia-rendered financial trend charts, offline-first transaction synchronization, automated bank-statement ingestion, and multi-currency budgeting.",
    metrics: [
      { label: "Rendering", value: "60 FPS GPU (Skia)" },
      { label: "Architecture", value: "Strict Clean Arch" },
      { label: "Sync", value: "Offline-First Queuing" }
    ],
    caseStudy: {
      context:
        "Personal expense and wealth trackers often suffer from clunky UI, sluggish charting performance over large transaction histories, and loss of records during intermittent network loss.",
      problem:
        "Traditional React Native finance applications experience chart stuttering when calculating rolling balances across thousands of categorized entries, while tight coupling between UI and APIs makes testing difficult.",
      architectureOverview:
        "Structured following strict Clean Architecture separation: Domain Entities & Use Cases are 100% agnostic of React or Expo, with Adapters connecting to local SQLite storage and remote PocketBase instances.",
      keyChallenges: [
        {
          title: "60 FPS Interactive Financial Trend Graphics",
          description:
            "Rendering dynamic multi-year net worth charts and category pie charts caused bridge bottlenecks in standard SVG chart libraries.",
          solution:
            "Integrated `@shopify/react-native-skia` for direct hardware-accelerated canvas rendering, offloading math to native GPU shaders."
        },
        {
          title: "Offline-First Mutation Invalidation & Local Persistence",
          description:
            "Users frequently log expenses while offline or traveling, requiring immediate UI updates followed by conflict-free remote sync.",
          solution:
            "Built a resilient query persister and local mutation queue that optimistically updates local storage and syncs idempotently with PocketBase upon connection restore."
        }
      ],
      techHighlights: [
        "Clean Architecture with separated Domain, Data, and Presentation tiers",
        "Hardware-accelerated charting via Shopify Skia",
        "Custom automated CSV / statement bank importer engine with schema mapping",
        "Unit and integration test suites powered by Jest and Jest-Expo"
      ],
      outcomes: [
        "Snappy instant-launch performance with zero UI lag during intensive data queries",
        "Highly maintainable codebase with 100% testable domain logic"
      ]
    }
  }
];
