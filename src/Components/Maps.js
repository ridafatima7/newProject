import React,{useState} from 'react'
// import {GoogleApiWrapper} from 'google-maps-react';
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow,
}
from '@vis.gl/react-google-maps';
const Maps = () => {
    const position={lat:53.54,lng:10};
    const [open,setopen]=useState(false); 
  return (
    <div>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <div style={{height:'100vh',width:'100vh'}}>
            <Map zoon={9} center={position} mapId={process.env.NEXT_PUBLIC_MAP_ID}>
                <AdvancedMarker position={position} onClick={()=>setopen(true)}>
                    <Pin 
                      background={'grey'}
                      borderColor={'green'}
                      glyphColor={'purple'}
                    />
                </AdvancedMarker>
            </Map>
        </div>
        {open && (
           <InfoWindow position={position}>
            <p>Im at Islamabad</p>
           </InfoWindow>
        )}
      </APIProvider>
    </div>
  )
}

export default Maps
