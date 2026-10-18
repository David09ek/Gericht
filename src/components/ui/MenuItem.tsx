import type { MenuEntry } from "@/data/menu";
import styles from "./MenuItem.module.css";

export function MenuItem({ name, price, detail }: MenuEntry) {
  return (
    <li className={styles.item}>
      <div className={styles.row}>
        <h4 className={styles.name}>{name}</h4>
        <span className={styles.rule} aria-hidden="true" />
        <p className={styles.price}>{price}</p>
      </div>
      <p className={styles.detail}>{detail}</p>
    </li>
  );
}
