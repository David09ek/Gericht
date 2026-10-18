import Image from "next/image";
import styles from "./VideoBand.module.css";

export function VideoBand() {
  return (
    <div className={styles.band}>
      <Image
        src="/images/video-still.webp"
        alt="The Gerícht dining room, set with tables beneath warm pendant lighting"
        width={1897}
        height={763}
        sizes="100vw"
      />
    </div>
  );
}
