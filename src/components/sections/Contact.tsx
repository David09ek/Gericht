import { ButtonLink } from "@/components/ui/Button";
import { PlateMotif } from "@/components/ui/PlateMotif";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contact, openingHours } from "@/data/site";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact" className="textured section" aria-labelledby="contact-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <SectionHeading eyebrow="Contact" title="Find Us" id="contact-title" />

          <address className={styles.address}>{contact.findUs}</address>

          <p className={styles.hoursLabel}>Opening Hours</p>
          <ul className={styles.hours}>
            {openingHours.findUs.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>

          <ButtonLink
            className={styles.cta}
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.findUs)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Us
          </ButtonLink>
        </div>

        <PlateMotif className={styles.figure} />
      </div>
    </section>
  );
}
