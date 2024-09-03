const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sampleListingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://unsplash.com/photos/low-angle-photo-of-hotel-lighted-signage-on-top-of-brown-building-during-nighttime-n_IKQDCyrG0",
    set: (value) =>
      value === ""
        ? "https://unsplash.com/photos/low-angle-photo-of-hotel-lighted-signage-on-top-of-brown-building-during-nighttime-n_IKQDCyrG0"
        : value,
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", sampleListingSchema);
module.exports = Listing;
