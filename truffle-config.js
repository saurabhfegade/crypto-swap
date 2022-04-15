var HDWalletProvider = require("truffle-hdwallet-provider");
require("babel-register");
require("babel-polyfill");

const MNEMONIC = process.env.MNEMONIC;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
          MNEMONIC,
          "https://rinkeby.infura.io/v3/992f0efc79f64bee82609722d3c68057"
        );
      },
      network_id: 4,
      gas: 4000000, //make sure this gas allocation isn't over 4M, which is the max
    },
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: "petersburg",
    },
  },
};
