import Image from "next/image";
import styles from "../styles/page.module.scss";
import Layout from "@/components/layout";
import HamburgerModal from "@/components/hamburgerModal";

import { connect } from "react-redux";
import Hero from "@/components/hero";
import BubbleSection from "@/components/bubbleSection";
import ExperienceSection from "@/components/experienceSection";
import Head from "next/head";

function Home({ data }) {
  const onHandleClick = () => {
    console.log(data);
  };

  return (
    <main className={styles.Home}>
      <Head>
        <title>Erica Candido</title>
        <link rel="icon" href="logo.png" />
      </Head>
      <HamburgerModal />
      <Layout>
        {/* <h2 onClick={onHandleClick}>Ciao</h2> */}
        <Hero />
        <BubbleSection />
        <ExperienceSection />
      </Layout>
    </main>
  );
}

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps)(Home);
