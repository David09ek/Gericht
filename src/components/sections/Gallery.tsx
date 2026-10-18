import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryImages } from "@/data/gallery";
import styles from "./Gallery.module.css";

export function Gallery() {
  return (
    <section id="gallery" className="section" aria-labelledby="gallery-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <SectionHeading eyebrow="Instagram" title="Photo Gallery" id="gallery-title" />
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
          aria-label="Photo gallery, scrollable"
        >
          <ul className={styles.track}>
            {galleryImages.map((image) => (
              <li key={image.src} className={styles.slide}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 62rem) 12rem, 18.8125rem"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
