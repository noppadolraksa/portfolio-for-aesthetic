import React from "react";
import styled from "@emotion/styled";
import { PersonalitiesText, SubTitleText, TitleText } from "src/utils/text";

import { UserProps, useUser } from "src/context/UserContext";
import RatingStars from "src/utils/RatingStars";

const Container = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Wrapper = styled.div`
  margin: 0;
  width: 80%;

  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const SkillContainer = styled.div``;

const List = styled.ul`
  margin: 10px 0px 10px 0px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  margin: 3px 0px 3px 0px;
  width: 50%;
  white-space: nowrap;
  overflow: hidden;
`;
const SkillItem = styled.li`
  margin: 3px 0px 3px 0px;

  white-space: nowrap;
  overflow: hidden;
`;
const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PersonalitiesContainer = styled.div`
  display: flex;
  gap: 2px;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const Sidebar = ({ user }: UserProps) => {
  const { reading, writing, listening, speaking, skills, personalities } =
    user.skill;

  return (
    <Container>
      <Wrapper>
        <SkillContainer>
          <TitleText>{"skills".toUpperCase()}</TitleText>
          <List>
            <SkillItem>
              <SubTitleText>
                <span style={{ fontWeight: "400" }}>Thai:</span> Native
              </SubTitleText>
              <SubTitleText>
                <span style={{ fontWeight: "400" }}>English:</span> Intermediate
              </SubTitleText>

              <SubTitleText style={{ display: "flex" }}>
                <span style={{ fontWeight: "400" }}>reading:</span>
                <RatingStars rating={reading} />
              </SubTitleText>

              <SubTitleText style={{ display: "flex" }}>
                <span style={{ fontWeight: "400" }}>writing:</span>
                <RatingStars rating={writing} />
              </SubTitleText>
              <SubTitleText style={{ display: "flex" }}>
                <span style={{ fontWeight: "400" }}>speaking:</span>
                <RatingStars rating={speaking} />
              </SubTitleText>
              <SubTitleText style={{ display: "flex" }}>
                <span style={{ fontWeight: "400" }}>listening:</span>
                <RatingStars rating={listening} />
              </SubTitleText>
              <PersonalitiesContainer>
                {skills?.map((skill, index) => (
                  <PersonalitiesText key={index}>{skill}</PersonalitiesText>
                ))}
              </PersonalitiesContainer>
            </SkillItem>
          </List>
        </SkillContainer>
        <SkillContainer>
          <TitleText>{"soft skills".toUpperCase()}</TitleText>
          <List>
            <SkillItem>
              <PersonalitiesContainer>
                {personalities?.map((personality, index) => (
                  <PersonalitiesText key={index}>
                    {personality}
                  </PersonalitiesText>
                ))}
              </PersonalitiesContainer>
            </SkillItem>
          </List>
        </SkillContainer>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
