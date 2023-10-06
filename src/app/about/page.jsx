import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ingContainer}>
        <Image src="/sixteenth_picture.png" fill={true} alt="" />
      </div>
      <div className={styles.textContainer}></div>
    </div>
  );
};

export default About;
