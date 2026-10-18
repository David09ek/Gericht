import { AwardCard } from "@/components/ui/AwardCard";
import { CrossedSpoons } from "@/components/ui/CrossedSpoons";
import { FramedPanel } from "@/components/ui/FramedPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { awards } from "@/data/awards";
import styles from "./Awards.module.css";

export function Awards() {
  return (
    <section className="textured section" aria-labelledby="awards-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <CrossedSpoons className={styles.emblem} />

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

        <FramedPanel className={styles.figure} monogram="G" caption="Est. 2021" />
      </div>
    </section>
  );
}
