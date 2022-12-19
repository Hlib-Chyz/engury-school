import styles from "./footer-for-mobile.module.scss";
import Image from "next/image";
import phone from "@images/insta.svg";
import instagram from "@images/instagram-white.svg";
import twitter from "@images/twitter-white.svg";
import facebook from "@images/facebook-white.svg";
import tiktok from "@images/tiktok-white.svg";

export default function FooterForMobile() {
  return (
    <div className={styles.container}>
      <h5>Знайди нас </h5>
      <ul>
        <li>
          <a>
            <Image src={instagram} alt="arrowRightGreen" />
          </a>
        </li>
        <li>
          <a>
            <Image src={facebook} alt="arrowRightGreen" />
          </a>
        </li>
        <li>
          <a>
            <Image src={twitter} alt="arrowRightGreen" />
          </a>
        </li>
        <li>
          <a>
            <Image src={tiktok} alt="arrowRightGreen" />
          </a>
        </li>
      </ul>
    </div>
  );
}
