import React from "react";
import styled from "@emotion/styled";
import { SubTitleText, TitleText } from "src/text";

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Wrapper = styled.div`
  margin: 0;
  width: 60%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const SkillContainer = styled.div``;

const PlainTextContainer = styled.div`
  display: flex;
  overflow-wrap: break-word;
  line-height: 15px;
  margin: 10px 0px;
`;

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <SkillContainer>
          <TitleText>{"FRONTEND".toUpperCase()}</TitleText>
          <SubTitleText>1</SubTitleText>
        </SkillContainer>
        <SkillContainer>
          <TitleText>{"BACKEND".toUpperCase()}</TitleText>
          <SubTitleText>1</SubTitleText>
        </SkillContainer>
        <SkillContainer>
          <TitleText>{"infrastructure".toUpperCase()}</TitleText>
          <SubTitleText>1</SubTitleText>
        </SkillContainer>
        <SkillContainer>
          <TitleText>{"SPECIFY".toUpperCase()}</TitleText>
          <SubTitleText>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
            libero! Ad cumque ab, earum recusandae aut aliquam, nulla modi
            consectetur nobis accusantium corrupti debitis accusamus natus?
            Aspernatur at perferendis laboriosam.
          </SubTitleText>
        </SkillContainer>
        <SkillContainer>
          <TitleText>{"hobbies".toUpperCase()}</TitleText>
          <SubTitleText>1</SubTitleText>
        </SkillContainer>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
