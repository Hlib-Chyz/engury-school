import teenagerKangaroo from "@images/teenager-kangaroo.svg";
import arrowRightGreen from "@images/arrow-right-green.svg";
import Image from "next/image";
import React from "react";
import styles from "./subheader.module.scss";

export default function Subheader() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>
          Вивчайте іноземну <br></br> мову з будь -якої <br></br> точки світу
        </h1>
        <button>
          <span>Записатися на курс</span>
          <Image
            src={arrowRightGreen}
            width="24"
            height="38"
            alt="arrowRightGreen"
          />
        </button>
      </div>
      <div>
        <Image
          src={teenagerKangaroo}
          width="471"
          height="606"
          alt="Teenager Kangaroo"
        />
      </div>
    </div>
  );
}
