const MyNFT = artifacts.require("NFTyuda");

module.exports = function (deployer) {
  deployer.deploy(MyNFT);
};
