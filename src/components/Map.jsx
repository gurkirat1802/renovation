import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
    width: "100%",
    height: "400px",
};
const center = {
    lat: 43.8554,
    lng: -79.3218, 
};

const Map = () => {
    return (
        <LoadScript googleMapsApiKey="AIzaSyBTZeuFXqniqARjf6g5vlIqGZtQ5yj1GCY">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={10}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;