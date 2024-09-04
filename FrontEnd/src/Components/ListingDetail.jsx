import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ListingDetail() {
  const [fetchDetails, setFetchDetails] = useState({});
  const { id } = useParams(); // Get the ID from the URL

  useEffect(() => {
    // Define the async function inside useEffect
    const fetchListingDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/listings/${id}`);
        setFetchDetails(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Listing Details fetching failed", error);
      }
    };

    // Call the async function
    fetchListingDetail();
  }, [id]);

  return (
    <div>
      <h1>{fetchDetails.title}</h1>
      <p>{fetchDetails.description}</p>
      <p>{fetchDetails.price}</p>
      <p>{fetchDetails.location}</p>
      <p>{fetchDetails.country}</p>
    </div>
  );
}
