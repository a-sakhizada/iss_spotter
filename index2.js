const { nextISSTimesForMyLocation } = require("./iss_promised");

const printPassTimes = function (passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => { //error handling calback
    console.log("It didn't work: ", error.message);
  });

  //note: Now, if there is ever an error anywhere along our 
  //        chain of promises, execution will jump to our catch callback instead.