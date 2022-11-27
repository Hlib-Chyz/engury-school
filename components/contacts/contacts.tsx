import styles from "./contacts.module.scss";
import Image from "next/image";
import phone from "@images/phone.svg";
import email from "@images/email.svg";
import instagram from "@images/instagram.svg";
import linkedin from "@images/linkedin.svg";

export default function Contacts() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h3>Контакти</h3>
        <div>
          <ul>
            <li>
              <span>
                <Image src={phone} width="60" height="60" alt="Phone" />
              </span>
              <span className={styles.text}>068 34 47 245</span>
            </li>
            <li>
              <span>
                <Image src={email} width="60" height="60" alt="Phone" />
              </span>
              <span className={styles.text}>enguryschool@gmail.com</span>
            </li>
            <li>
              <span>
                <Image src={instagram} width="60" height="60" alt="Phone" />
              </span>
              <span className={styles.text}>Engury_online_school</span>
            </li>
            <li>
              <span>
                <Image src={linkedin} width="60" height="60" alt="Phone" />
              </span>
              <span className={styles.text}>
                Engury_online_school.linkidin.com
              </span>
            </li>
          </ul>
        </div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}
