import styles from "./PlateMotif.module.css";

/**
 * The hero's focal ornament: concentric rings suggesting a plate setting,
 * drawn as vectors. Replaces the photographic dish that sat here.
 */
export function PlateMotif({ className }: { className?: string }) {
  return (
    <div className={[styles.wrap, className].filter(Boolean).join(" ")} aria-hidden="true">
      <span className={styles.frame} />
      <svg className={styles.rings} viewBox="0 0 400 400" fill="none">
        <circle cx="200" cy="200" r="196" stroke="var(--color-gold)" strokeOpacity="0.18" />
        <circle cx="200" cy="200" r="168" stroke="var(--color-gold)" strokeOpacity="0.45" />
        <circle cx="200" cy="200" r="132" stroke="var(--color-gold)" strokeOpacity="0.16" />
        <circle cx="200" cy="200" r="96" fill="var(--color-gold)" fillOpacity="0.05" />
        <circle cx="200" cy="200" r="96" stroke="var(--color-gold)" strokeOpacity="0.3" />

        {/* Two opposing arcs, thicker, to give the ring set a direction. */}
        <path
          d="M200 32 A168 168 0 0 1 368 200"
          stroke="var(--color-gold)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M200 368 A168 168 0 0 1 32 200"
          stroke="var(--color-gold)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="200" cy="200" r="5" fill="var(--color-gold)" />
      </svg>
    </div>
  );
}
