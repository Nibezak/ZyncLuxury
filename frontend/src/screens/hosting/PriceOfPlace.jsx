import styled from "styled-components";
import React from "react";
import Price from "../../components/create_listings/price";

export default function PriceOfplace() {
  return (
    <>
      <PriceOfplaceContainer className="flex items-center justify-center">
        <Price />
      </PriceOfplaceContainer>
    </>
  );
}

const PriceOfplaceContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;
