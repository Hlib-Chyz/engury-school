import styles from "./footer.module.scss";
import Image from "next/image";
import phone from "@images/phone.svg";

export default function Footer() {
  return (
    <div className={styles.wrapepr}>
      <div className={styles.container}>
        <div className={styles.logo}>ENGORY</div>
        <div>
          <ul>
            <li>Про нас</li>
            <li>Курси</li>
            <li>Викладачі</li>
            <li>Відгуки</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Записатися на урок</li>
            <li>Новини</li>
            <li>Акції</li>
          </ul>
        </div>
        <div className={styles.phone}>
          <span>
            <Image src={phone} width="30" height="30" alt="Phone" />
          </span>
          <span className={styles["number-phone"]}>068 34 47 245</span>
        </div>
      </div>
    </div>
  );
}
