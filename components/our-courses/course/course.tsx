import styles from "./course.module.scss";

export default function Course({
  heading,
  level,
  price1,
  price2,
  whatHave,
}: {
  heading: string;
  level: Levels;
  price1: string;
  price2: string;
  whatHave: string[];
}) {
  return (
    <div className={styles.container}>
      <h4>{heading}</h4>
      <div className={styles.level}>
        <label>Рівень</label>
        <div className={styles["line-of-level"]}>
          <div className={styles[`line-${level}`]}></div>
          <div className={styles.levels}>
            <div className={styles.a1}>А1 - А2</div>
            {level > 0 ? <div className={styles.b1}>B1</div> : null}
            {level > 1 ? <div className={styles.b2}>B2</div> : null}
          </div>
        </div>
      </div>
      <div className={styles.price}>
        <div>{price1}</div>
        <div>{price2}</div>
      </div>
      <ul className={styles["what-have"]}>
        {whatHave.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button>Записатися на курс</button>
    </div>
  );
}

export const enum Levels {
  A1A2,
  B1,
  B2,
}
