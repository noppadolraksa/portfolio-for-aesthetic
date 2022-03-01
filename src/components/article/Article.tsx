import React from "react";
import styled from "@emotion/styled";
import Section from "./articleComponent/Section";
import Objective from "./articleComponent/Objective";

const Container = styled.article`
  flex: 2;
  padding-right: 20px;
  padding-left: 11.5px;
`;

const Article = () => {
  return (
    <Container>
      <Objective />
      <Section title="Education" />
      <Section title="Project" />
      <Section title="Experience" />
    </Container>
  );
};

export default Article;
