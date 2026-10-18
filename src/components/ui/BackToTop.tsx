"use client";

import styles from "./BackToTop.module.css";

export function BackToTop({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={[styles.backToTop, className].filter(Boolean).join(" ")}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <span className={styles.line} aria-hidden="true" />
      Top
    </button>
  );
}
