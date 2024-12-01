import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { onLoginModal, onRegisterModal } from "@/features/modals/modalSlice";
import Profile from "../common/Profile";
import { BiSearch } from "react-icons/bi";
import { propertytype } from "@/data/propertyType";
import { handleFilterState } from "@/features/room/roomSlice";

const linkData = [
  {
    title: "Home",
    path: "",
  },
  {
    title: "Our Listings",
    path: "search",
  },
  {
    title: "My Favourites",
    path: "savedhomes",
  },
  {
    title: "My Trips",
    path: "trips",
  },

  // {
  //   title: "Contact",
  //   path: "trips",
  // },
];
const Header = () => {
  const [country, setCountry] = useState("");
  const [bar, setBar] = React.useState(false);

  const { currentUser } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  return (
    <div className="h-[100%] md:h-[85px] w-full">
      <div className="bg-[#fff] py-4 w-full flex flex-col">
        <div
          className="w-[95%] family1 max-w-custom mx-auto flex items-center justify-between
       gap-12"
        >
          <div className="flex items-center gap-4 md:gap-8 lg:gap-16 ">
            <Link to={"/"} className="flex items-center gap-2">
              <img
                src="https://avada.website/real-estate/wp-content/uploads/sites/176/2023/10/avada-real-estate-favicon.svg"
                alt=""
                className="w-8"
              />
              <span className="text-2xl md:text-2xl family2 text-dark">
                ZyncLuxury
              </span>
            </Link>
            <label
              style={{
                transition: "all .4s",
              }}
              htmlFor="search"
              className="relative w-[200px] md:w-[300px]"
            >
              <input
                type="text"
                id="search"
                value={country}
                name="country"
                onChange={(e) => {
                  // handleCountryData(e);
                  setCountry(e.target.value);
                }}
                placeholder="New York (USA)"
                className="w-full  rounded-md inputs text-dark font-normal text-sm"
              />
              <div
                onClick={() => {
                  dispatch(
                    handleFilterState({
                      type: "country",
                      value: country,
                    })
                  );
                }}
                className="w-10 flex items-center justify-center text-lg h-10 text-dark absolute right-5 top-1"
              >
                <BiSearch />
              </div>
            </label>
          </div>
          <div className="hidden lg:flex items-center justify-center gap-8 lg:gap-16 ">
            <div className=" lg:flex hidden items-center gap-4">
              {linkData?.map((list, index) => {
                return (
                  <NavLink
                    end
                    to={`/${list.path}`}
                    key={index}
                    className={`text-sm hover:text-grey font-normal family1 text-dark flex items-center
                     gap-2 p-3 px-3 rounded-[40px]`}
                  >
                    {/* <img src={list?.icon} className="w-4" alt="" /> */}
                    {list?.title}
                  </NavLink>
                );
              })}
            </div>
            <div className=" items-center flex justify-end">
              {currentUser ? (
                <div className="flex items-center gap-8">
                  <Link
                    to={`/become-a-host/${currentUser?.id}`}
                    className="btn text-center text-base md:block hidden  regular text-white px-4 md:px-8 py-3"
                  >
                    Host your Home
                  </Link>
                  <Profile setBar={setBar} />
                </div>
              ) : (
                <div className="flex justify-end items-center">
                  <button
                    onClick={() => dispatch(onLoginModal())}
                    className="btn min-w-[100px] text-center text-sm regular text-white px-4 py-3"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FilterRooms = () => {
  // filtered states
  const [country, setCountry] = useState("");
  const [typeindex, setTypeIndex] = useState(null);
  const [bar, setBar] = React.useState(false);
  // modal
  const [property, setProperty] = useState(false);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        backdropFilter: "blur(14px)",
      }}
      className="bg-[#ffffffb0] w-full flex flex-col py-2"
    >
      <div
        // onClick={() => setProperty(false)}
        className="w-[95%] max-w-custom mx-auto z-40 flex flex-col md:items-center justify-between
       gap-8"
      >
        <div className="flex items-center flex-col  gap-4">
          {/* Type */}
          <div className="relative">
            <div
              onClick={() => setProperty(!property)}
              className={`flex px-2 border py-2  rounded-full items-start gap-2 text-sm cursor-pointer family2`}
            >
              Property Type
            </div>
            {property && (
              <div className="w-[450px] flex flex-col gap-4 bg-white rounded-xl absolute top-[130%] p-6 shadow-xl">
                <div className="px-2 w-full">
                  <h4 className="text-lg family2">Popular Property Type</h4>
                </div>
                <div className="w-full grid grid-cols-3 gap-4">
                  {propertytype?.map((props, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => {
                          setTypeIndex(index);
                          dispatch(
                            handleFilterState({
                              type: "type",
                              value: props?.value,
                            })
                          );
                          setProperty(false);
                        }}
                        className={`p-4 cursor-pointer ${
                          typeindex === index
                            ? "border-2 border-[#000]"
                            : "border"
                        } w-full rounded-xl flex items-center justify-center flex-col gap-2`}
                      >
                        <div className="w-14 h-14 rounded-lg bg-[#fafafa] flex items-center justify-center">
                          <img src={props?.image} alt="" className="w-6" />
                        </div>
                        <h5 className="text-sm family2">
                          {props?.name}
                        </h5>
                      </div>
                    );
                  })}
                </div>
                {/* <div className="asbolute bottom-0 w-full">
                  <div className="w-full pt-4 border-t flex items-center justify-end">
                    <div className="btn px-8 text-sm text-white py-2">
                      Apply
                    </div>
                  </div>
                </div> */}
              </div>
            )}
          </div>
          {/* price */}
          <div className="relative">
            <div className="flex px-4 py-2 border rounded-full items-start gap-2 text-sm cursor-pointer family2">
              Any Price
            </div>
          </div>
          {/* bedrooms */}
          <div className="relative">
            <div className="flex px-4 py-2 border rounded-full items-start gap-2 text-sm cursor-pointer family2">
              Bed
            </div>
          </div>

          {/* bathrooms */}
          <div className="relative">
            <div className="flex px-4 py-2 border rounded-full items-start gap-2 text-sm cursor-pointer family2">
              Bath Rooms
            </div>
          </div>
        </div>

        {/* <div className=" md:px-4 flex items-center md:justify-end">
          <button className="btn text-white flex items-center gap-4 family1 family2 px-6 text-sm lg:text-base lg:px-6 py-3">
            <BiSearch /> Search Homes
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
