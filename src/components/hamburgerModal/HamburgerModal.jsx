import styles from "./HamburgerModal.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { connect } from "react-redux";
import { updateState } from "../../store/actions";

const HamburgerModal = ({ globalState, updateState }) => {
  const onHandleClick = () => {
    updateState(!globalState);
  };
  return (
    <ul
      className={`${styles.HamburgerModal} ${globalState ? styles.show : ""}`}
    >
      <AiOutlineClose className={styles.close} onClick={onHandleClick} />
      <a href="#myProjects" onClick={onHandleClick}>
        I MIEI PROGETTI
      </a>
      <a href="#appFields" onClick={onHandleClick}>
        CAMPI DI APPLICAZIONE
      </a>
      <a href="#softSkills" onClick={onHandleClick}>
        SOFT SKILLS
      </a>
      <a href="#ExperienceSection" onClick={onHandleClick}>
        ESPERIENZE
      </a>
      <a href="#EducationSection" onClick={onHandleClick}>
        FORMAZIONE
      </a>
      <a href="#contacts" onClick={onHandleClick}>
        CONTATTI
      </a>
    </ul>
  );
};

const mapStateToProps = (state) => ({
  globalState: state.globalState,
});

const mapDispatchToProps = {
  updateState,
};

export default connect(mapStateToProps, mapDispatchToProps)(HamburgerModal);
