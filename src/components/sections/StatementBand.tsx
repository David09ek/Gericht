import { SpoonDivider } from "@/components/ui/SpoonDivider";
import styles from "./StatementBand.module.css";

/**
 * Full-bleed band that previously held the dining-room photograph. It now
 * carries a typographic statement between two gold hairlines, keeping the
 * same pause in the page's rhythm.
 */
export function StatementBand() {
  return (
    <section className={styles.band} aria-labelledby="statement-title">
      <div className={`container ${styles.inner}`}>
        <SpoonDivider className={styles.spoon} />
        <p id="statement-title" className={styles.statement}>
          Every plate begins with fire, patience and a short list of very good things.
        </p>
        <p className={styles.attribution}>The Gerícht Kitchen</p>
      </div>
    </section>
  );
}
