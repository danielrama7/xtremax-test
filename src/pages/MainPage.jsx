import React from "react";
import Dashboard from "./Dashboard";
import Header from "./Header";
import Menu from "./Menu";
import DisplayMap from "./DisplayMap";
import PopUp from "./PopUp";

function MainPage() {
  return (
    <div>
      <div className="flex">
        <Dashboard />
        <Menu />
        <div className="w-[1420px]">
          <Header />
          <PopUp />
          <DisplayMap />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
