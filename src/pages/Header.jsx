import React from "react";
import close from "../img/Close.png";
import quest from "../img/Quest.png";
import options from "../img/Options.png";

function Header() {
  return (
    <div>
      <header className="h-[125px] bg-[#F4F7FA] w-[1420px] px-16 flex items-center justify-between">
        <h1 className="text-left font-bold text-[#282C37] text-2xl">
          TOP-RATED TOURIST ATTRACTIONS IN SINGAPORE
        </h1>
        <div className="flex justify-between w-[135px]">
          <img src={options} />
          <img src={quest} />
          <img src={close} />
        </div>
      </header>
    </div>
  );
}

export default Header;
