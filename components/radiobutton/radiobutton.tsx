import { ReactNode } from "react";
import styles from "./radiobutton.module.scss";

export default function Radiobutton() {
  return (
    <label className={styles.radiobutton}>
      <input type="radio" />
    </label>
  );
}
