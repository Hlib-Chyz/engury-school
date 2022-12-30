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
      <Slider
        infinite={false}
        speed={500}
        slidesToShow={3}
        slidesToScroll={3}
        rows={2}
        arrows={false}
        dots={true}
      >
        {reviews.map((review) => (
          <Review review={review} key={review.name} />
        ))}
      </Slider>
    </div>
  );
}
