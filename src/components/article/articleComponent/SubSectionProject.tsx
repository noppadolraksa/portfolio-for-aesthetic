import React from "react";
import styled from "@emotion/styled";
import { SubTitleText } from "src/text";
import { Project } from "src/context/UserContext";

type ProjectType = {
  project: Project[];
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

const ProjectContainer = styled.div`
  width: full;
`;

const SubSectionProject = ({ project }: ProjectType) => {
  return (
    <div>
      <ProjectContainer>
        <Container>
          {project?.map((list) => (
            <Topic key={list.id}>
              <Left>
                {/* <SubTitleText>{list.date}</SubTitleText> */}
                <SubTitleText>
                  {list.index === 1 && "1st project"}
                  {list.index === 2 && "2nd project"}
                  {list.index === 3 && "3rd project"}
                </SubTitleText>
              </Left>
              <Right>
                <List>
                  <ListItem>
                    <SubTitleText style={{ fontWeight: "500" }}>
                      {list.title}
                    </SubTitleText>
                  </ListItem>
                  <ListItem>
                    <SubTitleText>{list.description}</SubTitleText>
                  </ListItem>
                  <ListItem>
                    <SubTitleText>
                      <span style={{ fontWeight: "400" }}>github: </span>
                      <a href={list.sourceCode}>{list.sourceCode}</a>
                    </SubTitleText>
                  </ListItem>
                  {/* <ListItem>
                    <SubTitleText>{list.technologies}</SubTitleText>
                  </ListItem> */}
                  {/* <ListItem>
                    <SubTitleText>{list.techniques}</SubTitleText>
                  </ListItem> */}
                  {list.link1 && (
                    <ListItem>
                      <SubTitleText>
                        <span style={{ fontWeight: "400" }}>client: </span>
                        <a href={list.link1}>{list.link1}</a>
                      </SubTitleText>
                    </ListItem>
                  )}
                  {list.link2 && (
                    <ListItem>
                      <SubTitleText>
                        <span style={{ fontWeight: "400" }}>admin: </span>
                        <a href={list.link2}>{list.link2}</a>
                      </SubTitleText>
                    </ListItem>
                  )}
                  {list.link3 && (
                    <ListItem>
                      <SubTitleText>
                        <span style={{ fontWeight: "400" }}>
                          presentation:{" "}
                        </span>
                        <a href={list.link3}>{list.link3}</a>
                      </SubTitleText>
                    </ListItem>
                  )}
                </List>
              </Right>
            </Topic>
          ))}
        </Container>
      </ProjectContainer>
    </div>
  );
};

export default SubSectionProject;
