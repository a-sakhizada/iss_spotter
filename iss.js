//contain most of the logic for fetching the data from each API endpoint
const request = require("request");

//step 1: fetch our public IP address (later help us locate us geographically)
//define function which will asynchrously return our IP address using an API

/**
 * Makes a single API request to retrieve the user's IP address.  (ipify.org)
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function (callback) {
  //use request to fetch IP address from JSON API
  //step 2: find the URL for retrieving our IPv4 IP address in JSON format

  request("https://api.ipify.org/?format=json", (error, response, body) => {
    // console.log("error: ", error);
    // console.log("status code: ", response && response.statusCode);
    // console.log("body: ", body);

    // inside the request callback ...
    // error can be set if invalid domain, user is offline, etc.
    if (error) return callback(error, null);

    //if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `status code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    //if we got here, then all is well and we got the data
    let ip = JSON.parse(body).ip;
    callback(error, ip);
  });
};

/**
 * Makes a single API request to retrieve the lat/lng for a given IPv4 address.
 * Input:
 *   - The ip (ipv4) address (string)
 *   - A callback (to pass back an error or the lat/lng object)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The lat and lng as an object (null if error). Example:
 *     { latitude: '49.27670', longitude: '-123.13000' }
 */
const fetchCoordsByIP = function (ip, callback) {
  request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
    // inside the request callback ...
    // error can be set if invalid domain, user is offline, etc.

    if (error) {
      callback(error, null);
      return;
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    // if we get here, all's well and we got the data

    //   let data = {
    //     latitude: JSON.parse(body).latitude,
    //     longitude: JSON.parse(body).longitude,
    //   };

    const { latitude, longitude } = JSON.parse(body);

    callback(null, { latitude, longitude });
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP };
