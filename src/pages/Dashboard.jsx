import React from "react";
import browse from "../img/Browse.png";
import attraction from "../img/Attraction.png";
import videos from "../img/Videos.png";
import blog from "../img/Blog.png";
import about from "../img/About.png";

function Dashboard() {
  return (
    <aside className="w-[150px] h-screen bg-[#313541] z-30">
      <div className="w-full h-[125px] bg-[#72CDD2] grid content-center justify-items-center text-white px-8">
        <img src={browse} className="" />
        <p className="font-bold">Browse</p>
      </div>
      <div className="w-full h-[125px] grid content-center justify-items-center text-[#8298A0] px-8 border-b border-[#2C3031]">
        <img src={attraction} className="" />
        <p className="leading-none">Suggest Attraction</p>
      </div>
      <div className="w-full h-[125px] grid content-center justify-items-center text-[#8298A0] px-8 border-b border-[#2C3031]">
        <img src={videos} className="" />
        <p>Videos</p>
      </div>
      <div className="w-full h-[125px] grid content-center justify-items-center text-[#8298A0] px-8 border-b border-[#2C3031]">
        <img src={blog} className="" />
        <p>Blog</p>
      </div>
      <div className="w-full h-[125px] grid content-center justify-items-center text-[#8298A0] px-8 border-b border-[#2C3031]">
        <img src={about} className="" />
        <p>About</p>
      </div>
    </aside>
  );
}

export default Dashboard;
