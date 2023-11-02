import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.image}
            src=""
            alt=""
            height={400}
            width={200}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
      <Link href="blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.image}
            src=""
            alt=""
            height={400}
            width={200}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
