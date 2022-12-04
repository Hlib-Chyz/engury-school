import styles from "./thank-you.module.scss";
import Modal from "@components/modal/modal";
import Image from "next/image";
import teenagerKangarooWithHearts from "@images/teenager-kangaroo-with-hearts.svg";

export default function ThankYouModal() {
  return (
    <Modal>
      <div className={styles.container}>
        <Image
          src={teenagerKangarooWithHearts}
          alt="Teenager Kangaroo"
          className={styles["teenager-kangaroo"]}
        />
        <section>
          <h3>
            Дякуємо за <br></br> ваш запит!
          </h3>
          <p>
            Наш менеджер зв’яжеться <br></br> з вами протягом 24 годин
          </p>
        </section>
      </div>
    </Modal>
  );
}
