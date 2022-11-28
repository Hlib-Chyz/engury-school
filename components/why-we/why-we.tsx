import styles from "./why-we.module.scss";
import bestPrograms from "@images/best-programs.svg";
import constantCommunication from "@images/constant-communication.svg";
import bestTeachers from "@images/best-teachers.svg";
import modernApproach from "@images/modern-approach.svg";
import flexibleSchedule from "@images/flexible-schedule.svg";
import fastResults from "@images/fast-results.svg";
import Reason from "./reason/reason";

export default function WhyWe() {
  const whyWe: { image: string; text: string }[] = [
    {
      image: bestPrograms,
      text: "Найкращі програми",
    },
    {
      image: constantCommunication,
      text: "Постійний зв’язок",
    },
    {
      image: bestTeachers,
      text: "Найкращі викладачі",
    },
    {
      image: modernApproach,
      text: "Сучасний підхід",
    },
    {
      image: flexibleSchedule,
      text: "Гнучкий графік",
    },
    {
      image: fastResults,
      text: "Швидкі результати",
    },
  ];
  return (
    <div className={styles.container}>
      <h3>
        <span>Why</span> обирають саме нас?
      </h3>
      <div className={styles.reasons}>
        {whyWe.map((reason: { image: string; text: string }) => (
          <Reason reason={reason} key={reason.text} />
        ))}
      </div>
    </div>
  );
}
