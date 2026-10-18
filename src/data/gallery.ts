export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/* Alt text is descriptive here; the original markup shipped every one of these
   with an empty alt attribute. */
export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery-1.webp",
    alt: "Plated pasta dish topped with soft-boiled egg halves and fresh herbs",
    width: 309,
    height: 455,
  },
  {
    src: "/images/gallery-2.webp",
    alt: "Bartender pouring a cocktail behind the dimly lit bar",
    width: 309,
    height: 457,
  },
  {
    src: "/images/gallery-3.webp",
    alt: "Creamy soup garnished with a swirl of oil and toasted seeds",
    width: 309,
    height: 455,
  },
  {
    src: "/images/gallery-4.webp",
    alt: "Bowl of golden squash soup finished with cream and chives",
    width: 266,
    height: 455,
  },
];
