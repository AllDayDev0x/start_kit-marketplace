require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/8KNx5j9eeU5L2LJa4-jPEFh6en98mOaG",
      accounts: ["8831346e17304578ca2ad5cb57541988e5f622172d150f59744a014cba9f5b0d"],
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