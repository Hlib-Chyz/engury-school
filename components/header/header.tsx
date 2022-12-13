import styles from "./header.module.scss";
import Image from "next/image";
import logo from "@images/logo.svg";
import logoText from "@images/logo-text.svg";
import React, { useEffect, useState } from "react";
import Menu from "@components/header/components/menu/menu";

export default function Header({ isOrange }: { isOrange?: boolean }) {
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
        <div className={styles.logo}>
          <Image src={logo} alt="arrowRightGreen" />
          <Image src={logoText} alt="arrowRightGreen" />
        </div>
        <nav style={isOrange ? { color: "#d17340" } : {}}>
          <ul>
            <li>
              <a>Про нас</a>
            </li>
            <li>
              <a>Курси</a>
            </li>
            <li>
              <a>Викладачі</a>
            </li>
            <li>
              <a>Відгуки</a>
            </li>
            <li>
              <a>Контакти</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
