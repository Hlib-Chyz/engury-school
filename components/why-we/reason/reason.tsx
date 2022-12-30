import styles from "./reason.module.scss";
import Image from "next/image";

export default function Reason({
  reason,
}: {
  reason: { image: string; text: string };
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Image src={reason.image} alt="Phone" />
        <div className={styles.text}>{reason.text}</div>
      </div>
    </div>
  );
}
