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
  filterTag: "flutter" | "react-native" | "swift-native";
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
    tagline: "Commercial Photobox Kiosk App & Multi-Platform Client Architecture",
    category: "Commercial Kiosks & Hardware",
    filterTag: "flutter",
    isFlagship: true,
    platforms: ["Flutter", "Windows", "macOS", "Android / iOS"],
    techStack: [
      "Flutter",
      "Dart",
      "Riverpod (MVVM)",
      "WebRTC",
      "MJPEG",
      "Shorebird OTA",
      "LUT Color Shaders",
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
        "Architected as a multi-layered Flutter client running on desktop and tablet hardware. Built with Riverpod for MVVM state management, a dedicated hardware abstraction layer (HAL) for camera peripherals, and a background print-spooling subsystem.",
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
    id: "land-manifest",
    title: "Land Manifest",
    tagline: "Enterprise Fleet Telemetry & Driver Logistics Platform",
    category: "Logistics & Fleet Systems",
    filterTag: "react-native",
    platforms: ["React Native", "Expo SDK 54", "Android / iOS", "WebSocket"],
    techStack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Expo TaskManager",
      "Background Location",
      "WebSocket Telemetry",
      "NativeWind",
      "TanStack Query",
      "FileSystem Queue"
    ],
    summary:
      "Enterprise mobile client engineered for commercial drivers and logistics dispatchers. Features background GPS telemetry with offline dead-zone queuing via local FileSystem, real-time WebSocket vehicle streaming, digital proof-of-delivery signatures, and manifest QR scanning.",
    metrics: [
      { label: "Offline Resilience", value: "Persistent FileSystem Queue" },
      { label: "Background Telemetry", value: "Expo TaskManager Worker" },
      { label: "Dispatch Sync", value: "Real-Time WebSocket" }
    ],
    caseStudy: {
      context:
        "Heavy freight logistics requires continuous real-time vehicle positioning and proof-of-delivery across transit corridors with frequent intermittent cellular dropouts.",
      problem:
        "Mobile OS runtimes aggressively throttle background JavaScript execution, causing lost fleet coordinates, corrupted tracking paths, and dispatch desynchronization in cellular blackouts.",
      architectureOverview:
        "Engineered with Expo TaskManager running a decoupled background GPS worker (`background-location-task`). Coordinates flow through an atomic local `LocationQueue` on the FileSystem and stream to dispatch servers via persistent WebSockets with automatic retry.",
      keyChallenges: [
        {
          title: "Dead-Zone Telemetry Queuing & Reconnection Flush",
          description:
            "Drivers frequently travel through signal dead-zones where cellular connections drop for 10-30 minutes, leading to unrecoverable gaps in dispatch tracking.",
          solution:
            "Engineered a persistent `LocationQueue` holding up to 500 geolocations in local filesystem storage with exponential backoff flushing upon WebSocket reconnect."
        },
        {
          title: "Battery & Background Execution Budgeting",
          description:
            "Constant high-accuracy GPS sampling rapidly drains driver device batteries during 8-12 hour transit shifts.",
          solution:
            "Optimized distance-interval triggers, movement threshold gates, and dynamic throttle cooldowns to preserve device battery while meeting fleet audit compliance."
        },
        {
          title: "Digital Proof-of-Delivery Handshake",
          description:
            "Drivers require instant digital sign-off and cargo manifest QR verification at delivery checkpoints.",
          solution:
            "Integrated native canvas signature captures and high-density QR camera vision for immediate manifest dispatch validation."
        }
      ],
      techHighlights: [
        "Decoupled background location engine using Expo TaskManager",
        "Resilient offline queue (`LocationQueue`) written to app FileSystem sandbox",
        "Real-time bidirectional WebSocket client with auto-reconnection & token refresh",
        "Digital proof-of-delivery signature canvas and QR barcode scanning",
        "TanStack Query optimistic caching and NativeWind responsive driver UX"
      ],
      outcomes: [
        "100% telemetry retention through cellular dropouts and tunnel passages",
        "Streamlined driver dispatch workflow replacing paper delivery manifests",
        "Reliable full-shift background tracking across diverse Android fleet devices"
      ]
    }
  },
  {
    id: "product-catalog-mobile",
    title: "Product Catalog (Telkom)",
    tagline: "Enterprise Consultative Sales Enablement & Pricing Engine",
    category: "Enterprise Sales Enablement",
    filterTag: "react-native",
    platforms: ["React Native 0.86", "Expo SDK 57", "Android / iOS", "React 19"],
    techStack: [
      "React Native",
      "Expo SDK 57",
      "Clean Architecture + MVVM",
      "Dependency Injection",
      "TanStack Query",
      "NativeWind",
      "Zod Validation",
      "Jest Unit Suites"
    ],
    summary:
      "Internal Telkom sales-enablement mobile platform supporting enterprise consultative selling. Powers interactive B2B product catalogs, dynamic competitor price comparisons, financial margin calculations, and multimedia podcasts for corporate account executives.",
    metrics: [
      { label: "Architecture", value: "Clean Arch + MVVM DI" },
      { label: "Modern Stack", value: "Expo SDK 57 + RN 0.86" },
      { label: "Test Harness", value: "Jest + RNTL Integration" }
    ],
    caseStudy: {
      context:
        "Enterprise telecommunication sales teams need immediate offline access to complex B2B pricing algorithms, technical spec sheets, and competitor comparisons when negotiating on-site with corporate clients.",
      problem:
        "Large legacy codebases frequently suffer from spaghetti state, tight coupling between UI and API response shapes, and broken mock data that prevents reliable unit testing of pricing logic.",
      architectureOverview:
        "Architected an enterprise-grade migration to Clean Architecture + MVVM. Decouples Domain Entities, Repositories, and UseCases from React/Expo UI. Employs a unified Dependency Injection (`di/container.ts`) container swapping remote APIs with mock datasources seamlessly.",
      keyChallenges: [
        {
          title: "Clean Architecture Migration with Zero Regression",
          description:
            "Migrating multiple legacy features (Product Details, Retired Products, Bookmarks) from ad-hoc view models to strict domain layers without interrupting sales cycles.",
          solution:
            "Implemented clear repository boundaries with typed data-sources behind abstract interfaces, enforcing SOLID principles with dependency inversion."
        },
        {
          title: "Complex Dynamic Pricing & Competitor Comparison Calculations",
          description:
            "Running multi-tiered corporate discount formulas and feature-matrix comparisons across dozens of enterprise telecommunication packages.",
          solution:
            "Encapsulated calculation rules in pure domain use-cases tested with isolated Jest test suites, completely independent of UI render cycles."
        }
      ],
      techHighlights: [
        "Strict Clean Architecture + MVVM implementation with DI container pattern",
        "Modern Expo SDK 57 and React Native 0.86 runtime with React 19 concurrent features",
        "TanStack Query server-state cache with optimistic bookmarking",
        "Comprehensive Jest and React Native Testing Library test suites"
      ],
      outcomes: [
        "Significantly improved sales rep meeting productivity with instant pricing tools",
        "Clean, decoupled codebase with predictable testable domain use-cases"
      ]
    }
  },
  {
    id: "sipkl-mobile",
    title: "SIPKL Mobile",
    tagline: "Street Vendor Governance & Mapbox Field Management Platform",
    category: "Field Management & Geospatial",
    filterTag: "react-native",
    platforms: ["React Native", "Expo", "Android / iOS", "Mapbox"],
    techStack: [
      "React Native",
      "Expo SDK 50",
      "@rnmapbox/maps",
      "Shopify FlashList",
      "TanStack Query",
      "EAS Update (OTA)",
      "Geolocation",
      "Axios"
    ],
    summary:
      "Geospatial mobile field application engineered for municipal officers and field surveyors to register, inspect, and zone informal street vendors. Utilizes vector Mapbox integration, high-density cluster rendering, offline image manipulation, and staged EAS Update channels.",
    metrics: [
      { label: "Mapping", value: "Mapbox Vector SDK" },
      { label: "List Rendering", value: "Shopify FlashList 60FPS" },
      { label: "Deployment", value: "EAS Staging & Prod OTA" }
    ],
    caseStudy: {
      context:
        "Municipal field personnel need to map and verify street vendors in dense urban zones, capturing geolocation coordinates, business permits, and photographic compliance documentation under variable outdoor conditions.",
      problem:
        "Rendering hundreds of map pins and dense photo lists on low-cost government-issued Android devices caused severe memory exhaustion, frame drops, and application crashes.",
      architectureOverview:
        "Engineered with `@rnmapbox/maps` for GPU-accelerated vector mapping and Shopify `@shopify/flash-list` for high-performance recycling of vendor records. Features staged OTA channels (preview/production) via EAS Update.",
      keyChallenges: [
        {
          title: "Rendering High-Density Geospatial Vendor Points",
          description:
            "Displaying hundreds of spatial vendor coordinates in dense commercial districts overloaded device memory when using basic map marker components.",
          solution:
            "Implemented Mapbox vector shape sources and point clustering with dynamic zoom thresholds to keep rendering lightweight and responsive."
        },
        {
          title: "Large Media Compression Before Field Upload",
          description:
            "Field photos taken with high-megapixel device cameras strained slow 3G cellular uplinks.",
          solution:
            "Integrated `expo-image-manipulator` to perform client-side image downsampling and JPEG quality optimization prior to queuing uploads."
        }
      ],
      techHighlights: [
        "Mapbox vector tiles and geospatial coordinate clustering via `@rnmapbox/maps`",
        "Shopify FlashList integration eliminating frame drops on long vendor lists",
        "Automated local EAS builds and separate preview/production OTA update channels",
        "Secure storage of surveyor session tokens via `expo-secure-store`"
      ],
      outcomes: [
        "Enabled rapid municipal field census of thousands of street micro-businesses",
        "Eliminated crashes on low-spec budget Android devices via memory optimization"
      ]
    }
  },
  {
    id: "brb-macos",
    title: "BRB — Presence Privacy Utility",
    tagline: "Veil-First macOS Proximity Privacy App with Bluetooth Signal Engine",
    category: "macOS Native Systems & Security",
    filterTag: "swift-native",
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
    filterTag: "react-native",
    platforms: ["React Native", "Expo SDK 52+", "iOS / Android"],
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
  },
  {
    id: "amal-academy-ctp",
    title: "Amal Academy (Mobile App)",
    tagline: "Cross-Platform EdTech & Live Learning Mobile Application",
    category: "EdTech & Consumer Mobile",
    filterTag: "flutter",
    platforms: ["Flutter", "Dart", "iOS / Android"],
    techStack: [
      "Flutter",
      "Dart",
      "Hooks Riverpod",
      "Midtrans Snap SDK",
      "Lottie Animations",
      "FL Chart",
      "GoRouter",
      "YouTube Player"
    ],
    summary:
      "Interactive consumer learning platform connecting students with courses, mentors, and online masterclasses. Features streamlined Midtrans mobile checkout integration, interactive video modules, student progress tracking, and fluid micro-animations.",
    metrics: [
      { label: "Payments", value: "Midtrans Snap Gateway" },
      { label: "State Management", value: "Hooks Riverpod" },
      { label: "Navigation", value: "Declarative GoRouter" }
    ],
    caseStudy: {
      context:
        "EdTech consumers expect engaging, responsive learning experiences with smooth video playback and zero checkout friction during course enrollment.",
      problem:
        "Integrating payment gateway webviews, video streaming, and complex animated progress states across low-to-mid range Android devices often creates memory spikes and unresponsive payment flows.",
      architectureOverview:
        "Engineered with Flutter using `hooks_riverpod` for declarative state flow. Employs GoRouter with route guards for authentication, integrated Midtrans Snap payment processing, and encapsulated video player controllers.",
      keyChallenges: [
        {
          title: "Frictionless Native Payment Processing",
          description:
            "Handling secure multi-channel payments (QRIS, Virtual Accounts, E-Wallets) without losing user progress in course registration.",
          solution:
            "Integrated Midtrans Snap mobile SDK with secure tokenized session handshakes, immediate webview callbacks, and local transaction status reconciliation."
        },
        {
          title: "Optimized Embedded Media Playback",
          description:
            "Managing video lesson playback and interactive quizzes while avoiding video controller memory leaks on view transitions.",
          solution:
            "Built lifecycle-aware hooks to automatically dispose video and animation controllers when navigating between curriculum modules."
        }
      ],
      techHighlights: [
        "Midtrans Snap payment gateway integration for automated billing",
        "Hooks Riverpod for lightweight, concise state hooks",
        "Declarative GoRouter architecture with deep-link support",
        "Lottie vector animations and interactive FL Chart progress graphs"
      ],
      outcomes: [
        "Smooth course enrollment and instant digital payment confirmation",
        "High user satisfaction with zero reported video controller memory leaks"
      ]
    }
  },
  {
    id: "amal-partner-ptp",
    title: "Amal Partner (Touchpoint App)",
    tagline: "Educational Partner Operations & Course Analytics Portal",
    category: "Partner Operations & Analytics",
    filterTag: "flutter",
    platforms: ["Flutter", "Dart", "iOS / Android"],
    techStack: [
      "Flutter",
      "Dart",
      "Hooks Riverpod",
      "FL Chart Analytics",
      "Cached Network Image",
      "GoRouter",
      "Flutter Hooks"
    ],
    summary:
      "Operational partner touchpoint mobile app enabling educational institutions and course creators to monitor student enrollment metrics, curriculum engagement rates, revenue payouts, and live workshop schedules.",
    metrics: [
      { label: "Analytics", value: "FL Chart Multi-Axis" },
      { label: "State", value: "Hooks Riverpod" },
      { label: "Rendering", value: "Recycled Virtualized Grids" }
    ],
    caseStudy: {
      context:
        "Educational partners and instructors require real-time visibility into student attendance, course ratings, and monthly revenue performance from their mobile devices.",
      problem:
        "Displaying multi-axis revenue graphs, cohort retention curves, and high-volume student rosters on mobile devices requires careful render optimization to prevent frame dropouts.",
      architectureOverview:
        "Built in Flutter with Hooks Riverpod. Data is aggregated from backend REST APIs into immutable analytical view models, driving interactive FL Chart financial and engagement graphs.",
      keyChallenges: [
        {
          title: "Interactive Multi-Period Analytics Visualization",
          description:
            "Rendering time-series graphs for enrollment cohorts and gross revenue with smooth pinch-to-zoom and tooltip scrubbers.",
          solution:
            "Utilized `fl_chart` with custom touch tooltips and downsampled data points, caching calculations using Flutter Hooks."
        },
        {
          title: "Fast Partner Roster Search & Filter",
          description:
            "Enabling rapid search across large cohorts of enrolled learners with multiple filter tags.",
          solution:
            "Implemented client-side debounce search pipelines and cached network image loading for instant responsive roster inspection."
        }
      ],
      techHighlights: [
        "FL Chart visualization with custom multi-axis touch tooltips",
        "Declarative Hooks Riverpod architecture",
        "Cached network asset pipeline with fallback avatar generators",
        "Clean component separation for partner operational modules"
      ],
      outcomes: [
        "Empowered partner educators to manage courses and monitor revenues on the go",
        "Fast, reliable mobile portal with instant analytical visualizations"
      ]
    }
  }
];
