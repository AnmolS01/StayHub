const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Listing = require("./Models/listing.js"); // Ensure the correct path to the model
const app = express();

const PORT = 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Connection to Database
const MONGO_URL = "mongodb://127.0.0.1:27017/StayHubReact";
async function main() {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

main();

// Basic route
app.get("/", (req, res) => {
  res.send("Hi, Backend is Running");
});

// Fetch all listings
app.get("/listing", async (req, res) => {
  try {
    const allListings = await Listing.find({});
    res.json(allListings);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch listings" });
  }
});

// Starting and running the server
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
