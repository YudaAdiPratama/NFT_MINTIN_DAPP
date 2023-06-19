pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721, Ownable {
    uint256 public tokenCounter;
    mapping(uint256 => bool) public tokenStaked;
    
    constructor() ERC721("NFTyuda", "NFTyuda") {
        tokenCounter = 0;
    }

    function mintNFT() external onlyOwner returns (uint256) {
        uint256 tokenId = tokenCounter;
        _safeMint(msg.sender, tokenId);
        tokenCounter++;
        return tokenId;
    }
    
    function stakeToken(uint256 _tokenId) external {
        require(_exists(_tokenId), "Token does not exist");
        require(ownerOf(_tokenId) == msg.sender, "You are not the owner of the token");
        require(!tokenStaked[_tokenId], "Token is already staked");

        // Perform the staking logic here

        tokenStaked[_tokenId] = true;
    }

    function unstakeToken(uint256 _tokenId) external {
        require(_exists(_tokenId), "Token does not exist");
        require(ownerOf(_tokenId) == msg.sender, "You are not the owner of the token");
        require(tokenStaked[_tokenId], "Token is not staked");

        // Perform the unstaking logic here

        tokenStaked[_tokenId] = false;
    }
}
