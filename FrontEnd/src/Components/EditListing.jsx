import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditListing() {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the ID from the URL
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
    location: "",
    country: "",
  });

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/listings/${id}`
        );
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching listing details:", error);
      }
    };
    fetchDetails();
  }, [id]);

  // Handles input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a PUT request to update the listing
      const response = await axios.put(
        `http://localhost:8080/listings/${id}`,
        formData
      );
      console.log("Listing updated successfully", response.data);

      // Navigate back to the listing detail page after saving changes
      navigate(`/listings/${id}`);
    } catch (error) {
      console.error("Error updating listing:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Edit Listing Details</h2>
        <div>
          <label>Title: </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description: </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Image: </label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price: </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Location: </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Country: </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </>
  );
}
