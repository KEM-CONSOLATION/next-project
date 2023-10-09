import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/sixteenth_picture.png"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            mollitia.
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis id in
            totam modi dignissimos, praesentium optio sint sapiente consectetur
            debitis fugiat iure excepturi cum deserunt est mollitia adipisci
            officiis architecto.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos ipsa
            voluptatibus, nisi esse aliquid aut praesentium veniam ipsam
            blanditiis officiis at placeat similique ullam laborum non molestias
            maiores doloribus pariatur.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis id in
            totam modi dignissimos, praesentium optio sint sapiente consectetur
            debitis fugiat iure excepturi cum deserunt est mollitia adipisci
            officiis architecto.
            <br />
            <br />
            -Dynamic Website
            <br />
            <br />
            -Fast and handy
            <br />
            <br />
            -Fast and handy
          </p>
          <Button url="contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
