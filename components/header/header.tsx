import styles from "./header.module.scss";
import Image from "next/image";
import logo from "@images/logo.svg";
import logoText from "@images/logo-text.svg";

export default function Header({ isOrange }: { isOrange?: boolean }) {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={logo} width="56" height="56" alt="arrowRightGreen" />
        <Image src={logoText} height="56" alt="arrowRightGreen" />
      </div>
      <nav style={isOrange ? { color: "#d17340" } : {}}>
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
          <li>
            <a>Контакти</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
