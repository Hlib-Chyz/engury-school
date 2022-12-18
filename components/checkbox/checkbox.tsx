import styles from "./checkbox.module.scss";

export default function Checkbox({
  checked,
  setChecked,
}: {
  checked: boolean;
  setChecked: (value: boolean) => void;
}) {
  return (
    <label className={styles.checkbox} onClick={() => setChecked(!checked)}>
      <input checked={checked} onChange={() => {}} type="checkbox" />
    </label>
  );
}
