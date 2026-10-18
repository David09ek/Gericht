import styles from "./CrossedSpoons.module.css";
import { SpoonDivider } from "./SpoonDivider";

/**
 * Small crossed-spoons emblem above the Laurels heading, built from two
 * copies of the existing spoon rule inside a ring. Replaces double-spoon.webp.
 */
export function CrossedSpoons({ className }: { className?: string }) {
  return (
    <div className={[styles.emblem, className].filter(Boolean).join(" ")} aria-hidden="true">
      <SpoonDivider className={`${styles.spoon} ${styles.one}`} />
      <SpoonDivider className={`${styles.spoon} ${styles.two}`} />
    </div>
  );
}
