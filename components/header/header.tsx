import styles from "./header.module.scss";

export default function Header({ isOrange }: { isOrange?: boolean }) {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h3 style={isOrange ? { color: "#d17340" } : {}}>ENGORY</h3>
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
