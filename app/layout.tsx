import { siteUrl } from "@/lib/site";
import type { Metadata } from "next";
import { IBM_Plex_Sans, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import { Nav } from "../components/nav";
import { Footer } from "../components/footer";
import { Terminal } from "../components/terminal";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Luv | Software Engineer",
    template: "%s | Luv",
  },
  description:
    "Software Engineer exploring systems, security, and automation.",
  openGraph: {
    title: "Luv | Software Engineer",
    description:
      "Software Engineer exploring systems, security, and automation.",
    url: siteUrl,
    siteName: "Luv",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${ibmPlexSans.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <div className="min-h-screen flex flex-col">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Terminal />
      </body>
    </html>
  );
}
