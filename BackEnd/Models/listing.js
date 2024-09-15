const mongoose = require("mongoose");
const Schema = mongoose.Schema; // Schema is a library in mongoose which allow you to create structure of documents in collection of your database.

// schema(structure of document) of MongoDB
const ListingSchema = new Schema({
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
// Listing is variable which holds model to perform operation with "listing" collection
const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing; // this is the variable to perform mongoDB operations. i.e Listing.find(),...etc.

// The line,

// const Listing = mongoose.model("Listing", ListingSchema);

// is used to create a Mongoose model based on a schema. Here’s what each part of this line means:

// mongoose.model(): This is a Mongoose method used to create a model from a schema. A model is a class that allows you to interact with a specific MongoDB collection.

// "Listing": This is the name of the model. It is also the name of the collection in MongoDB but in lowercase and pluralized by default. For example, if you name your model "Listing", Mongoose will look for a collection named "listings" in the MongoDB database.

// ListingSchema: This is the schema that defines the structure of the documents within the collection. It specifies the fields and data types for the documents in the collection.

// const Listing: This creates a constant variable named Listing that holds the model created by mongoose.model(). This model can then be used to perform CRUD (Create, Read, Update, Delete) operations on the collection.
