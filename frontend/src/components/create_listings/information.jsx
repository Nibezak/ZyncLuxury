import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FooterHosting from "./footer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleListingDescription } from "@/features/room/roomSlice";
export default function InformationofPlace() {
  const { currentUser } = useSelector((store) => store.auth);
  const { listing } = useSelector((store) => store.room);
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleListingDescriptions = (e) => {
    setDescription(e.target.value);
    dispatch(handleListingDescription(e.target.value));
  };

  useEffect(() => {
    if (listing.description) {
      setDescription(listing.description);
    }
  }, [listing, setDescription]);
  return (
    <>
      <InformationofPlaceContainer>
        <div className="w-full">
          <div
            data-aos="fade-up"
            data-aos-duration="1400"
            className="aboutCenter flex flex-col gap-8 lg:gap-16  justify-center items-center w-[90%]  max-w-custom mx-auto"
          >
            <h2 className="family2 w-full text-start text-dark">
              Create your description
              <span className="block py-1 text-sm md:text-base regular text-grey">
                Share what makes your place special.
              </span>
            </h2>
            <div className="grid w-[90%] max-w-custom mx-auto">
              <textarea
                value={description}
                name="description"
                onChange={handleListingDescriptions}
                placeholder="Feel refreshed when you stay in this rustic gem."
                className="uploadWrapper mx-auto flex items-center justify-center flex-col gap-1"
              />
            </div>
          </div>
        </div>
      </InformationofPlaceContainer>
      <FooterHosting
        active={description}
        prev={`${currentUser?.id}/title`}
        next={`${currentUser?.id}/price`}
      />
    </>
  );
}

const InformationofPlaceContainer = styled.div`
  width: 100%;
  padding: 4rem 0;
  @media (max-width: 780px) {
    padding-top: 2.5rem;
  }
  @media (max-width: 380px) {
    padding-top: 4.5rem;
  }
  .list1 {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 2rem 0;
  }
  .uploadWrapper {
    width: 65%;
    border: 1px solid rgba(0, 0, 0, 1);
    padding: 2rem 2rem;
    height: 100%;
    height: 12rem;
    border-radius: 8px;
    background: transparent;
    outline: none;
    font-size: 1.2rem;
    font-weight: 500;
    font-family: inherit;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    @media (max-width: 780px) {
      width: 100%;
      /* padding: 0; */
    }

    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.4);
    }
    &:focus {
      border: 2px solid var(--dark-1);
      background: transparent;
    }
    &.true {
      background: #fff;
    }
    &.inputError {
      border: 2px solid var(--red);
    }
    &:invalid[focused="true"] ~ span {
      display: block;
    }
  }
  .aboutCenter {
    @media (max-width: 780px) {
      flex-direction: column;
      gap: 2rem;
    }
  }
  .image {
    width: 2.5rem;
    height: 2.5rem;
    object-fit: cover;
  }
  h2 {
    font-size: 35px;
    line-height: 1.2;
    width: 60%;

    @media (max-width: 780px) {
      /* font-size: 40px; */
    }

    @media (max-width: 780px) {
      font-size: 30px;
    }
    @media (max-width: 780px) {
      width: 90%;
      padding: 0;
    }
    @media (max-width: 320px) {
      font-size: 27px;
    }
  }
`;
