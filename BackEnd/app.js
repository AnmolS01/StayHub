const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Middleware to handle Cross-Origin Resource Sharing (CORS)
const Listing = require("./Models/listing.js");
const app = express(); // initializing express application

// Middleware
app.use(cors());
app.use(express.json()); // parse the JSON payloads.

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

const PORT = 8080;
// Starting and running the server
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});

// Fetch all listings
app.get("/listings", async (req, res) => {
  try {
    const allListings = await Listing.find({});
    res.json(allListings);
  } catch (error) {
    console.error("Error fetching all listings:", error);
    res.status(500).json({ error: "Failed to fetch listings" });
  }
});

// Fetch a specific listing
app.get("/listings/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const listingDetail = await Listing.findById(id);
    res.json(listingDetail);
  } catch (error) {
    console.error("Error fetching listing:", error);
    res.status(500).json({ error: "Failed to fetch listing" });
  }
});

// Add a new listing
app.post("/listings/addNewListing", async (req, res) => {
  try {
    const listingData = Object.assign({}, req.body); // Create a copy of req.body
    const newListing = new Listing(listingData);
    const savedListing = await newListing.save();
    res.status(201).json(savedListing);
    console.log("New listing added:", savedListing);
  } catch (error) {
    console.error("Error adding new listing:", error);
    res.status(500).json({ error: "Failed to add new listing" });
  }
});

// Update a listing
app.put("/listings/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedListing = await Listing.findByIdAndUpdate(id, req.body);
    res.status(200).json(updatedListing);
    console.log("Data updated successfully!", updatedListing);
  } catch (error) {
    console.error("Error updating listing:", error);
    res.status(500).json({ error: "Failed to update listing" });
  }
});

// deleting Specific listing
app.delete("/listings/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteListing = await Listing.findByIdAndDelete(id);
    res.status(201).json(deleteListing);
    console.log("Listing deleted Successfully", deleteListing);
  } catch (error) {
    console.status(500).json(error, "delete listing failed!");
  }
});

/* req.params:

In Express.js, req.params is an object that contains route parameters from the URL. For example, if your route is defined as /listings/:id, and a client requests /listings/123, then req.params would be { id: '123' }. */
