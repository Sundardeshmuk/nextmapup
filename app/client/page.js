import React, { useState } from 'react';

const Client=(props)=> {
  const [mapurl,setmapurl]=useState("");

  return (
    <div>
      <h1>client{props.mapurl}</h1>
    </div>
  )
}

export default Client
