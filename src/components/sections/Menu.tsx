import { Button } from "@/components/ui/Button";
import { MenuItem } from "@/components/ui/MenuItem";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cocktails, wineAndBeer } from "@/data/menu";
import styles from "./Menu.module.css";

export function Menu() {
  return (
    <section id="menu" className="section" aria-labelledby="menu-title">
      <div className="container">
        <SectionHeading
          className={styles.heading}
          eyebrow="Menu that fits you palatte"
          title="Today's Special"
          align="center"
          size="md"
          id="menu-title"
        />

        <div className={styles.layout}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Wine &amp; Beer</h3>
            <ul className={styles.list}>
              {wineAndBeer.map((entry) => (
                <MenuItem key={entry.name} {...entry} />
              ))}
            </ul>
          </div>

          {/* The cocktail photograph is replaced by a vertical rule carrying
              the wordmark, which keeps the two columns visually separated. */}
          <div className={styles.divider} aria-hidden="true">
            <span className={styles.dividerLine} />
            <span className={styles.dividerMark}>Gerícht</span>
            <span className={styles.dividerLine} />
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Cocktails</h3>
            <ul className={styles.list}>
              {cocktails.map((entry) => (
                <MenuItem key={entry.name} {...entry} />
              ))}
            </ul>
          </div>
        </div>

        <Button className={styles.cta}>View More</Button>
      </div>
    </section>
  );
}
