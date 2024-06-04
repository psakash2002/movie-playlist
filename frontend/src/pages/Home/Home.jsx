import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import Navbar from '../../components/Navbar/Navbar';
import MovieList from '../../components/MovieList';
import { Modal, Button } from 'react-bootstrap';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const getMovieRequest = async (query) => {
    const url = `https://www.omdbapi.com/?s=${query}&apikey=97bed818`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  const getMovieDetails = async (imdbID) => {
    const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=97bed818`;
    const response = await fetch(url);
    const responseJson = await response.json();
    setSelectedMovie(responseJson); // Update state after fetching details
    setShowModal(true);
  };

  useEffect(() => {
    getMovieRequest(searchQuery);
  }, [searchQuery]);

  return (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className='container-fluid movie-app'>
        <div className="row">
          {movies.map((movie, index) => (
            <div key={index} className="col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="card custom-card" onClick={() => getMovieDetails(movie.imdbID)}>
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

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedMovie?.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedMovie && ( // Only render details if `selectedMovie` is populated
            <>
              <img src={selectedMovie.Poster} alt={selectedMovie.Title} className="img-fluid" />
              <p><strong>Year:</strong> {selectedMovie.Year}</p>
              <p><strong>Genre:</strong> {selectedMovie.Genre}</p>
              <p><strong>Director:</strong> {selectedMovie.Director}</p>
              <p><strong>Actors:</strong> {selectedMovie.Actors}</p>
              <p><strong>Plot:</strong> {selectedMovie.Plot}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Home;
