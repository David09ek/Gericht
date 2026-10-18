import styles from "./Medal.module.css";

export function Medal({ numeral }: { numeral: string }) {
  return (
    <div className={styles.medal} aria-hidden="true">
      <span className={styles.numeral}>{numeral}</span>
    </div>
  );
}
