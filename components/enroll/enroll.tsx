import styles from "./enroll.module.scss";
import Image from "next/image";
import phone from "@images/phone.svg";

export default function Enroll() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p>Записуйся на консультацію та розпочнімо навчання просто зараз!</p>
        <button>Записатися</button>
      </div>
    </div>
  );
}
