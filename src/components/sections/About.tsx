import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./About.module.css";

export function About() {
  return (
    <section id="about" className="textured section" aria-labelledby="about-title">
      <div className={`container ${styles.inner}`}>
        <div className={`${styles.column} ${styles.left}`}>
          <SectionHeading title="About Us" align="end" size="md" id="about-title" />
          <p className={styles.body}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing
            ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
          </p>
          <ButtonLink className={styles.cta} href="#menu">
            Know More
          </ButtonLink>
        </div>

        <div className={styles.ornament} aria-hidden="true">
          <Image
            className={styles.watermark}
            src="/icons/g-watermark.svg"
            alt=""
            width={391}
            height={415}
          />
          <Image
            className={styles.knife}
            src="/images/knife.webp"
            alt=""
            width={168}
            height={1406}
          />
        </div>

        <div className={`${styles.column} ${styles.right}`}>
          <SectionHeading title="Our History" align="start" size="md" />
          <p className={styles.body}>
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat
            morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.
          </p>
          <ButtonLink className={styles.cta} href="#contact">
            Know More
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
