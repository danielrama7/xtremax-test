import React from "react";

function Menu() {
  return (
    <div className="z-20 w-[350px] h-screen bg-[#282C37] text-[#8298A0] px-6 border-l border-[#20232C] shadow-[1px_2px_17px_-1px_rgba(0,0,0,0.65)]">
      <div className="w-full h-[125px] border-b border-[#242832] pt-10">
        <div className="border border-[#242832] flex justify-between pr-4 pl-9 py-2">
          <p>Filter by favorite</p>
          <p>img</p>
        </div>
      </div>
      <div className="h-[60px] border-b border-[#242832] py-[10px]">
        <div className="bg-[#1C1F27] pl-9 py-2">
          <p className="text-left font-bold text-[#92D72E]">Merlion</p>
        </div>
      </div>
      <div className="h-[180px] border-b border-[#242832] py-4 pr-4 pl-9">
        <div className="flex justify-between mb-4">
          <p className="font-bold text-white">Mariana Bay Sands</p>
          <p>img</p>
        </div>
        <div className="text-left pl-5">
          <p className="pb-4">ArtScience Museum</p>
          <p className="pb-4">Marina Bay Sands Skypark</p>
          <p className="pb-5">Double Helix Bridge</p>
        </div>
      </div>
      <div className="h-[60px] w-full border-b border-[#242832] py-[10px]">
        <div className="flex justify-between pr-4 pl-9 py-2">
          <span className="font-bold text-white">Garden by the Bay</span>
          <p>img</p>
        </div>
      </div>
      <div className="h-[60px] w-full border-b border-[#242832] py-[10px]">
        <div className="flex justify-between pr-4 pl-9 py-2">
          <p className="font-bold text-white">China town</p>
          <p>img</p>
        </div>
      </div>
      <div className="h-[60px] w-full border-b border-[#242832] py-[10px]">
        <div className="pr-4 pl-9 py-2">
          <p className="font-bold text-white text-left">
            Asian Civilisations Museum
          </p>
        </div>
      </div>
      <div className="h-[60px] w-full border-b border-[#242832] py-[10px]">
        <div className="pr-4 pl-9 py-2">
          <p className="font-bold text-white text-left">Clarke Quay</p>
        </div>
      </div>
      <div className="h-[60px] w-full border-b border-[#242832] py-[10px]">
        <div className="pr-4 pl-9 py-2">
          <p className="font-bold text-white text-left">Fort Canning Park</p>
        </div>
      </div>
      <div className="h-[60px] w-full border-b border-[#242832] py-[10px]">
        <div className="pr-4 pl-9 py-2">
          <p className="font-bold text-white text-left">Singapore Flyer</p>
        </div>
      </div>
      <div className="h-[60px] w-full border-b border-[#242832] py-[10px]">
        <div className="pr-4 pl-9 py-2">
          <p className="font-bold text-white text-left">Orchard Road</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
