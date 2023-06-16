import styles from "./ExperienceSection.module.scss";
import Image from "next/image";
import Link from "next/link";
import { animation, sortById } from "@/utils/funcs";
import { connect } from "react-redux";
import { useEffect, useRef } from "react";

const ExperienceSection = ({ data }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 650) {
        animation(containerRef);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div id="ExperienceSection" className={styles.ExperienceSection}>
      <h2 className={styles.title}>ESPERIENZE</h2>
      <div className={styles.container} ref={containerRef}>
        {sortById(data.experiences).map((exp) => (
          <div className={styles.wrapper} key={exp.id}>
            <p className={styles.companyBubble}>{exp.company}</p>
            <p className={styles.periodBubble}>{exp.period}</p>
            <hr className={styles.firstLink} />
            <p className={styles.taskBubble}>{exp.task}</p>
            <hr className={styles.secondLink} />
            <Link href={exp.url}>
              <Image
                className={styles.companyLogo}
                src={exp.image}
                alt="company_logo"
                width={90}
                height={100}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  data: state.data,
});
export default connect(mapStateToProps)(ExperienceSection);
