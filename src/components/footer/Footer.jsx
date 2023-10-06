import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className="">&copy; Lamamia, All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/adobe.png"
          width={15}
          height={15}
          alt="Social Icons"
          className={styles.icon}
        />
        <Image
          src="/adobe.png"
          width={15}
          height={15}
          alt="Social Icons"
          className={styles.icon}
        />
        <Image
          src="/adobe.png"
          width={15}
          height={15}
          alt="Social Icons"
          className={styles.icon}
        />
        <Image
          src="/adobe.png"
          width={15}
          height={15}
          alt="Social Icons"
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Footer;
