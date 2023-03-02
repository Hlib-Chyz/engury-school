import styles from "./header.module.scss";
import Image from "next/image";
import logo from "@images/logo.svg";
import logoText from "@images/logo-text.svg";
import React, { useEffect, useState } from "react";
import Menu from "@components/header/components/menu/menu";
import Link from "next/link";

export default function Header({
  isOrange,
  refs,
}: {
  isOrange?: boolean;
  refs: any;
}) {
  const [isOpenMenu, setOpenMenu] = useState(false);
  return (
    <>
      {isOpenMenu ? <Menu /> : null}
      <div className={styles.container}>
        <button
          onClick={() => setOpenMenu(!isOpenMenu)}
          className={styles["open-menu"]}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
        <Link href="/">
          <div className={styles.logo}>
            <Image src={logo} alt="arrowRightGreen" />
            <Image src={logoText} alt="arrowRightGreen" />
          </div>
        </Link>
        <nav style={isOrange ? { color: "#d17340" } : {}}>
          <ul>
            <li>
              <a
                onClick={() =>
                  refs.aboutUsRef.current?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Про нас
              </a>
            </li>
            <li>
              <a
                onClick={() =>
                  refs.tariffsRef.current?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Курси
              </a>
            </li>
            <li>
              <a
                onClick={() =>
                  refs.teachersRef.current?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Викладачі
              </a>
            </li>
            <li>
              <a
                onClick={() =>
                  refs.reviewsRef.current?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Відгуки
              </a>
            </li>
            <li>
              <a
                onClick={() =>
                  refs.contactsRef.current?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Контакти
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
