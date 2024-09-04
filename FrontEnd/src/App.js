import React from 'react';
import './App.css';
import Index from './Components/Home.jsx';
import ListingDetail from './Components/ListingDetail.jsx'; // Assuming you have this component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/listings/:id" element={<ListingDetail />} /> {/* Listing Detail component */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
