import React from "react";
import Dashboard from "./Dashboard";
import Header from "./Header";
import Menu from "./Menu";
import DisplayMap from "./DisplayMap";

function MainPage() {
  return (
    <div>
      <div className="flex">
        <Dashboard />
        <Menu />
        <div className="w-[1420px]">
          <div className="w-full z-10">
            <Header />
          </div>
          <div className="w-full">
            <DisplayMap />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
