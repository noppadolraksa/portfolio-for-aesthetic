import React from "react";
import styled from "@emotion/styled";
import { SubTitleText } from "src/utils/text";
import { Certification } from "src/context/UserContext";

type CertificationProps = {
  certification: Certification[];
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

const CertificationContainer = styled.div`
  width: full;
`;

const SubSectionCertification = ({ certification }: CertificationProps) => {
  return (
    <div>
      <CertificationContainer>
        <Container>
          {certification?.map((list) => (
            <Topic key={list.id}>
              <Left>
                {/* <SubTitleText>{list.date}</SubTitleText> */}
                <SubTitleText style={{ fontWeight: 400 }}>
                  {list.year}
                </SubTitleText>
              </Left>
              <Right>
                <List>
                  <ListItem>
                    <SubTitleText style={{ fontWeight: 500 }}>
                      {list.name}
                    </SubTitleText>
                  </ListItem>
                  <ListItem>
                    <SubTitleText>{list.desc}</SubTitleText>
                  </ListItem>
                </List>
              </Right>
            </Topic>
          ))}
        </Container>
      </CertificationContainer>
    </div>
  );
};

export default SubSectionCertification;
