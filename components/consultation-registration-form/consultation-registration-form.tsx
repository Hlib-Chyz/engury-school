import React, { ChangeEvent, useState } from "react";
import arrowRightGreen from "@images/arrow-right-green.svg";
import arrowRightWhite from "@images/arrow-right-white.svg";
import palmChekIn from "@images/palm-chek-in.svg";
import Image from "next/image";
import styles from "./consultation-registration-form.module.scss";
import Input from "@components/input/input";
import Radiobutton from "@components/radiobutton/radiobutton";
import Checkbox from "@components/checkbox/checkbox";

export const enum Languages {
  Eng = "English",
  Span = "Spanish",
}

export default function ConsultationRegistrationForm() {
  const [language, setLanguage] = useState<Languages>(Languages.Eng);
  const [isAccept, setAccept] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [validName, setValidName] = useState<boolean>(true);

  const nameHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
    setValidName(Boolean(e.target.value));
  };

  return (
    <div className={styles.container}>
      <Image
        className={styles.palm}
        src={palmChekIn}
        width="800"
        height="805"
        alt="arrowRightGreen"
      />
      <div className={styles["bread-crumbs"]}>
        <span>Головна</span>
        <Image
          src={arrowRightGreen}
          width="10"
          height="14"
          alt="arrowRightGreen"
        />
        <span className={styles["opacity-text"]}>Записатись на курс</span>
      </div>
      <h4>Записатися на онлайн курс з іноземної мови! </h4>
      <div className={styles.languages}>
        <div>
          <Radiobutton
            isActive={language === Languages.Eng}
            setActive={() => setLanguage(Languages.Eng)}
          />
          <label
            onClick={() => setLanguage(Languages.Eng)}
            className={styles["languages-label"]}
          >
            Англійська мова
          </label>
        </div>
        <div>
          <Radiobutton
            isActive={language === Languages.Span}
            setActive={() => setLanguage(Languages.Span)}
          />
          <label
            onClick={() => setLanguage(Languages.Span)}
            className={styles["languages-label"]}
          >
            Іспанська мова
          </label>
        </div>
      </div>
      <div className={styles.inputs}>
        <div>
          <Input value={name} onChange={nameHandler} placeholder="Ваше ім’я" />
          <Input placeholder="Ваше прізвище" />
        </div>
        <div>
          <Input placeholder="Email" />
          <Input placeholder="Ваш телефон" />
        </div>
      </div>
      <div className={styles.checkbox}>
        <Checkbox checked={isAccept} setChecked={setAccept} />
        <label
          className={styles["label-checkbox"]}
          onClick={() => setAccept(!isAccept)}
        >
          Я принимаю, обработку и хранение персональных данных
        </label>
      </div>
      <button>
        <span>Записатися на курс</span>
        <Image
          src={arrowRightWhite}
          width="25"
          height="40"
          alt="arrowRightGreen"
        />
      </button>
    </div>
  );
}
