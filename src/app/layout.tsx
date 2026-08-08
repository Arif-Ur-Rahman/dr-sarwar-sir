import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { fullName, profile } from "@/content/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/** High-contrast serif used only for headline-scale display text. */
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const description = `${fullName}, ${profile.role} at ${profile.institution}, ${profile.location}. Research in data mining, machine learning, and applied data analytics.`;

export const metadata: Metadata = {
  title: {
    default: `${fullName} — ${profile.role}, ${profile.institution}`,
    template: `%s — ${fullName}`,
  },
  description,
  keywords: [
    profile.name,
    "data mining",
    "machine learning",
    "data analytics",
    "social network analysis",
    profile.institution,
  ],
  authors: [{ name: fullName }],
  openGraph: {
    type: "profile",
    title: `${fullName} — ${profile.role}, ${profile.institution}`,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: `${fullName} — ${profile.role}`,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-ink text-fg antialiased">{children}</body>
    </html>
  );
}
