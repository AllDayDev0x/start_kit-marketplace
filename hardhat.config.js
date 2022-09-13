require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/8KNx5j9eeU5L2LJa4-jPEFh6en98mOaG",
      accounts: ["your privateKey"],
    },
    
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  etherscan:{
    apiKey:"TBJIPPMF9E8ZJHPU93WP8SITUWGUSPCRUQ"
  }
}
