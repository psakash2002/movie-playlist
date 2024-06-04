import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profileinfo from '../Cards/Profileinfo';
import SearchBar from '../SearchBar/SearchBar'; // Assuming SearchBar component exists
import { useNavigate } from 'react-router-dom';

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login");
  };

  const handleSearch = () => {

  };

  const onClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className='bar' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 2rem', backgroundColor: '#20232a', color: 'white', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <h2 style={{ margin: '0', fontSize: '1.5rem', fontWeight: 'bold', color: '#f0f0f0' }}>Moviephile</h2> {/* Adjusted font color */}
        <SearchBar
          value={searchQuery}
          onChange={({ target }) => {
            setSearchQuery(target.value);
          }}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
          style={{ marginLeft: '10rem', width: '50%', backgroundColor: '#333', borderRadius: '5px', padding: '0.5rem 1rem', color: 'white' }} // Added search bar styles
        />
      </div>
      <Profileinfo onLogout={onLogout} />
    </div>
  );
}

export default Navbar;
