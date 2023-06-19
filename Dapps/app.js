const express = require('express');
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define the routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/mint-nft', (req, res) => {
  // Logic for minting NFT
  res.send('NFT minted successfully');
});

app.get('/stake-token/:tokenId', (req, res) => {
  // Logic for staking token
  res.send('Token staked successfully');
});

app.get('/unstake-token/:tokenId', (req, res) => {
  // Logic for unstaking token
  res.send('Token unstaked successfully');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
