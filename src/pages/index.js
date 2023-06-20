import styles from "../styles/page.module.scss";

import Layout from "@/components/layout";
import HamburgerModal from "@/components/hamburgerModal";
import Hero from "@/components/hero";
import BubbleSection from "@/components/bubbleSection";
import ExperienceSection from "@/components/experienceSection";
import EducationSection from "@/components/educationSection";

import Head from "next/head";

import { connect } from "react-redux";

function Home({ data }) {
  const onHandleClick = () => {
    console.log(data);
  };

  return (
    <main className={styles.Home}>
      <Head>
        <title>Erica Candido</title>
        <link rel="icon" href="logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap"
          rel="stylesheet"
        />
      </Head>

      <HamburgerModal />
      <Layout>
        {/* <h2 onClick={onHandleClick}>Ciao</h2> */}
        <Hero />
        <BubbleSection />
        <ExperienceSection />
        <EducationSection />
      </Layout>
    </main>
  );
}

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps)(Home);
