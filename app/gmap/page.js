"use client"
import React from 'react'
import { GoogleMap,Marker,useLoadScript } from "@react-google-maps/api";
import { useMemo } from 'react';
const  Page=()=> {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey:"AIzaSyBaD1P0xqD33Hqq159hrFU5oY5oPIQUzqU" ,
      });
      const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
      
  return (
    <div>
        
       {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        mapContainerClassName="map-container"
        center={center}
        zoom={10}
      >
        <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
      </GoogleMap>
      )}
    </div>
  )
}

export default Page
