import Image from "next/image";
import type { Award } from "@/data/awards";
import styles from "./AwardCard.module.css";

export function AwardCard({ src, title, description }: Award) {
  return (
    <li className={styles.card}>
      <Image className={styles.icon} src={src} alt="" width={158} height={158} />
      <div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
}
