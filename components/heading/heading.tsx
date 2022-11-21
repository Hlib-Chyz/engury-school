import styles from "./heading.module.scss";
export default function Heading({
  highlightedText,
  otherText,
}: {
  highlightedText?: string;
  otherText?: string;
}) {
  return (
    <h3>
      {highlightedText ? (
        <span className={styles["highlighted-text"]}>{highlightedText}</span>
      ) : (
        ""
      )}
      {otherText ? (
        <span className={styles["other-text"]}>{otherText}</span>
      ) : (
        ""
      )}
    </h3>
  );
}
