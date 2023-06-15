import styles from "./Hero.module.scss";
import Image from "next/image";
import hero from "../../assets/hero.jpg";
const Hero = () => {
  return (
    <div className={styles.Hero}>
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
