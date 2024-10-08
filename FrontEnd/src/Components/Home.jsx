import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
    const [listings, setListings] = useState([]);

    useEffect(()=>{
        const FetchListings = async ()=> {
            try{
                const response = await axios.get("http://localhost:8080/listings");
                setListings(response.data);
            } catch(error) {
                console.error("fetching error", error)
            }
        };
        FetchListings();

    }, []);
  return (
    <>
    <h3>All Listings</h3>
    <Link to='/listings/addNewListing'>Add New Listing</Link>
    <ul>
        {listings.map((listing)=>(
            <li key={listing._id}>
                <a href={`/listings/${listing._id}`}>{listing.title}</a>
            </li>
        ))}
    </ul>
    </>
  )
}

