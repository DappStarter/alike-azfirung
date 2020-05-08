require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe food ski stock rule often comic install industry slot gift'; 
let testAccounts = [
"0xc30fc10233ae2531fda09b880d85348dac068136d63056e0d205974fe610aef7",
"0x312e2bdb96f179c8f78d31d452400163327092a4707391b5af82b830d524d6dc",
"0xbd312060699ac325a3d4614895ea8406e4a16c771135af8e7ca3c50abdba9df7",
"0x5aefd5a6b9d7cb3828d02d463f4dae033a3d92e76e20efe0ea154f2234071837",
"0x1ed227ea1a9f008d024ddcfc17d156a87f2ebfc2495dba0ce380a8025457b6fd",
"0xee73ac2464231f7680963a6a0af07aa939d43273129a47b07e2429191a44663f",
"0x424fb8d5d3ae785424d7766e8b2057978c49dfbaf57363ae11eedd202e154905",
"0x57b03b518fc559bcfd3ae950321dab6bf6add277f0f8b55f242cd83c6a69b792",
"0x7e1c8ed7683781ca13e38d655240ebd99d1a900c7bc951d80051501828641bc9",
"0x1a5b5b538c3c53a42c1f563be752efb9502111642afb985ac7ecccbc2858cafb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
