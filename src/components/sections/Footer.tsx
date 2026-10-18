import { BackToTop } from "@/components/ui/BackToTop";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { SpoonDivider } from "@/components/ui/SpoonDivider";
import { Newsletter } from "./Newsletter";
import { contact, openingHours, site } from "@/data/site";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={`textured ${styles.footer}`}>
      <h2 className="visually-hidden">Site footer</h2>

      <div className="container">
        <div className={styles.newsletterWrap}>
          <Newsletter />
        </div>

        <div className={styles.topRow}>
          <BackToTop />
        </div>

        <div className={styles.columns}>
          <section>
            <h3 className={styles.columnTitle}>Contact Us</h3>
            <address className={`${styles.text} ${styles.address}`}>{contact.footer}</address>
            <ul className={styles.list}>
              {contact.phones.map((phone) => (
                <li key={phone}>
                  <a className={styles.phone} href={`tel:${phone.replace(/[^+\d]/g, "")}`}>
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.brand}>
            <p className={styles.wordmark}>{site.name}</p>
            <p className={styles.quote}>
              &ldquo;The best way to find yourself is to lose yourself in the service of
              others.&rdquo;
            </p>
            <SpoonDivider className={styles.spoon} />
            <SocialLinks />
          </section>

          <section>
            <h3 className={styles.columnTitle}>Working Hours</h3>
            <ul className={styles.list}>
              {openingHours.footer.map(({ days, hours }) => (
                <li key={days}>
                  {days}
                  <br />
                  {hours}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <p className={styles.copyright}>
          {new Date().getFullYear()} {site.name}. All Rights reserved.
        </p>
      </div>
    </footer>
  );
}
