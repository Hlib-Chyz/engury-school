import React from "react";
import styles from "./our-teachers.module.scss";
import Image from "next/image";
import quotes from "@images/quotes.svg";
import darcy from "@images/darcy.svg";
import Slider from "react-slick";

export default function OurTeachers() {
  return (
    <div className={styles.container}>
      <h3>Наші викладачі</h3>
      <div className={styles.content}>
        <Slider
          infinite={false}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
        >
          <div className={styles.teacher}>
            <section className={styles.about}>
              <h4>Качуріна Марія</h4>
              <h5>Викладач розмовної англійської мови</h5>
              <div className={styles.text}>
                <Image
                  className={styles["quotes-left"]}
                  src={quotes}
                  alt="Pro Kangaroo"
                />
                <div className={styles["teacher-photo"]}>
                  <Image src={darcy} alt="Pro Kangaroo" />
                </div>
                <p>
                  Я викладач з 10-ти річним досвідом роботи . Стосовно
                  особистісного досвіду – я навчалась в університеті
                  викладацької діяльності у Великій Британії, де ідеально
                  вдосконалила свою розмовну та професійну англійську. Вже
                  навчила більше 15000 студентів.
                </p>
                <Image
                  className={styles["quotes-right"]}
                  src={quotes}
                  alt="Pro Kangaroo"
                />
              </div>
            </section>
            <div className={styles.image}>
              <Image src={darcy} alt="Pro Kangaroo" />
              <div className={styles.highlight}>
                Розкриє навіть найсором’язливіших студентів
              </div>
            </div>
          </div>
          <div className={styles.teacher}>
            <section className={styles.about}>
              <h4>Качуріна Марія</h4>
              <h5>Викладач розмовної англійської мови</h5>
              <div className={styles.text}>
                <Image
                  className={styles["quotes-left"]}
                  src={quotes}
                  alt="Pro Kangaroo"
                />
                <div className={styles["teacher-photo"]}>
                  <Image src={darcy} alt="Pro Kangaroo" />
                </div>
                <p>
                  Я викладач з 10-ти річним досвідом роботи . Стосовно
                  особистісного досвіду – я навчалась в університеті
                  викладацької діяльності у Великій Британії, де ідеально
                  вдосконалила свою розмовну та професійну англійську. Вже
                  навчила більше 15000 студентів.
                </p>
                <Image
                  className={styles["quotes-right"]}
                  src={quotes}
                  alt="Pro Kangaroo"
                />
              </div>
            </section>
            <div className={styles.image}>
              <Image src={darcy} alt="Pro Kangaroo" />
              <div className={styles.highlight}>
                Розкриє навіть найсором’язливіших студентів
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
