import styles from "./BubbleSection.module.scss";
import { connect } from "react-redux";

const BubbleSection = ({ data }) => {
  return (
    <div className={styles.BubbleSection}>
      <div className={styles.myProjects}>
        <h3 className={styles.title}>I MIEI PROGETTI</h3>
        <div className={styles.wrapper}>
          {data.projects.map((proj) => (
            <a className={styles.purple_bubble} href={proj.url} key={proj.id}>
              {proj.title}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.appFields}>
        <h3 className={styles.title}>CAMPI DI APPLICAZIONE</h3>
        <div className={styles.wrapper}>
          {data.appFields.map((field, i) => (
            <p className={styles.pink_bubble} key={field[i]}>
              {field}
            </p>
          ))}
        </div>
      </div>
      <div className={styles.softSkills}>
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
