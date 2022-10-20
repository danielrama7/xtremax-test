import React from "react";
import { useSelected } from "../context/context";
import location from "../img/Location.png";
import link from "../img/Link.png";

function PopUp() {
  const selectedContext = useSelected();
  const { selected, HandlerSelected, selectedOnMenu, HandlerSelectedOnMenu } =
    selectedContext;

  return selected.placeName ? (
    <aside className="absolute z-10 h-screen w-[349px] bg-[#313541] right-0 break-words overflow-y-auto">
      <img
        src={selected.image}
        className="mt-[125px] w-full h-[244px] object-cover"
      />
      <div className="w-full min-h-[50px] px-9 bg-[#72CDD2] flex items-center">
        <p className="font-semibold text-white text-left text-xl ">
          {selected.placeName}
        </p>
      </div>
      <div className="w-full px-9 py-6 text-[#CCCCCC] text-left">
        <p className="mb-10">{selected.description}</p>
        <div className="w-full flex gap-3 mb-5 items-center">
          <img src={location} className="w-3 h-4 mt-1" />
          <p>{selected.location}</p>
        </div>
        <div className="w-full flex gap-3 items-center">
          <img src={link} />
          <p>{selected.link}</p>
        </div>
      </div>
    </aside>
  ) : null;
}

export default PopUp;
