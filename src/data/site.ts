/** Single source of truth for site-wide content and contact details. */

export const site = {
  name: "Gerícht",
  tagline: "The key to Fine dining",
  description:
    "Gerícht is a fine dining restaurant and bar serving a curated menu of wine, beer and craft cocktails. Chase the new flavour.",
  url: "https://gericht-jcbi.onrender.com",
} as const;

/** Header navigation. Each entry scrolls to a section on the page. */
export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Pages", href: "#about" },
  { label: "Contact Us", href: "#contact" },
  { label: "Blog", href: "#gallery" },
  { label: "Landing", href: "#menu" },
] as const;

export const contact = {
  /* The "Find Us" section and the footer carry different addresses in the
     original design; both are preserved as-is. */
  findUs: "Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG",
  footer: "9 W 53rd St, New York, NY 10019, USA",
  phones: ["+1 212-344-1230", "+1 212-555-1230"],
} as const;

export const openingHours = {
  findUs: ["Mon - Fri: 10:00 am - 02:00 am", "Sat - Sun: 10:00 am - 03:00 am"],
  footer: [
    { days: "Monday-Friday:", hours: "08:00 am - 12:00 am" },
    { days: "Saturday-Sunday:", hours: "07:00 am - 11:00 pm" },
  ],
} as const;

export const socials = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Instagram", href: "https://instagram.com" },
] as const;
