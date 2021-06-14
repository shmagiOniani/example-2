import React, { useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  mapDiv: {
    height: 500,
  },
});

const MapComponent = () => {
  const classes = useStyles();
  const [zoom, setZoom] = useState(13);
  const [position, setPosition] = useState([51.505, -0.09]);

  return (
    <div>map</div>
    // <MapContainer center={position} zoom={zoom} className={classes.mapDiv}>
    //   <TileLayer
    //     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //     url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
    //   />
    //   <Marker position={position}>
    //     <Popup>
    //       A pretty CSS3 popup. <br /> Easily customizable.
    //     </Popup>
    //   </Marker>
    // </MapContainer>
  );
};

export default MapComponent;
