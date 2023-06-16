import styles from "./Footer.module.scss";
import { SiGmail, SiInstagram } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { connect } from "react-redux";

const Footer = ({ data }) => {
  return (
    <div className={styles.Footer}>
      <h2 id="contacts" className={styles.title}>
        Contatti
      </h2>
      <div className={styles.mail}>
        <SiGmail className={styles.gmailIcon} />
        <a href={`mailto:${data?.contacts?.email}`}>{data?.contacts?.email}</a>
      </div>
      <div className={styles.socialNetworks}>
        <a href={data?.contacts?.github} className={styles.gH}>
          <FaGithub className={styles.gHIcon} />
          <p>EricaCandido</p>
        </a>
        <a href={data?.contacts?.linkedin} className={styles.LinkedIn}>
          <RxLinkedinLogo className={styles.linIcon} />
          <p>Erica Candido</p>
        </a>
        <a href={data?.contacts?.instagram} className={styles.iG}>
          <SiInstagram className={styles.iGIcon} />
          <p>@ericandido</p>
        </a>
      </div>
      <p className={styles.rights}>Created by Erica Candido</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps)(Footer);
