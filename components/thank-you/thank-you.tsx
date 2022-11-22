import styles from "./thank-you.module.scss";
import Modal from "@components/modal/modal";
import Button from "@components/button/button";
import Image from "next/image";
import teenagerKangaroo from "@images/teenager-kangaroo.svg";
import arrowRightWhite from "@images/arrow-right-white.svg";

export default function ThankYouModal() {
  return (
    <Modal>
      <div className={styles.container}>
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
