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
      <li>I MIEI PROGETTI</li>
      <li>CAMPI DI APPLICAZIONE</li>
      <li>SOFT SKILLS</li>
      <li>ESPERIENZE</li>
      <li>FORMAZIONE</li>
      <li>CONTATTI</li>
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
