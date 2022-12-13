import styles from "./menu.module.scss";
import Image from "next/image";
import logo from "@images/logo.svg";
import logoText from "@images/logo-text.svg";
import instagram from "@images/instagram-white.svg";
import twitter from "@images/twitter-white.svg";
import facebook from "@images/facebook-white.svg";
import tiktok from "@images/tiktok-white.svg";
import React from "react";

export default function Menu() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={logo} alt="arrowRightGreen" />
        <Image src={logoText} alt="arrowRightGreen" />
      </div>
      <nav>
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
      <footer>
        <Image src={instagram} alt="arrowRightGreen" />
        <Image src={facebook} alt="arrowRightGreen" />
        <Image src={twitter} alt="arrowRightGreen" />
        <Image src={tiktok} alt="arrowRightGreen" />
      </footer>
    </div>
  );
}
