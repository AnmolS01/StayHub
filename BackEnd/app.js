const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Listings = require("./Models/listing"); // ensure the file name and path.
const app = express();

const PORT = 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Starting and running the server
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});

// Connection to Database
const MONGO_URL = "mongodb://127.0.0.1:27017/StayHubReact";
async function main() {
  try {
    await mongoose.connect(MONGO_URL);
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
app.get("/listings", async (req, res) => {
  try {
    const allListings = await Listings.find({});
    res.json(allListings);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch listings" });
  }
});

app.get("/listings/:id", async (req, res) => {
  try {
    let { id } = req.params;
    const listingDetail = await Listings.findById(id);
    res.json(listingDetail);
    console.log(listingDetail);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch listing" });
  }
});
