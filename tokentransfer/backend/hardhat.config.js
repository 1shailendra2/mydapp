/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
const { PRIVATE_KEY, RPC_URL } = process.env;
module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia:{
      url:process.env.RPC_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
