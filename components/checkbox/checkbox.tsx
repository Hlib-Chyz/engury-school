import styles from "./checkbox.module.scss";

export default function Checkbox() {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" />
    </label>
  );
}
