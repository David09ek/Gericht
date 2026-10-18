import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { SpoonDivider } from "@/components/ui/SpoonDivider";
import styles from "./Hero.module.css";

const slides = ["01", "02", "03", "04"];

export function Hero() {
  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-title">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Chase The New Flavour</p>
          <SpoonDivider className={styles.spoon} />
          <h1 id="hero-title" className={styles.title}>
            The key to Fine dining
          </h1>
          <p className={styles.body}>
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi
            facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus
          </p>
          <ButtonLink className={styles.cta} href="#menu">
            Explore Menu
          </ButtonLink>
        </div>

        <div className={styles.figure}>
          {/* The only above-the-fold image, so it is given priority and a
              matching `sizes` hint rather than being lazy-loaded. */}
          <Image
            src="/images/hero-dish.webp"
            alt="Pan-seared fish fillets plated with lemon wedges and fresh herbs"
            width={900}
            height={993}
            sizes="(max-width: 48rem) 22rem, 25rem"
            priority
          />
        </div>
      </div>

      <div className={styles.decorations}>
        <p className={styles.hashtags} aria-hidden="true">
          <span>#Bar</span>
          <span>#Gericht</span>
        </p>

        <div className={styles.slider} aria-hidden="true">
          <span>{slides[0]}</span>
          <span className={styles.sliderRule} />
          {slides.slice(1).map((slide) => (
            <span key={slide} className={styles.slideInactive}>
              {slide}
            </span>
          ))}
        </div>

        <a className={styles.scroll} href="#about">
          <span className={styles.scrollLine} aria-hidden="true" />
          <span className={styles.scrollLabel}>Scroll</span>
        </a>
      </div>
    </section>
  );
}
