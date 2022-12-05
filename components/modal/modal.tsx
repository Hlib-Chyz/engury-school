import { ReactNode } from "react";
import styles from "./modal.module.scss";
import Image from "next/image";
import crossWhite from "@images/cross-white.svg";

export default function Modal({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>{children}</div>
        <button className={styles.cross}>
          <Image src={crossWhite} alt="Teenager Kangaroo" />
        </button>
      </div>
    </div>
  );
}
