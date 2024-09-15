import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function ListingDetail() {
  const [fetchDetails, setFetchDetails] = useState({});
  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate();

  useEffect(() => {
    // Define the async function inside useEffect
    const fetchListingDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/listings/${id}`
        );
        setFetchDetails(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Listing Details fetching failed", error);
      }
    };

    // Call the async function
    fetchListingDetail();
  }, [id]);

  // Function to handle delete action
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/listings/${id}`
      );
      console.log("Listing deleted successfully", response.data);
      navigate("/");
    } catch (error) {
      console.error("Error deleting the listing", error);
    }
  };
  return (
    <div>
      <h1>{fetchDetails.title}</h1>
      <p>{fetchDetails.description}</p>
      <p>
        &#8377;{" "}
        {fetchDetails.price
          ? fetchDetails.price.toLocaleString("en-IN")
          : "Price not available"}
      </p>
      <p>{fetchDetails.location}</p>
      <p>{fetchDetails.country}</p> <br />
      <Link to={`/listings/editListing/${id}`}>Edit</Link> <br />
      <br />
      <button type="submit" onClick={handleDelete}>
        Delete
      </button>
      <Link to={`/`}>Go Back</Link>
    </div>
  );
}
