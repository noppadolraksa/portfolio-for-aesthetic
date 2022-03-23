import React from "react";
import styled from "@emotion/styled";
import { SubTitleText } from "src/utils/text";
import { Experience } from "src/context/UserContext";

type ExperienceProps = {
  experience: Experience[];
};

const Container = styled.div``;

const Topic = styled.div`
  width: full;
  display: flex;
`;

const Left = styled.div`
  width: 20%;
`;

const Right = styled.div`
  width: 80%;
  border-left: 3px solid var(--secondaryFont);
  padding-left: 10px;
  position: relative;
  &:before {
    position: absolute;
    top: 4px;
    left: -7px;
    width: 11px;
    height: 12px;
    border-radius: 5px;
    background: var(--secondaryFont);
    content: "";
  }
`;

const List = styled.div``;

const ListItem = styled.div``;

const ExperienceContainer = styled.div`
  width: full;
`;

const SubSectionExperience = ({ experience }: ExperienceProps) => {
  return (
    <div>
      <ExperienceContainer>
        <Container>
          {experience?.map((list) => (
            <Topic key={list.index}>
              <Left>
                {/* <SubTitleText>{list.date}</SubTitleText> */}
                <SubTitleText style={{ fontWeight: 400 }}>
                  {list.period === "" ? list.type : list.period}
                </SubTitleText>
              </Left>
              <Right>
                <List>
                  <ListItem>
                    <SubTitleText style={{ fontWeight: 500 }}>
                      {list.name}
                    </SubTitleText>
                    <SubTitleText>{list.location}</SubTitleText>
                  </ListItem>
                </List>
              </Right>
            </Topic>
          ))}
        </Container>
      </ExperienceContainer>
    </div>
  );
};

export default SubSectionExperience;
