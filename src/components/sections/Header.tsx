"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { navLinks } from "@/data/site";
import styles from "./Header.module.css";

export function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  /* Close the drawer on Escape and return focus to the button that opened it,
     and stop the page behind the drawer from scrolling while it is open. */
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const actions = (
    <>
      <a className={styles.actionLink} href="#newsletter">
        Login/Registration
      </a>
      <span className={styles.divider} aria-hidden="true" />
      <a className={styles.actionLink} href="#contact">
        Book Table
      </a>
    </>
  );

  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#top" aria-label="Gerícht — home">
        <Image
          src="/icons/logo.svg"
          alt="Gerícht"
          width={199}
          height={57}
          priority
        />
      </a>

      <nav
        id="primary-navigation"
        className={`${styles.nav} ${open ? styles.navOpen : ""}`}
        aria-label="Primary"
      >
        <ul className={styles.navList}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a className={styles.navLink} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.drawerActions}>{actions}</div>
      </nav>

      <div className={styles.actions}>{actions}</div>

      <button
        ref={toggleRef}
        type="button"
        className={`${styles.toggle} ${open ? styles.toggleOpen : ""}`}
        aria-expanded={open}
        aria-controls="primary-navigation"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
