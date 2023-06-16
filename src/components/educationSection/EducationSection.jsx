import styles from "./EducationSection.module.scss";
import { animation, sortById } from "@/utils/funcs";
import { connect } from "react-redux";
import { useEffect, useRef } from "react";

const EducationSection = ({ data }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1300) {
        animation(containerRef);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div id="EducationSection" className={styles.EducationSection}>
      <h2 className={styles.title}>FORMAZIONE</h2>

      <div className={styles.container} ref={containerRef}>
        <hr className={styles.firstLink} />
        <hr className={styles.secondLink} />
        {sortById(data.education).map((edu) => (
          <div className={styles.wrapper} key={edu.id}>
            <p className={styles.mainBubble}>
              {edu.certificate}
              <br />
              {edu.istitution}
            </p>
            <p className={styles.secondaryBubble}>{edu.period}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});
export default connect(mapStateToProps)(EducationSection);
