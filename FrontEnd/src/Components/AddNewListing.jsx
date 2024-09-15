import React, { useState } from "react"; //react hooks: make functional component stateful.
import axios from "axios"; // to send and recieve data to/from database.
import { useNavigate } from "react-router-dom"; // to navigate from current location to specified location

export default function AddNewListing() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
    location: "",
    country: "",
  });

  // Handles input changes
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Handles form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make a POST request to add a new listing
      const response = await axios.post(
        "http://localhost:8080/listings/addNewListing",
        formData
      );
      console.log("New Listing Added successfully", response.data);
      setFormData({
        title: "",
        description: "",
        image: "",
        price: "",
        location: "",
        country: "",
      });
      navigate("/"); //navigate to the root page whiuch Home.jsx
    } catch (error) {
      console.error("Error adding listing:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Add New Listing</h2> <br />
        <div>
          <label htmlFor="title">Tittle: </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image: </label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price: </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location: </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="country">Country: </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </>
  );
}
