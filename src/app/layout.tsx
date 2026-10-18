import type { Metadata, Viewport } from "next";
import { Cormorant_Upright, Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import { site } from "@/data/site";
import "./globals.css";

/* Fonts are self-hosted and preloaded by next/font, which removes the
   three render-blocking stylesheet requests the original made to
   fonts.googleapis.com and fonts.cdnfonts.com. */

/* Only the weights the stylesheets actually reference are requested; the
   original loaded 5 Cormorant weights and 16 Open Sans faces. */
const cormorant = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  /* Italic is used once, for the chef's pull-quote. */
  style: ["normal", "italic"],
  variable: "--font-open-sans",
  display: "swap",
});

const bestermind = localFont({
  src: "../fonts/BestermindRegular.woff",
  variable: "--font-bestermind",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: ["fine dining", "restaurant", "cocktail bar", "wine", "Gericht"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    images: [{ url: "/images/hero-dish.webp", width: 900, height: 993, alt: `${site.name} signature dish` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/images/hero-dish.webp"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0c0b08",
  colorScheme: "dark",
};

/** Schema.org Restaurant markup, so search engines can surface hours and location. */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  description: site.description,
  url: site.url,
  image: `${site.url}/images/hero-dish.webp`,
  servesCuisine: "Fine Dining",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9 W 53rd St",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10019",
    addressCountry: "US",
  },
  telephone: "+1 212-344-1230",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "24:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "07:00",
      closes: "23:00",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${openSans.variable} ${bestermind.variable}`}
    >
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
