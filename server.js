// server.js

const express = require('express');
const axios = require('axios');
const app = express();
//const port = 3000;

const port =  3000;
const apiUrl = 'https://www.bookmyforex.com/api/secure/v1/get-full-rate-card?city_code=KOL';
const cors = require('cors');
app.use(cors());


// Define a route to fetch the data
app.get('/api/get-rate-card', async (req, res) => {
  try {
    const response = await axios.get(apiUrl);
    res.json(response.data);
    
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
