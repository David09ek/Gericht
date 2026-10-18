"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./Newsletter.module.css";

type Status = { type: "idle" | "success" | "error"; message: string };

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });

  /* There is no subscription backend behind this form — as in the original
     site. It validates and acknowledges locally so the control is not simply
     inert; swap this for a real POST when an endpoint exists. */
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    setStatus({ type: "success", message: "Thank you — you're on the list." });
    setEmail("");
  }

  return (
    <section id="newsletter" className={styles.newsletter} aria-labelledby="newsletter-title">
      <SectionHeading
        className={styles.heading}
        eyebrow="NewsLetter"
        title="Subscribe to Our Newsletter"
        align="center"
        size="md"
        id="newsletter-title"
      />

      <p className={styles.lead}>And never miss latest Updates!</p>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        {/* The original input had no label of any kind. */}
        <label className="visually-hidden" htmlFor="newsletter-email">
          Email Address
        </label>
        <input
          id="newsletter-email"
          className={styles.input}
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Email Address"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status.type !== "idle") setStatus({ type: "idle", message: "" });
          }}
          aria-describedby="newsletter-status"
          aria-invalid={status.type === "error"}
          required
        />
        <Button type="submit">Subscribe</Button>
      </form>

      <p
        id="newsletter-status"
        role="status"
        aria-live="polite"
        className={`${styles.status} ${status.type === "error" ? styles.error : ""}`}
      >
        {status.message}
      </p>
    </section>
  );
}
