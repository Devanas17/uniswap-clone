require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/szWoy3duuzUV8FZ-r_4sprU6hC0F3QHg',
      accounts: ['91009598924499a6af0581c06ebe2efbb3b4825f6b7880f5b2360f266b6f0d24'],
    }
  }
};
