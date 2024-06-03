import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import Profileinfo from '../Cards/Profileinfo'
import SearchBar from '../SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';


const Navbar = ({searchQuery,setSearchQuery}) => {
  const navigate = useNavigate();
  const onLogout=()=>{
    navigate("/login");
  };
  const handleSearch=()=>{

  };
  const onClearSearch =()=>{
    setSearchQuery("");
  }
  return (
    <div className='bar'>
    <div>
        <h2>Moviephile</h2>
        <SearchBar 
        value={searchQuery}
        onChange={({target})=>{
          setSearchQuery(target.value);
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
        />
        <Profileinfo onLogout={onLogout}/>
    </div>
    </div>
  )
}

export default Navbar