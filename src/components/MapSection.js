import "../assets/scss/components/MapSection.scss";
import "leaflet-gesture-handling/dist/leaflet-gesture-handling.css";
import "leaflet/dist/leaflet.css";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { GestureHandling } from "leaflet-gesture-handling";
import L from "leaflet";
import iconUrl from "../assets/images/Map/Marker.svg";
import ContactsList from "../data/ContactsList.json";

export function MapSection() {
  const url =
    "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png";
  const settings = {
    center: [48.7610168, 30.5373693],
    zoom: 7,
    gestureHandling: true,
  };
  const customIcon = new L.Icon({
    iconUrl: iconUrl,
    iconSize: [52, 78],
    iconAnchor: [0, 73],
    popupAnchor: [26, -72],
  });

  return (
    <section id="mapSection">
      <div className="container">
        <h2 className="title">Контакти</h2>
      </div>{" "}
      <div className="map-wrap">
        <MapContainer {...settings}>
          <TileLayer attribution="OpenStreetMap" url={url} />
          {ContactsList.mainAdress
            .concat(ContactsList.additional)
            .map((el, index) => {
              return (
                <Marker position={el.coor} icon={customIcon} key={index}>
                  <Popup>
                    {el.street ? el.street : el.location}
                    <p>{el.adress}</p>
                  </Popup>
                </Marker>
              );
            })}
        </MapContainer>
      </div>
    </section>
  );
}
