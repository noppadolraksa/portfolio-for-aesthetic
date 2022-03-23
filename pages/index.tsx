import styled from "@emotion/styled";
import Navbar from "src/components/Navbar";
import Sidebar from "src/components/Sidebar";
import Article from "src/components/article/Article";
import Footer from "src/components/Footer";
import Head from "next/head";
import { GetStaticProps } from "next";
import { client } from "src/lib/apollo";
import { gql } from "@apollo/client";
import { UserProps } from "src/context/UserContext";

const Container = styled.div`
  margin: 0;
  background-color: var(--bg);
  width: 794px;
  height: 1123px;
`;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query Query {
        user {
          id
          index
          name
          image
          location
          tagline
          email
          github
          website
          phone
          strength
          born
          objective
          experience {
            index
            name
            period
            type
            id
            location
          }
          education {
            id
            index
            institution
            degree
            date
          }
          skill {
            listening
            reading
            speaking
            writing
            skills
            id
            personalities
          }
          certification {
            id
            index
            name
            desc
            year
          }
        }
      }
    `,
  });

  return {
    props: {
      user: data.user[0],
    },
  };
};

const index = ({ user }: UserProps) => {
  return (
    <Container>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar user={user} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Sidebar user={user} />
        <Article user={user} />
      </div>
    </Container>
  );
};

export default index;
