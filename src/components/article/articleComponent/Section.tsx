import React from "react";
import styled from "@emotion/styled";
import TitleSection from "./TitleSection";
import SubSection from "./SubSection";

const SectionContainer = styled.div`
  margin-bottom: 20px;
`;

const Div = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

type SectionType = {
  title: string;
};

const Section = ({ title }: SectionType) => {
  return (
    <SectionContainer>
      <Div>
        <TitleSection title={title} />
      </Div>
      <Div>
        <SubSection />
      </Div>
    </SectionContainer>
  );
};

export default Section;
