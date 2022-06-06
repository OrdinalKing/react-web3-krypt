require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.14',
  networks: {
    ropsten: {
      url: 'https://ropsten.infura.io/v3/641c60a1565a434cbf52433a9da2d319',
      accounts: ['db9fccf429bd129406475401bf95ebc4c0f3f38ddff3ad0b90c4f832856bc721']
    }
  }
}