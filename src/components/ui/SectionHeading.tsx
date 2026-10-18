import type { ElementType } from "react";
import { SpoonDivider } from "./SpoonDivider";
import styles from "./SectionHeading.module.css";

type Align = "start" | "center" | "end";
type Size = "md" | "lg";

interface SectionHeadingProps {
  /** The large gold headline. */
  title: string;
  /**
   * Small white label shown above the rule, e.g. "Awards & recognition".
   * When omitted the title sits above the rule instead — the arrangement the
   * About and Our History blocks use in the original design.
   */
  eyebrow?: string;
  align?: Align;
  /** "md" is the 2.5rem treatment, "lg" the 4rem one. */
  size?: Size;
  /** Heading level for the title. Defaults to h2. */
  as?: ElementType;
  id?: string;
  className?: string;
}

export function SectionHeading({
  title,
  eyebrow,
  align = "start",
  size = "lg",
  as: Title = "h2",
  id,
  className,
}: SectionHeadingProps) {
  const heading = (
    <Title id={id} className={`${styles.title} ${styles[size]}`}>
      {title}
    </Title>
  );

  return (
    <div className={[styles.heading, styles[align], className].filter(Boolean).join(" ")}>
      {eyebrow ? (
        <>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <SpoonDivider className={styles.spoon} />
          {heading}
        </>
      ) : (
        <>
          {heading}
          <SpoonDivider className={styles.spoon} />
        </>
      )}
    </div>
  );
}
