import styled from "styled-components";
import React from "react";
import InformationofPlaceComponent from "../../components/create_listings/information";

export default function InformationOfplace() {
  return (
    <>
      <InformationOfplaceContainer className="flex items-center justify-center">
        <InformationofPlaceComponent />
      </InformationOfplaceContainer>
    </>
  );
}

const InformationOfplaceContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;
