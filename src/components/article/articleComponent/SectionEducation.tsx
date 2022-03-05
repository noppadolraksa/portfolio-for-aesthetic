import React from "react";
import styled from "@emotion/styled";
import TitleSection from "./TitleSection";
import SubSection from "./SubSectionEducation";

import SubSectionEducation from "./SubSectionEducation";
import { Education, UserProps } from "src/context/UserContext";

const SectionContainer = styled.div`
  margin-bottom: 20px;
`;

const Div = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
type EducationProps = {
  education: Education[];
};

const SectionEducation = ({ education }: EducationProps) => {
  return (
    <SectionContainer>
      <Div>
        <TitleSection title="Education" />
      </Div>
      <Div>
        <SubSectionEducation education={education} />
      </Div>
    </SectionContainer>
  );
};

export default SectionEducation;
