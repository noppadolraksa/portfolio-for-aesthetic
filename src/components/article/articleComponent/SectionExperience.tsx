import React from "react";
import styled from "@emotion/styled";
import TitleSection from "./TitleSection";

import SubSectionExperience from "./SubSectionExperience";
import { Experience, UserProps } from "src/context/UserContext";

const SectionContainer = styled.div`
  margin-bottom: 20px;
`;

const Div = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
type ExperienceProps = {
  experience: Experience[];
};

const SectionExperience = ({ experience }: ExperienceProps) => {
  return (
    <SectionContainer>
      <Div>
        <TitleSection title="Experience" />
      </Div>
      <Div>
        <SubSectionExperience experience={experience} />
      </Div>
    </SectionContainer>
  );
};

export default SectionExperience;
