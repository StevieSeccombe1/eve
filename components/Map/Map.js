import React from 'react';
import { MapContainer,TileLayer,Marker,Popup } from 'react-leaflet'

const Map = () => {
    return (
        <MapContainer center={[50.90084,-3.998519]} zoom={14} scrollWheelZoom={false} style={{height: "50%", width: "100%"}}>
            <Marker
                position={[50.90084,-3.998519]}
                draggable={true}
                animate={true}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Popup>
                    Stonechat Meadow
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map
