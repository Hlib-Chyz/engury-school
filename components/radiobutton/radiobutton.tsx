import { Dispatch, SetStateAction } from "react";
import styles from "./radiobutton.module.scss";

export default function Radiobutton({
  isActive,
  setActive,
}: {
  isActive: boolean;
  setActive: () => void;
}) {
  return (
    <label className={styles.radiobutton} onClick={() => setActive()}>
      <input type="radio" checked={isActive} onChange={() => {}} />
    </label>
  );
}
