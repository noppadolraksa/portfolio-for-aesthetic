import styled from "@emotion/styled";

import React from "react";
import { SubTitleText, TitleText } from "src/text";

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
const DescContainer = styled.div`
  flex: 4;
  width: full;
  padding-left: 10px;
`;

const TitleTextContainer = styled.div`
  /* margin: 0px 10px 0px 0px; */
  flex: 1;
  padding: 0;
`;

type ObjectiveType = {
  objective: string;
};

const Objective = ({ objective }: ObjectiveType) => {
  return (
    <SectionContainer>
      <TitleTextContainer>
        <TitleText>{"objective".toUpperCase()} </TitleText>
      </TitleTextContainer>
      <DescContainer>
        <SubTitleText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quis
          fugiat tempore blanditiis dolorem animi magnam enim, vitae,
          repudiandae, hic cupiditate debitis dicta quod veniam id modi sit
          recusandae natus.
        </SubTitleText>
      </DescContainer>
    </SectionContainer>
  );
};

export default Objective;
