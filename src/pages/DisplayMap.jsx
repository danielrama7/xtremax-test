import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "../component/Marker";
import mapDataAPI from "../api/mapData";
import { useSelected } from "../context/context";

function DisplayMap() {
  const [place, setPlace] = useState([]);
  const selectedContext = useSelected();
  const { selected, HandlerSelected } = selectedContext;
  useEffect(() => {
    const fetchPlace = async () => {
      const res = await mapDataAPI.getAll();
      setPlace(res.data.data);
    };
    fetchPlace();
    console.log(selected);
    HandlerZoom();
  }, [selected]);

  const [zoom, setZoom] = useState(15);
  const [lati, setLat] = useState(1.290555);
  const [lot, setLot] = useState(103.846188);

  const defaultProps = {
    center: {
      lat: lati,
      lng: lot,
    },
    zoom: 15,
  };
  const HandlerZoom = () => {
    setZoom(17);
    setLat(selected.latitude ? selected.latitude : 1.290555);
    setLot(selected.longitude ? selected.longitude : 103.846188);
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "86.7vh", width: "1420px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB1wCldJoZWl65B6desgUHzk_hIZRDw2BU" }}
        center={defaultProps.center}
        zoom={defaultProps.zoom}
        onClick={HandlerZoom}
      >
        {place.map((item, i) => (
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
