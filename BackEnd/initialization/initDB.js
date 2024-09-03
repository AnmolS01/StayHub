const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../Models/");

const MONGO_URL = "mongodb://127.0.0.1:27017/StayHubReact";

async function main() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to DB");

    await Listing.deleteMany({});
    await Listing.insertMany(initData);
    console.log("Data is initialized");
  } catch (error) {
    console.error("Error initializing the database:", error);
  } finally {
    mongoose.connection.close();
  }
}

main();
