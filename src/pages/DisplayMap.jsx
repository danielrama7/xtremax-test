import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "../component/Marker";
import { useSelected } from "../context/context";

function DisplayMap() {
  const [mapData, setMapData] = useState([]);
  const selectedContext = useSelected();
  const [zoom, setZoom] = useState(15);
  const [center, setCenter] = useState([1.295526, 103.845331]);
  const filterData = "merlian";
  const { selected, HandlerSelected, selectedOnMenu, HandlerSelectedOnMenu } =
    selectedContext;

  // fetch data from my github
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/danielrama7/xtremax-test/master/src/mapData/mapData.json"
    )
      .then((res) => res.json())
      .then((data) => setMapData(data.data));
    console.log(mapData.placeName);
  }, []);

  // get map data from JSON that match with data from selectedOnMenu
  useEffect(() => {
    if (selectedOnMenu) {
      const filterData = mapData.filter((map) =>
        map.placeName.includes(selectedOnMenu)
      );
      HandlerSelected(filterData[0]);
    }
  }, [selectedOnMenu]);

  // change map center and zoom when a mark is selected
  useEffect(() => {
    if (selected.placeName) {
      setCenter([selected.latitude, selected.longitude]);
      setZoom(17);
    }
  }, [selected.placeName]);

  return (
    <div className="relative h-screen w-[1420px]">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB1wCldJoZWl65B6desgUHzk_hIZRDw2BU" }}
        center={center}
        zoom={zoom}
      >
        {mapData.map((item, i) => (
          <Marker
            lat={item?.latitude}
            lng={item?.longitude}
            placeName={item?.placeName}
            placeInfo={item}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}
export default DisplayMap;
