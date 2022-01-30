require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb force trip maple note praise proud harvest lobster food gentle'; 
let testAccounts = [
"0xe0380ff6528328cadad8bd9e3d945a2d61f9d61b5c70c2cce55443933ec5b542",
"0x229eec200a39893585d1b5197ed02562ff9e64145ccc1bf9b9c86d20fad6a6de",
"0x12cfae0ac95003f5d104eb3c758ebfa6e46e13abcfc696ee8794ca969fbad053",
"0x96df63a396886314f8f1d55756e6cd8cf4f6eebb32c3342162096b9ab82fe3e3",
"0x55ce469150081e25d42bf5bc3edbbd3cd035a676ff8c16a3bc495d72a89efc0b",
"0x1360d374f6e7ff43fa25296d1e87a791c66017cb53942154a9d9fd61e5072f09",
"0xe0dfe73f13447539a3993ec6f286593fc56808448582b862fb6cb029c628586b",
"0xf8c859a112625b776d8bf712244aca61702140347d7b9629b9b291c7daa00d69",
"0xb3ca88bb34e16b6d112c91b55a1566be6392648d54b8f43961efcb6b7a3c7688",
"0x7815c93a62ee8fb606bd7588309e727c7477d61b24740a0184dbcc821fd807aa"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


