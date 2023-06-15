import styles from "./Header.module.scss";
import Image from "next/image";
import { TfiMenu } from "react-icons/tfi";

import { connect } from "react-redux";
import { updateState } from "../../store/actions";

const Header = ({ globalState, updateState }) => {
  const onHandleClick = () => {
    updateState(!globalState);
  };

  return (
    <div className={styles.Header}>
      <Image
        className={styles.logo}
        src="/logo.png"
        width={50}
        height={50}
        alt="logo"
      />
      <TfiMenu className={styles.hamburger} onClick={onHandleClick} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  globalState: state.globalState,
});

const mapDispatchToProps = {
  updateState,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
