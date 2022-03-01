import styled from "@emotion/styled";
import Navbar from "src/components/Navbar";
import Sidebar from "src/components/Sidebar";
import Article from "src/components/article/Article";
import Footer from "src/components/Footer";
import Head from "next/head";

const Container = styled.div`
  margin: 0;
  background-color: var(--bg);
`;

const index = () => {
  return (
    <Container>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Article />
      </div>
      <Footer />
    </Container>
  );
};

export default index;
