import React from 'react'
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}><h1 className={styles.title}>Hi, I'm Parker</h1>
    <p className={styles.description}>I'm a recent computer science graduate looking for my next oppurtunity
        in the tech industry. Reach out if you'd like to learn more! 
    </p>
    <a href="mailto:parkerstephenson00@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg} />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
  </section>;
};
