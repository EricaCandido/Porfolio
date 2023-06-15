import Footer from "../footer";
import Header from "../header";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Header />
      <section>{children}</section>
      <Footer />
    </div>
  );
};

export default Layout;
