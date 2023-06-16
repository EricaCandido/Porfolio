import styles from "./BubbleSection.module.scss";

import { connect } from "react-redux";

import { useRef, useEffect } from "react";

import { animation } from "@/utils/funcs";

const BubbleSection = ({ data }) => {
  const myProjectsRef = useRef(null);
  const appFieldsRef = useRef(null);
  const softSkillsRef = useRef(null);

  useEffect(() => {
    animation(myProjectsRef);
    window.onscroll = function () {
      if (window.scrollY > 100) {
        animation(appFieldsRef);
      }
      if (window.scrollY > 400) {
        animation(softSkillsRef);
      }
    };
  }, []);
  return (
    <div className={styles.BubbleSection}>
      <div id="myProjects" className={styles.myProjects} ref={myProjectsRef}>
        <h3 className={styles.title}>I MIEI PROGETTI</h3>
        <div className={styles.wrapper}>
          {data.projects.map((proj) => (
            <a className={styles.purple_bubble} href={proj.url} key={proj.id}>
              {proj.title}
            </a>
          ))}
        </div>
      </div>
      <div id="appFields" className={styles.appFields} ref={appFieldsRef}>
        <h3 className={styles.title}>CAMPI DI APPLICAZIONE</h3>
        <div className={styles.wrapper}>
          {data.appFields.map((field, i) => (
            <p className={styles.pink_bubble} key={field[i]}>
              {field}
            </p>
          ))}
        </div>
      </div>
      <div id="softSkills" className={styles.softSkills} ref={softSkillsRef}>
        <h3 className={styles.title}>SOFT SKILLS</h3>
        <div className={styles.wrapper}>
          {data.softSkills.map((skill, i) => (
            <p className={styles.purple_bubble} key={skill[i]}>
              {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});
export default connect(mapStateToProps)(BubbleSection);
