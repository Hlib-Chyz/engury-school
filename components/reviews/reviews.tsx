import Review from "@components/reviews/review/review";
import React from "react";
import Slider from "react-slick";
import styles from "./reviews.module.scss";

export default function Reviews() {
  const reviews = [
    {
      name: "Karina",
      date: "20 серпня",
      text: "Очень понравился базовый курс !😍🤩👍",
    },
    {
      name: "sas",
      date: "20 серпня",
      text: "Очень понравился базовый курс !😍🤩👍",
    },
    {
      name: "Кирил",
      date: "01 червня",
      text: "Хорошие преподаватели !😎Невероятный опыт изучения языка!💪",
    },
    {
      name: "Олег",
      date: "16 вересня",
      text: "Неплохой курс!👍",
    },
    {
      name: "Francis",
      date: "24 червня",
      text: "A very interesting school. He worked there as a native speaker. I love it very asfnjhgchjhjgvfcvbhjnkhgjvcfhvbnjkhbv bbnhjkbgnvmuch!",
    },
    {
      name: "София",
      date: "14 червня",
      text: "Невероятно приятная атмосфера !Школа - супер😍🤩",
    },
  ];

  return (
    <div className={styles.container}>
      <h3>Відгуки учнів</h3>
      <div className={styles.reviews}>
        <Slider
          infinite={false}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          dots={true}
          arrows={false}
          customPaging={(i) => <div className={styles.asd}>asd</div>}
        >
          <div>
            <div className={styles.review}>
              {reviews.map((review) => (
                <Review review={review} key={review.name} />
              ))}
            </div>
          </div>
          <div>
            <div className={styles.review}>
              {reviews.map((review) => (
                <Review review={review} key={review.name} />
              ))}
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
