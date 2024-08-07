require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/7d6494978b0640baba69a97ac134a63f",
      accounts: [`0x87988525d1790fdfaf146610ebcdc888a502c494b1a8653ef9029cd17ccd19ad`]
    }
  }
};