import React from 'react';
import './App.css';
import ListingDetail from './Components/ListingDetail.jsx'; // Assuming you have this component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddNewListing from './Components/AddNewListing.jsx';
import EditListing from './Components/EditListing.jsx';
import Home from './Components/Home.jsx';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings/:id" element={<ListingDetail />} /> {/* Listing Detail component */}
          <Route path='/listings/addNewListing' element={<AddNewListing />}/>
          <Route path='/listings/editListing/:id' element={<EditListing />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
