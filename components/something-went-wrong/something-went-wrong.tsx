import styles from "./something-went-wrong.module.scss";
import Modal from "@components/modal/modal";
import Image from "next/image";
import teenagerKangaroo from "@images/teenager-kangaroo.svg";
import arrowRightWhite from "@images/arrow-right-white.svg";

export default function SomethingWentWrongModal() {
  return (
    <Modal>
      <div className={styles.container}>
        <div>
          <h3>
            Щось пішло <br></br> не так !
          </h3>
          <button>
            <span>Спробувати іще раз</span>
            <Image
              src={arrowRightWhite}
              alt="Teenager Kangaroo"
              height="40"
              width="25"
            />
          </button>
        </div>
        <Image
          src={teenagerKangaroo}
          alt="Teenager Kangaroo"
          height="578"
          width="420"
        />
      </div>
    </Modal>
  );
}
