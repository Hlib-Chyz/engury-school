import Image from "next/image";
import styles from "./about-us.module.scss";
import proKangaroo from "@images/pro-kangaroo.svg";

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <div>
        <Image src={proKangaroo} width="462" height="450" alt="Pro Kangaroo" />
      </div>
      <section>
        <h3>
          <span>“Engury”</span> - школа <br></br> іноземної мови
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
