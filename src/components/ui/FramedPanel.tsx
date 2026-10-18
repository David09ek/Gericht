import { SpoonDivider } from "./SpoonDivider";
import styles from "./FramedPanel.module.css";

interface FramedPanelProps {
  /** Large display character or short mark shown inside the frame. */
  monogram: string;
  /** Small letter-spaced line beneath it. */
  caption?: string;
  className?: string;
}

export function FramedPanel({ monogram, caption, className }: FramedPanelProps) {
  return (
    <div className={[styles.panel, className].filter(Boolean).join(" ")} aria-hidden="true">
      <div className={styles.content}>
        <p className={styles.monogram}>{monogram}</p>
        <SpoonDivider className={styles.spoon} />
        {caption ? <p className={styles.caption}>{caption}</p> : null}
      </div>
    </div>
  );
}
