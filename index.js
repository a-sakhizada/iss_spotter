//will run and require our main fetch function
const { fetchMyIP, fetchCoordsByIP } = require("./iss");

fetchMyIP((error, ip) => {

    if(error){
        console.log("it didnt work", error);
        return;
    }

    console.log("it worked! Returned IP: ", ip);
});

fetchCoordsByIP("162.2445.144.188", (error, coordinates) => {
  if (error) {
    console.log("it didnt work!", error);
    return;
  }
  console.log("it worked! Returned coordinate: ", coordinates);
});
