export interface Award {
  /** Numeral carried by the medal, as in the original artwork. */
  numeral: string;
  title: string;
  description: string;
}

export const awards: Award[] = [
  { numeral: "2", title: "Bib Gourmond", description: "Lorem ipsum dolor sit amet, consectetur." },
  { numeral: "1", title: "Rising Star", description: "Lorem ipsum dolor sit amet, consectetur." },
  { numeral: "5", title: "AA Hospitality", description: "Lorem ipsum dolor sit amet, consectetur." },
  { numeral: "3", title: "AA Hospitality", description: "Lorem ipsum dolor sit amet, consectetur." },
];
