import React from "react";
import styled from "@emotion/styled";
import Objective from "./articleComponent/Objective";

import SectionEducation from "./articleComponent/SectionEducation";

import { UserProps } from "src/context/UserContext";
import SectionExperience from "./articleComponent/SectionExperience";
import SectionCertification from "./articleComponent/SectionCertification";

const Container = styled.article`
  width: 67%;
  padding-right: 20px;
  padding-left: 11.5px;
`;

const Article = ({ user }: UserProps) => {
  return (
    <Container>
      <Objective objective={user.objective} />
      <SectionEducation education={user?.education} />
      <SectionExperience experience={user?.experience} />
      <SectionCertification certification={user?.certification} />
    </Container>
  );
};

export default Article;
