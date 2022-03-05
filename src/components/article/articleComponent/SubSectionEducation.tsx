import React from "react";
import styled from "@emotion/styled";
import { SubTitleText } from "src/text";
import { Education } from "src/context/UserContext";

type EducationProps = {
  education: Education[];
};

const Container = styled.div``;

const Topic = styled.div`
  width: full;
  display: flex;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 4;
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

const EducationContainer = styled.div`
  width: full;

  padding-left: 20px;
  margin-left: 10px;
`;

const SubSectionEducation = ({ education }: EducationProps) => {
  console.log(education);
  return (
    <div>
      <EducationContainer>
        <Container>
          {education?.map((list) => (
            <Topic key={list.id}>
              <Left>
                {/* <SubTitleText>{list.date}</SubTitleText> */}
                <SubTitleText>2016-2020</SubTitleText>
              </Left>
              <Right>
                <List>
                  <ListItem>
                    <SubTitleText style={{ fontWeight: "500" }}>
                      {list.degree}
                    </SubTitleText>
                  </ListItem>
                  <ListItem>
                    <SubTitleText>{list.institution}</SubTitleText>
                  </ListItem>
                  <ListItem>
                    <SubTitleText>{list.fieldOfStudy}</SubTitleText>
                  </ListItem>
                </List>
              </Right>
            </Topic>
          ))}
        </Container>
      </EducationContainer>
    </div>
  );
};

export default SubSectionEducation;
