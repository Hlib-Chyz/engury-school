import Image from "next/image";
import styles from "./about-us.module.scss";

export default function AboutUs() {
  return (
    <div className={styles["about-us"]}>
      <div>
        <Image
          src="/images/pro-kangaroo.svg"
          width="1"
          height="1"
          alt="Pro Kangaroo"
        />
      </div>
      <section>
        <h3>
          <span>“Engury”</span> - школа іноземної мови
        </h3>
        <p>
          Це сучасна онлайн школа вивчення іноземної мови, що допоможе Вам
          перейти на новий рівень володіння і спілкування англійською та
          іспанською мовами.
        </p>
      </section>
    </div>
  );
}
