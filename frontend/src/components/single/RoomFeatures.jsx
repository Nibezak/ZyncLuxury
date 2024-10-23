 
import React, { useRef } from "react";
import { RoomFeaturesList, RoomFeaturesList2 } from "@/constants/data/feature";

export default function RoomFeatures() {
  return (
    <>
      <div className="w-full">
        <div className="w-full flex flex-col gap-8">
          <h3 className="text-2xl md:text-3xl family2">
            Room Services
            <span className="block family1 pt-2 text-base font-normal font-booking_font">
              Enjoy the comforts of home and beyond with these distinctive
              features.
            </span>
          </h3>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-8">
            {RoomFeaturesList.map((x, index) => {
              return (
                <div
                  key={index}
                  className="flex text-sm md:text-sm gap-4 font-normal items-center"
                >
                  {x?.icon}
                  <span className="w-full family1"> {x.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
