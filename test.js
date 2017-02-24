const assert = require('assert');
const API = require('/APIHelper.js');

 API.getHotelsDeals("London", "", "", "")
 .then(function (deals) {
    assert.ok(true);
 }).catch(function (error) {
    assert.ok(false);
 });

