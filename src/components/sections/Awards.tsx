import Image from "next/image";
import { AwardCard } from "@/components/ui/AwardCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { awards } from "@/data/awards";
import styles from "./Awards.module.css";

export function Awards() {
  return (
    <section className="textured section" aria-labelledby="awards-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <Image
            className={styles.emblem}
            src="/images/double-spoon.webp"
            alt=""
            width={292}
            height={292}
          />

          <SectionHeading
            eyebrow="Awards & recognition"
            title="Our Laurels"
            id="awards-title"
          />

          <ul className={styles.list}>
            {awards.map((award, index) => (
              <AwardCard key={`${award.title}-${index}`} {...award} />
            ))}
          </ul>
        </div>

        <div className={styles.figure}>
          <Image
            src="/images/awards-side.webp"
            alt="Grilled meat and vegetables plated with fresh garnish"
            width={1024}
            height={1275}
            sizes="(max-width: 62rem) 18rem, 23.875rem"
          />
        </div>
      </div>
    </section>
  );
}
