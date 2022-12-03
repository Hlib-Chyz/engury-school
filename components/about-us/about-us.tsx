import Image from "next/image";
import styles from "./about-us.module.scss";
import proKangarooWithBook from "@images/pro-kangaroo-with-book.svg";

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <div>
        <Image
          src={proKangarooWithBook}
          width="462"
          height="450"
          alt="Pro Kangaroo"
        />
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
