const HDWalletProvider = require('@truffle/hdwallet-provider');

const privateKey = '7b957c3320b8c98cd054b1a5909238f80ce274c26d622aa316913349c615d5cf';
const infuraApiKey = '195a037c8ede4b96bb0275f3fa638742';

module.exports = {
  networks: {
    goerli: {
      provider: () => new HDWalletProvider(privateKey, `https://goerli.infura.io/v3/${infuraApiKey}`),
      network_id: 5, // Network ID of Goerli
      gasPrice: 1000000000, // Gas price used for transactions (in wei)
      gas: 8000000, // Gas limit per transaction
      timeoutBlocks: 200, // Timeout in blocks for network operations
      skipDryRun: true, // Skip dry run before migrations
      networkCheckTimeout: 1000000, // Network check timeout (in milliseconds)
    },
  },

  // Configure compilers
  compilers: {
    solc: {
      version: '0.8.0', // Compiler version
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },

  // Configure plugins
  plugins: [],

  // Specify other settings
  api_keys: {
    etherscan: '', // Etherscan API key (optional)
  },
};
