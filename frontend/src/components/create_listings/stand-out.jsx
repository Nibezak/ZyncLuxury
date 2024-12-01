import React from "react";
import styled from "styled-components";
import FooterHosting from "./footer";
import { useSelector } from "react-redux";
export default function StandOut() {
  const { currentUser } = useSelector((store) => store.auth);
  return (
    <>
      <StandOutContainer className="w-90 auto">
        <div className=" w-full">
          <div
            data-aos="fade-up"
            data-aos-duration="1400"
            className="aboutCenter flex items-center gap-8 lg:gap-16  justify-center w-[90%]  max-w-custom mx-auto"
          >
            <div className="flex-1 flex gap-4 flex-col">
              <h1 className="family2 text-dark">
                <span className="blocktext-lg py-1">Step 2</span> Make your
                place stand out
              </h1>
              <span className="block text-sm md:text-base regular text-dark">
                In this step, you’ll add some of the amenities your place
                offers, plus 5 or more photos. Then, you’ll create a title and
                description.
              </span>
            </div>{" "}
            <div className="flex-1 flex items-center justify-center">
              <img
                src="https://a0.muscache.com/4ea/air/v2/pictures/da2e1a40-a92b-449e-8575-d8208cc5d409.jpg"
                alt=""
                className="image"
              />
            </div>
          </div>
        </div>
      </StandOutContainer>
      <FooterHosting
        active={true}
        prev={`${currentUser?.id}/floor-plan`}
        next={`${currentUser?.id}/photos`}
      />
    </>
  );
}

const StandOutContainer = styled.div`
  overflow: hidden;
  padding-bottom: 6rem;
  .list1 {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 2rem 0;
  }
  .aboutCenter {
    @media (max-width: 780px) {
      flex-direction: column;
      gap: 2rem;
    }
  }
  .image {
    object-fit: cover;
    width: 300px;
    @media (max-width: 580px) {
      width: 90%;
    }
  }
  span {
    @media (max-width: 580px) {
      font-size: 16px;
    }
  }
  h1 {
    font-size: 55px;
    line-height: 1.1;
    @media (max-width: 980px) {
      font-size: 40px;
    }
    @media (max-width: 780px) {
      font-size: 30px;
    }
    @media (max-width: 580px) {
      width: 90%;
      font-size: 26px;
    }
  }
`;
