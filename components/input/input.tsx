import styles from "./input.module.scss";
export default function Input({ placeholder }: { placeholder: string }) {
  return <input className={styles.input} placeholder={placeholder} />;
}
