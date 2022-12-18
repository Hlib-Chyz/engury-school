import { ChangeEvent } from "react";
import styles from "./input.module.scss";
export default function Input({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (val: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) {
  return (
    <input
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
      className={styles.input}
      placeholder={placeholder}
    />
  );
}
