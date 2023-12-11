import React from "react";
const request=require('request');
import Page from "../gmap/page";
// import { decode, encode } from "@googlemaps/polyline-codec";
const TollsBtnOriginDestination=()=> {
  
   let mapurl="ramanjjihij";
    // const GoogleMapApi="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
    // const city='latur';
    // const city1='pune';
    // const GoogleMapKey="AIzaSyBaD1P0xqD33Hqq159hrFU5oY5oPIQUzqU"
    const TollguruApi="https://apis.tollguru.com/toll/v2/origin-destination-waypoints"
    const TollguruKey ="mgNDpbH7qJtLLJnhb3FjJM2j9Tmnbtr3"
    // const GoogleMapUrl=`https://maps.googleapis.com/maps/api/direction/json?origin=${city}&destination=${city1}&key=${GoogleMapKey}`
    const TollguruUrl="https://dev.tollguru.com/v1/calc/route";

    

// const options = {
//   method: 'POST',
//   url: 'https://apis.tollguru.com/toll/v2/origin-destination-waypoints',
//   headers: {'content-type': 'application/json', 'x-api-key': 'mgNDpbH7qJtLLJnhb3FjJM2j9Tmnbtr3'},
//   body: {
//     from: {address: 'borgaon', lat:18.4447, lng: 75.2654},
//     to: {address: 'murudakola', lat: 18.3964, lng: 76.4086},
//     waypoints: [{address: 'ramegaon'}],
//     serviceProvider: 'google',
//     vehicle: {
//       type: '2AxlesTaxi',
//       weight: {value: 20000, unit: 'pound'},
//       height: {value: 7.5, unit: 'meter'},
//       length: {value: 7.5, unit: 'meter'},
//       axles: 4,
//       emissionClass: 'euro_5'
//     }
//   },
//   json: true
// };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);
// //   const encoded =body.routes[0].polyline;
// //   console.log(decode(encoded,5));
// //  mapurl=body.routes[0].summary.url;
//   console.warn(body);
// //   console.log(body.routes[0].summary.url);
// //   console.log(body.routes[0].summary.distance);
// //   distance: { text: '173 mi', metric: '278 km', value: 278858 },
// //   duration: { text: '4 h 56 min', value: 17781 },
// // console.log(body.routes[0].summary.distance.metric,"kilometer");
// // console.log(body.routes[0].summary.duration.text,"hr&min");
// //   console.log(gmapspolyline);
// });
    
    
  return (
    <div>
      <h1>TollsBtnOriginDestination</h1>      
     <Page/>
    </div>
  )
}

export default TollsBtnOriginDestination;





