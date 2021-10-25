"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fetch = require("node-fetch");
fetch("https://api.bscscan.com/api?module=contract&action=getabi&address=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&apikey=WXUXV7MV1W7Q55FTPV3ZDPN3R8WFMQJ86A")
    .then(function (resp) {
    resp.json();
}).then(function (data) {
    console.log(JSON.parse(data.result));
});
//# sourceMappingURL=problem4.js.map