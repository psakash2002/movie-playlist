import React,{ useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import Navbar from '../../components/Navbar/Navbar';
import MovieList from '../../components/MovieList';

const Home=() => {
    const [movies, setMovies] = useState([]);
    const[searchQuery, setSearchQuery]=useState('');
    const getMovieRequest = async ()=>{
        const url=`https://www.omdbapi.com/?s=${searchQuery}&apikey=97bed818`;
        const response = await fetch(url);
        const responseJson =await response.json();
        if(responseJson.Search){
            setMovies(responseJson.Search);
        }
    };
    useEffect(()=>{
        getMovieRequest(searchQuery);
    },[searchQuery]);
    return(
        <>
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <div className='container-fluid movie-app'>
                <div className="row">
                    {movies.map((movie, index) => (
                        <div key={index} className="col-sm-4 col-md-3 col-lg-2 mb-4">
                            <div className="card custom-card">
                                <img src={movie.Poster} className="card-img-top custom-img" alt={movie.Title} />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.Title}</h5>
                                    <p className="card-text">{movie.Year}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
        
    );
}
export default Home
