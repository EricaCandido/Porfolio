import styles from "./Hero.module.scss";
import Image from "next/image";
import hero from "../../assets/hero.jpg";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const element = heroRef.current;
    let tl = gsap.timeline();
    tl.to(element, {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div ref={heroRef} className={styles.Hero}>
      <p className={styles.sigla}>EC</p>
      <p className={styles.signature}>Erica Candido</p>

      <h1 className={styles.title}>FRONT-END DEVELOPER</h1>

      <Image
        className={styles.heroImg}
        src={hero}
        width={200}
        height={250}
        alt="hero_image"
      />
    </div>
  );
};

export default Hero;
