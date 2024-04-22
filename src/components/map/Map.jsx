import React from "react";
import "./map.scss";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Pin from "./pin/Pin";
const Map = ({ items }) => {
  const position = [51.5074, -0.1278];
  // items.length > 1
  //   ? [items[1].latitude, items[1].longitude]
  //   : [items[0].latitude, items[0].longitude];

  return (
    <MapContainer
      center={position}
      zoom={7}
      scrollWheelZoom={true}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin key={item.id} item={item} />
      ))}
    </MapContainer>
  );
};

export default Map;
