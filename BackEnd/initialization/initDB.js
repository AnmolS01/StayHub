const mongoose = require("mongoose");
const { sampleData } = require("./data.js"); // Import sample data from data.js file
const Listing = require("../Models/listing.js"); // Import the Listing model to perform database operations

// MongoDB connection setup
const MONGO_URL = "mongodb://127.0.0.1:27017/StayHubReact";

// Function to connect to MongoDB
function main() {
  mongoose.connect(MONGO_URL);
}

// Execute the main function and handle connection status
main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

// Initialize the database with sample data
const initDB = async () => {
  await Listing.deleteMany({}); // Remove existing listings
  await Listing.insertMany(sampleData); // Insert sample data into the database
  console.log("Database initialized with sample data");
};

// Execute the database initialization
initDB();
