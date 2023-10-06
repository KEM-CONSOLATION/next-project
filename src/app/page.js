import Image from "next/image";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better Design for your digital products
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore in
          maiores aliquam ea neque dolore, dicta obcaecati inventore consequatur
          unde?
        </p>
        <button className={styles.button}>See Our Works</button>
      </div>
      <div className={styles.item}>
        <Image
          src="/background-image.png"
          width={500}
          height={500}
          alt="Background-Image"
          className={styles.img}
        />
      </div>
    </div>
  );
}
