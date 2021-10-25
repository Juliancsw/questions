import { ethers } from "ethers";

const https = require('https');
// var Web3 = require('web3');
// var web3 = new Web3(new Web3.providers.HttpProvider());
// var version = web3.version.api;

const address = "0x123d475e13aa54a43a7421d94caa4459da021c77";

const url = `https://api.bscscan.com/api?module=contract&action=getabi&address=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&apikey=WXUXV7MV1W7Q55FTPV3ZDPN3R8WFMQJ86A`;

https.get(url, res => {
    let data = '';
    let helper: Object = {};
    let abi = ''
    res.on('data', chunk => {
        data += chunk;
    });
    res.on('end', () => {
        helper = JSON.parse(data);
        abi = JSON.parse(helper['result']);
        const erc20 = new ethers.Contract(address, abi);
        console.log(erc20);
    })
    // const contractABI = res;

    // console.log(res.result);
    const erc20 = new ethers.Contract(address, res.result);
})