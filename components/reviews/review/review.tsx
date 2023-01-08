import React from "react";
import styles from "./review.module.scss";

export default function Review({
  review,
  index,
}: {
  review: {
    name: string;
    date: string;
    text: string;
  };
  index: number;
}) {
  return (
    <div style={{ margin: index % 2 === 0 ? "75px 0 30px" : "0 0 75px" }}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.image}>
            {/* <Image src="" width="90" height="90" alt="" /> */}
          </div>
          <div className={styles.info}>
            <div className={styles.name}>{review.name}</div>
            <div className={styles.date}>{review.date}</div>
          </div>
        </div>
        <div className={styles["wrapper-text"]}>
          <div className={styles.text}>{review.text}</div>
        </div>
      </div>
    </div>
  );
}
