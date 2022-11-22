import styles from "./something-went-wrong.module.scss";
import Modal from "@components/modal/modal";
import Button from "@components/button/button";
import Image from "next/image";
import teenagerKangaroo from "@images/teenager-kangaroo.svg";
import arrowRightWhite from "@images/arrow-right-white.svg";

export default function SomethingWentWrongModal() {
  return (
    <Modal>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>
            Щось пішло <br></br> не так !
          </h2>
          <Button>
            <div className={styles["button-content"]}>
              <span>Спробувати іще раз</span>
              <Image
                src={arrowRightWhite}
                width="24"
                height="38"
                alt="Arrow to right with white color"
              />
            </div>
          </Button>
        </div>
        <div className={styles["image"]}>
          <Image
            src={teenagerKangaroo}
            alt="Teenager Kangaroo"
            className={styles["teenager-kangaroo"]}
          />
        </div>
      </div>
    </Modal>
  );
}
