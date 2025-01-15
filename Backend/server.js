/* eslint-disable no-undef */
const express = require('express');
const cors = require("cors")
const app = express();
const port = process.env.PORT || 8000;

const corsoptions = {

  origin: "http://localhost:5173", 
  methods:["POST"],
  credentials:true
}

// Middleware to parse JSON requests
app.use(cors(corsoptions));
app.use(express.json());
app.use(express.urlencoded({extended:  true}))

// Basic route
app.use("/api/v1/portfolio",require('./routers/portfolio'))

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
