import styles from "./enroll.module.scss";
import Image from "next/image";
import arrowRightGreen from "@images/arrow-right-green.svg";
import React from "react";
import Link from "next/link";

export default function Enroll() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p>Записуйся на консультацію та розпочнімо навчання просто зараз!</p>
        <Link href="/form">
          <button>
            <span>Записатися</span>
            <Image
              src={arrowRightGreen}
              width="24"
              height="38"
              alt="arrowRightGreen"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}
