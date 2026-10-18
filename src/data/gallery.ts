export interface Dish {
  name: string;
  /** Short list of the defining components. */
  notes: string;
}

/* The gallery band previously held four photographs. Without them the section
   leads on the dishes themselves, set in gold-ruled cards. */
export const signatureDishes: Dish[] = [
  { name: "Seared Scallop", notes: "Citrus · Brown butter · Sea herbs" },
  { name: "Dry-Aged Duck", notes: "Cherry · Juniper · Burnt honey" },
  { name: "Hand-Cut Tagliolini", notes: "Truffle · Aged parmesan" },
  { name: "Chocolate Délice", notes: "Sea salt · Olive oil · Cocoa nib" },
];
