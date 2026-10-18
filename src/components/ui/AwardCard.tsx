import type { Award } from "@/data/awards";
import { Medal } from "./Medal";
import styles from "./AwardCard.module.css";

export function AwardCard({ numeral, title, description }: Award) {
  return (
    <li className={styles.card}>
      <Medal numeral={numeral} />
      <div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
}
