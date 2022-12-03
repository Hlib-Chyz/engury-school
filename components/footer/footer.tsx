import styles from "./footer.module.scss";
import Image from "next/image";
import phone from "@images/phone.svg";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>ENGORY</div>
      <div>
        <ul>
          <li>
            <a>Про нас</a>
          </li>
          <li>
            <a>Курси</a>
          </li>
          <li>
            <a>Викладачі</a>
          </li>
          <li>
            <a>Відгуки</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a>Записатися на урок</a>
          </li>
          <li>
            <a>Новини</a>
          </li>
          <li>
            <a>Акції</a>
          </li>
        </ul>
      </div>
      <div className={styles.phone}>
        <span>
          <Image src={phone} width="30" height="30" alt="Phone" />
        </span>
        <span className={styles["number-phone"]}>068 34 47 245</span>
      </div>
    </div>
  );
}
