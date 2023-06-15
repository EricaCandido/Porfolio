import styles from "./ExperienceSection.module.scss";
import Image from "next/image";
import { sortById } from "@/utils/funcs";
import { connect } from "react-redux";

const ExperienceSection = ({ data }) => {
  return (
    <div className={styles.ExperienceSection}>
      <h2 className={styles.title}>ESPERIENZE</h2>
      <div className={styles.container}>
        {sortById(data.experiences).map((exp) => (
          <div className={styles.wrapper} key={exp.id}>
            <p className={styles.companyBubble}>{exp.company}</p>
            <p className={styles.periodBubble}>{exp.period}</p>
            <hr className={styles.firstLink} />
            <p className={styles.taskBubble}>{exp.task}</p>
            <hr className={styles.secondLink} />
            <Image
              className={styles.companyLogo}
              src={exp.image}
              alt="company_logo"
              width={90}
              height={100}
            />
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
