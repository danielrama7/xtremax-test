import React from "react";
import { Disclosure } from "@headlessui/react";
import { useSelected } from "../context/context";

function Menu() {
  // menus data
  const menus = [
    { label: "Merlion" },
    {
      label: "Marina Bay Sands",
      child: [
        "ArtScience Museum",
        "Mariana Bay Sands Skypark",
        "Double Helix Bridge",
      ],
    },
    {
      label: "Gardens By The Bay",
      child: [
        "ArtScience Museum",
        "Mariana Bay Sands Skypark",
        "Double Helix Bridge",
      ],
    },
    {
      label: "Chinatown",
      child: [
        "ArtScience Museum",
        "Mariana Bay Sands Skypark",
        "Double Helix Bridge",
      ],
    },
    { label: "Asian Civilisations Museum" },
    { label: "Clarke Quay" },
    { label: "Fort Canning Park" },
    { label: "Singapore Flyer" },
    { label: "Orchard Road" },
  ];
  const selectedContext = useSelected();
  const { selected, HandlerSelected, selectedOnMenu, HandlerSelectedOnMenu } =
    selectedContext;

  return (
    <dl className="z-20 w-[350px] h-screen bg-[#282C37] text-[#8298A0] px-6 border-l border-[#20232C] shadow-[1px_2px_17px_-1px_rgba(0,0,0,0.65)] overflow-y-auto">
      <div className="w-full h-[125px] border-b border-[#242832] pt-10">
        <div className="border border-[#242832] flex justify-between pr-4 pl-9 py-2">
          <p>Filter by favorite</p>
          <span>▼</span>
        </div>
      </div>

      {menus.map((item, i) =>
        item.child ? (
          <Disclosure>
            {({ open }) => (
              <dt
                className="min-h-[60px] border-b border-[#242832] py-4"
                onClick={() => HandlerSelectedOnMenu(item.label)}
              >
                <Disclosure.Button className="w-full">
                  <div
                    className={
                      (selected.placeName === item.label
                        ? "text-[#92D72E] bg-[#1C1F27] py-2"
                        : "text-white") +
                      " pl-9 pr-4 font-semibold flex justify-between"
                    }
                  >
                    <p>{item.label}</p>
                    <span>{open ? "▲" : "▼"}</span>
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel>
                  <dd className="text-left pl-14 mt-4">
                    {item.child.map((childItem, i) => (
                      <p className="pb-4">{childItem}</p>
                    ))}
                  </dd>
                </Disclosure.Panel>
              </dt>
            )}
          </Disclosure>
        ) : (
          <dt className="h-[60px] w-full border-b border-[#242832] py-4 cursor-pointer">
            <div
              onClick={() => HandlerSelectedOnMenu(item.label)}
              className={
                (selected.placeName === item.label
                  ? "text-[#92D72E] bg-[#1C1F27] py-2"
                  : "text-white") + " pr-4 pl-9 font-semibold"
              }
            >
              <p className="text-left">{item.label}</p>
            </div>
          </dt>
        )
      )}
    </dl>
  );
}

export default Menu;
