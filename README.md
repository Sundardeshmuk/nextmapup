This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<!-- ////// Tolls between origin, destination, and waypoints (if any) //// -->
const request = require('request');

const options = {
  method: 'POST',
  url: 'https://apis.tollguru.com/toll/v2/origin-destination-waypoints',
  headers: {'content-type': 'application/json', 'x-api-key': 'REPLACE_KEY_VALUE'},
  body: {
    from: {address: 'Philadelphia , Pennsylvania,', lat: 39.95209, lng: -75.16219},
    to: {address: 'New York ,NY,', lat: 40.71455, lng: -74.00715},
    waypoints: [{address: 'Bridgewater Township , New Jersey'}],
    serviceProvider: 'here',
    vehicle: {
      type: '2AxlesTaxi',
      weight: {value: 20000, unit: 'pound'},
      height: {value: 7.5, unit: 'meter'},
      length: {value: 7.5, unit: 'meter'},
      axles: 4,
      emissionClass: 'euro_5'
    }
  },
  json: true
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

<!-- ////////// google map-->
#google-map key:->   AIzaSyBaD1P0xqD33Hqq159hrFU5oY5oPIQUzqU
 src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&llback=initMap"

