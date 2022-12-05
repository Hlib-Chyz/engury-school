import Header from "@components/header/header";
import React from "react";
import arrowRightGreen from "@images/arrow-right-green.svg";
import arrowRightWhite from "@images/arrow-right-white.svg";
import palmChekIn from "@images/palm-chek-in.svg";
import Image from "next/image";
import styles from "./form.module.scss";
import Footer from "@components/footer/footer";
import Input from "@components/input/input";
import Radiobutton from "@components/radiobutton/radiobutton";
import Checkbox from "@components/checkbox/checkbox";

export default function Form() {
  return (
    <div className="container">
      <Header isOrange={true} />
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
            <Radiobutton />
            <label className={styles["languages-label"]}>Англійська мова</label>
          </div>
          <div>
            <Radiobutton />
            <label className={styles["languages-label"]}>Іспанська мова</label>
          </div>
        </div>
        <div className={styles.inputs}>
          <div>
            <Input placeholder="Ваше ім’я" />
            <Input placeholder="Ваше прізвище" />
          </div>
          <div>
            <Input placeholder="Email" />
            <Input placeholder="Ваш телефон" />
          </div>
        </div>
        <div className={styles.checkbox}>
          <Checkbox />
          <label className={styles["label-checkbox"]}>
            Я принимаю , обработку и хранение персональных данных
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
      <Footer />
    </div>
  );
}
