import styles from "./Hero.module.scss";
import Image from "next/image";
import hero from "../../assets/hero.jpg";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { IoMdPlanet } from "react-icons/io";
import { SiPlanetscale } from "react-icons/si";
import { TbBrandPlanetscale } from "react-icons/tb";
import { HiSparkles, HiOutlineSparkles } from "react-icons/hi";
import { GiSparkles } from "react-icons/gi";

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
      <div className={styles.leftSection}>
        <GiSparkles className={styles.sparkles1} />
        <hr className={styles.lace1} />
        <SiPlanetscale className={styles.planet1} />
        <HiSparkles className={styles.sparkles2} />
        <hr className={styles.lace2} />
        <TbBrandPlanetscale className={styles.planet2} />
        <HiOutlineSparkles className={styles.sparkles3} />{" "}
        <hr className={styles.lace3} />
        <IoMdPlanet className={styles.planet3} />
        <GiSparkles className={styles.sparkles4} />
      </div>

      <div className={styles.centerSection}>
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
      <div className={styles.rightSection}>
        <GiSparkles className={styles.sparkles1} />
        <hr className={styles.lace1} />
        <SiPlanetscale className={styles.planet1} />
        <HiSparkles className={styles.sparkles2} />
        <hr className={styles.lace2} />
        <TbBrandPlanetscale className={styles.planet2} />
        <HiOutlineSparkles className={styles.sparkles3} />
        <hr className={styles.lace3} />
        <IoMdPlanet className={styles.planet3} />
        <GiSparkles className={styles.sparkles4} />
      </div>
    </div>
  );
};

export default Hero;
