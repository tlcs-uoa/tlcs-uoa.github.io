import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Inter is the University of Auckland's official brand typeface, used for both
// body text and headings (local files). Exposed via --font-sans, which the
// Tailwind `sans` and `display` families both reference.
const inter = localFont({
  src: [
    { path: "./fonts/Inter-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/Inter-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/Inter-Bold.otf", weight: "700", style: "normal" },
    { path: "./fonts/Inter-Italic.otf", weight: "400", style: "italic" },
  ],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.auckland.ac.nz"),
  title: "Teaching and Learning Circles | Waipapa Taumata Rau",
  description:
    "Join a Teaching and Learning Circle at the University of Auckland: a developmental, collegial way for staff to observe each other's teaching and reflect on their own practice across a semester.",
  keywords: [
    "Teaching and Learning Circles",
    "TLC",
    "University of Auckland",
    "Waipapa Taumata Rau",
    "peer observation",
    "TeachWell",
    "professional development",
  ],
  openGraph: {
    title: "Teaching and Learning Circles | University of Auckland",
    description:
      "Peer-driven, reflective, and collegial. A developmental peer-observation programme for teaching staff.",
    type: "website",
    locale: "en_NZ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-uoa-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
