import Course, { Levels } from "@components/our-courses/course/course";
import React from "react";
import styles from "./our-courses.module.scss";
import Image from "next/image";
import youngKangarro from "@images/young-kangarro.svg";
import teenagerKangaroo from "@images/teenager-kangaroo.svg";
import proKangarro from "@images/pro-kangaroo.svg";
import palmOurCourse1 from "@images/palm-our-course-1.svg";
import palmOurCourse2 from "@images/palm-our-course-2.svg";

export default function OurCourses() {
  return (
    <div className={styles.container}>
      <h3>Наші курси</h3>
      <div className={styles.courses}>
        <div className={styles["course-1"]}>
          <Course
            heading="Light"
            level={Levels.A1A2}
            price1="1200 /2000 uan - 55 min"
            price2="1700 /2900 uan - 55 min"
            whatHave={[
              "4 lessons / month",
              "1 speaking club",
              "materials online",
              "level check",
            ]}
          />
          <Image
            src={youngKangarro}
            width="351"
            height="386"
            alt="Pro Kangaroo"
          />
        </div>
        <div className={styles["course-2"]}>
          <Image
            src={teenagerKangaroo}
            width="394"
            height="635"
            alt="Pro Kangaroo"
          />
          <Course
            heading="Progressive"
            level={Levels.B1}
            price1="2200 /3800 uan - 55 min"
            price2="3200 /5600 uan - 55 min"
            whatHave={[
              "8 lessons / month",
              "1 speaking club",
              "materials online",
              "level check",
            ]}
          />
        </div>
        <div className={styles["course-3"]}>
          <Course
            heading="PRO"
            level={Levels.B2}
            price1="3200 /5600 uan - 55 min"
            price2="4700 /8300 uan - 55 min"
            whatHave={[
              "12 lessons / month",
              "1 speaking club",
              "materials patent",
              "level check",
              "extra book free",
            ]}
          />
          <Image
            src={proKangarro}
            width="476"
            height="451"
            alt="Pro Kangaroo"
          />
        </div>
      </div>
      <Image
        className={styles["palm-first"]}
        src={palmOurCourse1}
        alt="Pro Kangaroo"
      />
      <Image
        className={styles["palm-second"]}
        src={palmOurCourse2}
        alt="Pro Kangaroo"
      />
    </div>
  );
}
