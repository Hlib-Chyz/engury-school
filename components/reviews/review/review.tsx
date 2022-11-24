import React from "react";
import styles from "./review.module.scss";
import Image from "next/image";

export default function Review({
  review,
}: {
  review: {
    name: string;
    date: string;
    text: string;
  };
}) {
  return (
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
      <div className={styles.text}>{review.text}</div>
    </div>
  );
}
