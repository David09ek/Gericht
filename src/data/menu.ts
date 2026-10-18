export interface MenuEntry {
  name: string;
  price: string;
  /** Origin and serving note, e.g. "AU | Bottle". */
  detail: string;
}

export const wineAndBeer: MenuEntry[] = [
  { name: "Chapel Hill Shiraz", price: "$56", detail: "AU | Bottle" },
  { name: "Catena Malbec", price: "$59", detail: "AR | Bottle" },
  { name: "La Vieille Rosé", price: "$44", detail: "FR | 750 ml" },
  { name: "Rhino Pale Ale", price: "$31", detail: "CA | 750 ml" },
  { name: "Irish Guinness", price: "$26", detail: "IE | 750 ml" },
];

export const cocktails: MenuEntry[] = [
  {
    name: "Aperol Spritz",
    price: "$28",
    detail: "Aperol | Villa Marchesi prosecco | soda | 30ml",
  },
  { name: "Dark 'N' Stormy", price: "$16", detail: "Dark rum | Ginger beer | Slice of lime." },
  { name: "Daiquiri", price: "$10", detail: "Rum | Citrus juice | Sugar" },
  { name: "Old Fashioned", price: "$31", detail: "Bourbon | Brown sugar | Angostura Bitters" },
  { name: "Negroni", price: "$26", detail: "Gin | Sweet Vermouth | Campari | Orange garnish" },
];
