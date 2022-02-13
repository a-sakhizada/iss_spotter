//will run and require our main fetch function
const { fetchMyIP } = require("./iss");

fetchMyIP((error, ip) => {

    if(error){
        console.log("it didnt work", error);
        return;
    }

    console.log("it worked! Returned IP: ", ip);
});
