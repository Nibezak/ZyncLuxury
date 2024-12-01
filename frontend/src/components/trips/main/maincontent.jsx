import React from "react";
import { apartmentDataList } from "../../../data/apartmentData";
import RoomCard from "../../common/RoomCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardLoader from "@/components/common/CardLoader";
const MainContent = () => {
  return (
    <div className="w-full relative flex flex-col">
      <RoomLists />
    </div>
  );
};

const RoomLists = () => {
  const { reservations, getsingleReservationisLoading } = useSelector(
    (store) => store.reservation
  );
  return (
    <div
      className="w-full relative py-20 pb-12 flex items-center justify-center
   gap-8"
    >
      <div className="w-[90%] max-w-custom_1 relative mx-auto flex flex-col gap-12">
        {reservations?.length !== 0 && (
          <h3 className="text-3xl md:text-5xl family2">
            My Reservations
            <span className="block pt-3 regular text-base md:text-xl">
              Here is your list of your luxurious booked homes
            </span>
          </h3>
        )}

        <div
          className="w-full  z-40 items-start justify-center flex-col
       gap-12"
        >
          {getsingleReservationisLoading ? (
            <div className="w-full gap-8 grid md:grid-cols-2 lg:grid-cols-3">
              {apartmentDataList?.map((_, index) => {
                return <CardLoader key={index} />;
              })}
            </div>
          ) : (
            <div className="w-full">
              {reservations?.length === 0 ? (
                <div className="w-full flex flex-col gap-4 justify-center items-center">
                  <img
                    src="/no_result.jpg"
                    alt=""
                    className="w-[300px] md:w-[400px]"
                  />
                  <h1 className="text-dark leading-[1.3] text-3xl md:text-3xl text-center family2">
                    You have an empty reserved Rooms
                    <Link
                      to={"/search"}
                      style={{ letterSpacing: "2px" }}
                      className="text-[9px] md:text-xs font-normal pb-1 pt-3 w-fit border-b border-[rgba(0,0,0,.5)] uppercase flex items-center gap-4 regular"
                    >
                      Visit our rooms collections
                    </Link>
                  </h1>
                </div>
              ) : (
                <div className="w-full gap-8 grid md:grid-cols-2 lg:grid-cols-3">
                  {reservations?.map((apartment, index) => {
                    return (
                      <RoomCard
                        type={"trips"}
                        key={index}
                        apartment={apartment}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
