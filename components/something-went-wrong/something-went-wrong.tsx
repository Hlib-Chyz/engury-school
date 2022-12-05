import styles from "./something-went-wrong.module.scss";
import Modal from "@components/modal/modal";
import Image from "next/image";
import teenagerKangaroo from "@images/teenager-kangaroo.svg";
import arrowRightWhite from "@images/arrow-right-white.svg";

export default function SomethingWentWrongModal() {
  return (
    // TODO
    <Modal>
      <div className={styles.container}>
        <div>
          <h3>
            Щось пішло не <br></br> так !
          </h3>
          <button>
            <span>Спробувати іще раз</span>
            <Image src={arrowRightWhite} alt="Teenager Kangaroo" />
          </button>
        </div>
        <Image src={teenagerKangaroo} alt="Teenager Kangaroo" />
      </div>
    </Modal>
  );
}
