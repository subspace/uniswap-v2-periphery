require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-toolbox");
require("dotenv/config");

module.exports = {
    networks: {
      nova: {
        url: "https://nova-0.gemini-3h.subspace.network/ws",
        accounts: [process.env.PRIVATE_KEY],
        chainId: 490000,
      }
    },
    solidity: {
      compilers: [
        {
          version: "0.5.0",
        },
        {
          version: "0.5.16",
        },
        {
          version: "0.6.2",
          settings: {},
        },
        {
          version: "0.6.6",
          settings: {},
        },
      ],
    },
    etherscan: {
        apiKey: {
          nova: ` `,
        },
        customChains: [
          {
            network: 'nova',
            chainId: 490000,
            urls: {
              apiURL: 'https://nova.gemini-3h.subspace.network/api',
              browserURL: 'https://nova.gemini-3h.subspace.network/',
            },
          },
        ],
      },
  };
  