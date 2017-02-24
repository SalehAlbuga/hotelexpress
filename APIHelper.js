
'use strict'

const request = require('request-promise-native');
const CONFIG = require('./config.js')

module.exports = class APIHelper {
    static getHotelsDeals(dest, checkinDate, length, minRating) {
       return new Promise(function(resolve, reject) {
            var options = {
                uri: CONFIG.hotelsAPI,
                qs: {
                    productType : "Hotel",
                    uid : "foo",
                    page : "foo",
                    scenario : "deal-finder",
                    destinationName : dest,
                    minTripStartDate : ":" + checkinDate,
                    lengthOfStay : length,
                    minStarRating : minRating
                },
                json: true // Automatically parses the JSON string in the response 
            };
            // console.log('url == ' + options.uri + ' DEST == ' + dest + ' DATE2 == ' + startDate);
            request(options)
            .then(function (deals) {
                resolve(deals);    
            })
            .catch(function (err) {
                reject(err);
            });
        });
    }
}