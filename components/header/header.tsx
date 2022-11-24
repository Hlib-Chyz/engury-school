import styles from "./header.module.scss";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h3>ENGORY</h3>
      </div>
      <nav>
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
