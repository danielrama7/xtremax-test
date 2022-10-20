import React, { useState } from "react";
import marker from "../img/Marker.png";
import { useSelected } from "../context/context";

function Marker({ placeName, placeInfo }) {
  const [hoverPlace, setHoverPlace] = useState(false);
  const selectedContext = useSelected();
  const { selected, HandlerSelected, selectedOnMenu, HandlerSelectedOnMenu } =
    selectedContext;

  const handlerHoverPlace = () => {
    setHoverPlace(!hoverPlace);
  };
  return hoverPlace || selected.placeName === placeName ? (
    <div
      className="z-10 absolute flex items-end justify-center cursor-pointer"
      onMouseLeave={handlerHoverPlace}
      onClick={() => HandlerSelected(placeInfo)}
    >
      <img src={marker} className="absolute h-[172px]" />
      <div className="absolute py-4 -top-40 -left-11 h-[88px] min-w-[120px] w-max bg-[#92D72E] rounded-l-full pl-14 pr-4 grid gap-0 items-center">
        <p className="text-white font-semibold text-left text-lg">
          {placeName}
        </p>
        <p className="text-white text-left">{selected.location}</p>
      </div>
    </div>
  ) : (
    <div
      className="absolute flex items-end justify-center cursor-pointer"
      onMouseEnter={handlerHoverPlace}
    >
      <img src={marker} className="absolute" />
      <div className="absolute -top-16 -left-4 h-[30px] w-max bg-[#282C37] rounded-l-full px-4 flex items-center">
        <p className="text-white font-semibold text-left">{placeName}</p>
      </div>
    </div>
  );
}

export default Marker;
