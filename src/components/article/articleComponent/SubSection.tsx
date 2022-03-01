import React from "react";
import styled from "@emotion/styled";
import { SubTitleText } from "src/text";

const DescContainer = styled.div`
  flex: 3;
`;

const SubDescContainer = styled.div`
  flex: 3;
`;

const SubTitleContainer = styled.div`
  border-left: 1px solid var(--primaryFont);
  margin: 0px 0px 0px 10px;
  flex: 1;
  padding: 0;
`;

const SubTiTleTextContainer = styled.div`
  padding-left: 20px;
`;

const TopicContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SubSection = () => {
  return (
    <div>
      <TopicContainer>
        <SubTitleContainer>
          <SubTiTleTextContainer>
            <SubTitleText>subtitle</SubTitleText>
          </SubTiTleTextContainer>
          <SubTiTleTextContainer>
            <SubTitleText>subtitle</SubTitleText>
          </SubTiTleTextContainer>
        </SubTitleContainer>
        <DescContainer>
          <SubDescContainer>
            <SubTitleText>detail1</SubTitleText>
            <SubTitleText>dettail2</SubTitleText>
            <SubTitleText>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus earum saepe optio, voluptates reprehenderit quod velit
              placeat recusandae temporibus sequi, deleniti veniam enim mollitia
              impedit eius doloremque quasi architecto rerum?
            </SubTitleText>
          </SubDescContainer>
        </DescContainer>
      </TopicContainer>
    </div>
  );
};

export default SubSection;
