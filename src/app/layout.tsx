import type { Metadata, Viewport } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
};
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroll } from "@/components/smooth-scroll";
import { PageTransition } from "@/components/page-transition";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.heicstudio.space";
const SITE_NAME = "HEIC Studio";
const SITE_DESCRIPTION =
  "Batch convert HEIC to JPG, PNG, or WEBP instantly on Windows and Mac. 100% in your browser, no uploads, no privacy risks. The best free, fast, secure iPhone photo converter.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  // ── Core ──
  title: {
    default: "HEIC Studio — Free HEIC to JPG Converter (No Upload, 100% Private)",
    template: "%s | HEIC Studio",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "batch convert heic to jpg",
    "heic to jpg mac",
    "heic to jpg windows",
    "heic to jpg offline browser",
    "convert heic without uploading",
    "best free heic converter",
    "heic to jpg fast",
    "heic to jpg",
    "heic to png",
    "heic to webp",
    "convert heic to jpg",
    "heic to jpg converter",
    "iphone photo converter",
    "apple heic converter",
    "heic converter privacy",
    "heic to jpg online free",
    "convert heic locally",
    "batch heic converter",
    "heic to jpeg online",
    "heic to jpg high quality",
    "heic studio",
  ],
  applicationName: SITE_NAME,
  authors: [{ name: "HEIC Studio", url: SITE_URL }],
  creator: "HEIC Studio",
  publisher: "HEIC Studio",
  category: "technology",
  classification: "Image Converter Tool",

  // ── Open Graph ──
  openGraph: {
    title: "HEIC Studio — Free HEIC to JPG, PNG, WEBP Converter (100% Private)",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HEIC Studio — Convert HEIC to JPG privately in your browser",
        type: "image/png",
      },
    ],
  },

  // ── Twitter ──
  twitter: {
    card: "summary_large_image",
    title: "HEIC Studio — Free HEIC Converter",
    description:
      "Convert iPhone HEIC photos to JPG, PNG, or WEBP instantly in your browser. Zero uploads, 100% private.",
    images: ["/og-image.png"],
    site: "@heicstudio",
  },

  // ── Robots ──
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Alternates ──
  alternates: {
    canonical: SITE_URL,
  },

  // ── Icons ──
  icons: {
    icon: "/icon.svg",
    apple: "/apple-touch-icon.png",
  },

  // ── Misc ──
  other: {
    "google-site-verification": "YOUR_VERIFICATION_CODE",
    "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
  },
};

// ── JSON-LD Structured Data ──
function JsonLd() {
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "SoftwareApplication"],
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Windows, macOS, iOS, Android, Linux",
    browserRequirements: "Requires a modern browser (Chrome, Safari, Firefox, Edge) with WebAssembly support",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Batch convert HEIC to JPG, PNG, WEBP",
      "100% client-side processing",
      "No file uploads to servers",
      "WebAssembly powered",
      "Free and unlimited",
      "Batch conversion",
      "Preserves image quality",
    ],
    screenshot: `${SITE_URL}/og-image.png`,
    softwareVersion: "1.0.0",
    creator: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Convert HEIC to JPG",
        item: `${SITE_URL}/convert/heic-to-jpg`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Convert HEIC to PNG",
        item: `${SITE_URL}/convert/heic-to-png`,
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are my photos uploaded to a server?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Your photos never leave your device. The conversion script runs entirely in your browser using WebAssembly, and all processing happens in your local RAM.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a file size limit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Because the processing happens on your device, the only limit is your device's available memory. Modern smartphones and laptops can easily handle 50MB+ photos without issue.",
        },
      },
      {
        "@type": "Question",
        name: "Does this work on mobile devices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. HEIC Studio is fully responsive and the WebAssembly engine runs seamlessly in mobile Safari, Chrome, and Firefox.",
        },
      },
      {
        "@type": "Question",
        name: "Why are my iPhone photos in HEIC anyway?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Apple adopted HEIC (High-Efficiency Image Container) because it offers significantly better compression than JPG, saving you iCloud and device storage space without sacrificing quality.",
        },
      },
      {
        "@type": "Question",
        name: "Is HEIC Studio really free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, HEIC Studio is completely free to use with no limits. Since everything runs in your browser, there are no server costs for us to pass on to you.",
        },
      },
      {
        "@type": "Question",
        name: "What is HEIC format?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "HEIC stands for High-Efficiency Image Container. It is the default photo format used by Apple iPhones since iOS 11 (2017). HEIC files are roughly 50% smaller than equivalent JPG files while maintaining the same visual quality.",
        },
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Convert HEIC to JPG, PNG, or WEBP",
    description:
      "Convert iPhone HEIC photos to JPG, PNG, or WEBP format instantly using HEIC Studio. No software installation needed.",
    totalTime: "PT10S",
    step: [
      {
        "@type": "HowToStep",
        name: "Open HEIC Studio",
        text: "Visit heicstudio.space in any modern web browser.",
        position: 1,
      },
      {
        "@type": "HowToStep",
        name: "Drop your HEIC files",
        text: "Drag and drop your HEIC files into the drop zone, or click to browse and select files from your device.",
        position: 2,
      },
      {
        "@type": "HowToStep",
        name: "Download your images",
        text: "Your converted JPG, PNG, or WEBP files are ready instantly. Click download to save them to your device.",
        position: 3,
      },
    ],
    tool: {
      "@type": "HowToTool",
      name: "A modern web browser (Chrome, Safari, Firefox, or Edge)",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <JsonLd />
        <link rel="canonical" href={SITE_URL} />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body
        className={`${montserrat.variable} ${cormorant.variable} antialiased min-h-screen bg-background text-foreground flex flex-col font-sans`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            <PageTransition>
              {children}
            </PageTransition>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
