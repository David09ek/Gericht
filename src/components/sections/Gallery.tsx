import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpoonDivider } from "@/components/ui/SpoonDivider";
import { signatureDishes } from "@/data/gallery";
import styles from "./Gallery.module.css";

export function Gallery() {
  return (
    <section id="gallery" className="section" aria-labelledby="gallery-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <SectionHeading eyebrow="The Kitchen" title="Signature Plates" id="gallery-title" />
          <p className={styles.body}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum
            turpis elit elit scelerisque egestas mu.
          </p>
          <Button className={styles.cta}>View More</Button>
        </div>

        {/* The scrollable region and the list are separate elements: putting a
            role on the <ul> itself would strip its implicit list semantics. */}
        <div
          className={styles.scroller}
          tabIndex={0}
          role="region"
          aria-label="Signature plates, scrollable"
        >
          <ul className={styles.track}>
            {signatureDishes.map((dish) => (
              <li key={dish.name} className={styles.slide}>
                <span className={styles.slideIndex} aria-hidden="true" />
                <h3 className={styles.slideName}>{dish.name}</h3>
                <SpoonDivider className={styles.slideSpoon} />
                <p className={styles.slideNotes}>{dish.notes}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
