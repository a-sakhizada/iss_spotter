//will run and require our main fetch function
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("it didnt work", error);
//     return;
//   }

//   console.log("it worked! Returned IP: ", ip);
// });

// fetchCoordsByIP("162.2445.144.188", (error, coordinates) => {
//   if (error) {
//     console.log("it didnt work!", error);
//     return;
//   }
//   console.log("it worked! Returned coordinate: ", coordinates);
// });

fetchISSFlyOverTimes(
  { latitude: "49.27670", longitude: "-123.13000" },
  (error, passTimes) => {
    if (error) {
      console.log("it didnt work!", error);
      return;
    }
    console.log("it worked! Returned flyover times: ", passTimes);
  }
);
