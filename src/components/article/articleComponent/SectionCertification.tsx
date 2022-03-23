import React from "react";
import styled from "@emotion/styled";
import TitleSection from "./TitleSection";
import SubSection from "./SubSectionCertification";

import SubSectionCertification from "./SubSectionCertification";
import { Certification, UserProps } from "src/context/UserContext";

const SectionContainer = styled.div`
  margin-bottom: 20px;
`;

const Div = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
type CertificationProps = {
  certification: Certification[];
};

const SectionCertification = ({ certification }: CertificationProps) => {
  return (
    <SectionContainer>
      <Div>
        <TitleSection title="Certification" />
      </Div>
      <Div>
        <SubSectionCertification certification={certification} />
      </Div>
    </SectionContainer>
  );
};

export default SectionCertification;
