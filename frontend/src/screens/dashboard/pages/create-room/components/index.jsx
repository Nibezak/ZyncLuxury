"use client";
import React, { useState, useEffect } from "react";
import RoomForms from "./roomsform";
import RoomDetail from "./roomdetail";
import { useDispatch, useSelector } from "react-redux";
import {
  CreateRoom,
  getSingleRooms,
  UpdateRoom,
} from "@/features/room/roomReducer";
import Loader from "@/components/home/loader";
import { useNavigate, useParams } from "react-router-dom";
import { handleClearRoomAlert } from "@/features/room/roomSlice";
const DashboardIndex = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [guests, setGuests] = useState(0);
  const [cautionfee, setCautionFee] = useState(0);
  const [city, setCity] = useState("");
  const [images, setImages] = useState([]);

  const [features, setFeatures] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [rooms, setRooms] = useState(0);
  const [bathrooms, setBathRooms] = useState(0);
  const [description, setDescription] = useState("");
  const [shortdescription, setShortDescription] = useState("");

  const dispatch = useDispatch();
  const {
    creatingRoomisSuccess,
    room,
    getsingleRoomisLoading
  } = useSelector((store) => store.room);
  // get the room id
  const { id } = useParams();

  useEffect(() => {
    dispatch(handleClearRoomAlert());
    if (id) {
      dispatch(getSingleRooms(id));
    }
  }, [id]);

  useEffect(() => {
    if (room) {
      setTitle(room?.title);
      // setPrice(room?.price);
      setPrice(room?.price ? parseInt(room?.price.replace(/,/g, "")) : 0);
      setCity(room?.city);
      setDescription(room?.description);
      setImages(room?.images);
      setBathRooms(room?.bathroom);
      setRooms(room?.bedroom);
      setGuests(room?.guests)
      // setCautionFee(room?.cautionfee)
      setCautionFee(room?.cautionfee ? parseInt(room?.cautionfee.replace(/,/g, "")) : 0);
      // dispatch(getSingleRooms(room));
    } else {
      setTitle("");
      setPrice("");
      setCity("");
      setDescription("");
      setImages([]);
      setBathRooms("");
      setRooms("");
      setCautionFee(0)
      setGuests(0)
    }
  }, [
    room,
    setTitle,
    setRooms,
    setPrice,
    setDescription,
    setImages,
    setBathRooms,
    setCautionFee,
    setGuests
  ]);
  const roomData = {
    title: title,
    price: price.toString(),
    images: images,
    city: city,
    features: features,
    bedroom: rooms,
    bathroom: bathrooms,
    description: description,
    cautionfee: cautionfee?.toString(),
    guests: guests
  };
  // console.log(roomData);
  const handleRoomCreation = () => {
    if (room) {
      dispatch(
        UpdateRoom({
          ...roomData,
        })
      );
    } else {
      dispatch(CreateRoom(roomData));
    }
  };

  useEffect(() => {

    if (creatingRoomisSuccess) {
      const timeout = setTimeout(() => {
        navigate(`/dashboard/rooms`);
      }, 700);

      return () => clearTimeout(timeout);
    }
  }, [creatingRoomisSuccess, navigate]);
  if (getsingleRoomisLoading) {
    return <Loader />
  }
  return (
    <div className="w-full relative">
      <div className="w-full relative pb-20 flex flex-col gap-12">
        <div className="w-full grid md:grid-cols-2 md:items-center gap-4 justify-between">
          <h3 className="text-3xl lg:text-4xl font-booking_font4 font-bold">
            {room ? "Update Your room" : "Add Your Room"}
            <span className="block font-normal text-dark pt-2 text-base font-booking_font">
              Create, edit and modify your rooms.
              Complete the forms below and click update room.
            </span>
          </h3>
        </div>
        <div className="w-full relative flex gap-8 flex-col-reverse lg:grid items-start lg:grid-cols-custom">
          <RoomForms
            description={description}
            setTitle={setTitle}
            title={title}
            setDescription={setDescription}
            setShortDescription={setShortDescription}
            shortdescription={shortdescription}
            setPrice={setPrice}
            price={price}
            rooms={rooms}
            setCautionFee={setCautionFee}
            cautionfee={cautionfee}
            setRooms={setRooms}
            setBathRooms={setBathRooms}
            bathrooms={bathrooms}
            setImages={setImages}
            images={images}
            features={features}
            setFeatures={setFeatures}
            setAmenities={setAmenities}
            amenities={amenities}
            city={city}
            setCity={setCity}
            setGuests={setGuests}
            guests={guests}
          />
          <div className="w-full md:w-[350px] relative lg:sticky top-[15%] left-0">
            <RoomDetail
              images={images}
              title={title}
              price={price}
              rooms={rooms}
              cautionfee={cautionfee}
              bathrooms={bathrooms}
              shortdescription={shortdescription}
              handleRoomCreation={handleRoomCreation}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardIndex;
