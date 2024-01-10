// import { AnimatePresence } from "framer-motion";
// import { useEffect } from "react";
// import { createContext } from "react";
// import { useState } from "react"
// import ButtonFilters from "./Filtre/ButtonFilters"
// import Movies from "./Filtre/Movies"
// import axios from '../../axios';
// import { useContext } from "react";
// // import { MovieContext } from "./Apps";

// // Create context
// export const MovieContext = createContext();

// function Apps() {
//     const [popularMovies, setPopularMovies] = useState([]);
//     const [filteredMovie, setFilteredMovie] = useState([]);
  
//     const fetchPopularMovie = async () => {
//       try {
//         // Récupération des données des films populaires en effectuant une requête à l'API
//         const response = await axios.get('http://localhost:8000/api/realisations');
//         const movies = response.data;
//         console.log('Data from API:',response.data) 
//         // console.log('Data from API:', movies);
//         // Stockage des résultats de la requête dans les états popularMovies et filteredMovie
//         setPopularMovies(movies);
//         setFilteredMovie(movies);
//       } catch (error) {
//         console.error(error);
//       }
//     };
  
//     useEffect(() => {
//       fetchPopularMovie();
//     }, []);
  
//     const value = {
//       popularMovies,
//       setFilteredMovie
//     };

//   return (
//     <MovieContext.Provider value={value}>
//     <div className="app">
//       {/* ButtonFilters utilise le contexte MovieContext pour mettre à jour les films filtrés en fonction de la sélection de filtres */}
//       <ButtonFilters />
//       <div className="image-container">
//         <AnimatePresence>
//           <Movies />
//         </AnimatePresence>
//       </div>
//     </div>
//   </MovieContext.Provider>
//   )
// }

// export default Apps

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { createContext } from 'react';
// import Filter from './Components/Filter';
// import Movie from './Components/Movie';
import axios from '../../axios';

import ButtonFilters from "./Filtre/ButtonFilters"
import Movies from "./Filtre/Movies"

// Create context
export const MovieContext = createContext();

function Apps() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  
  
  const fetchPopular = async () => {
    const response = await axios.get('http://localhost:8000/api/realisations');
    console.log(response.data.realisations); // Log the realisations array
    const movies = response.data.realisations;
    setPopular(movies);
    setFiltered(movies);
    // console.log('Data from API:', movies);  
  }
  

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <div className="App">
    <ButtonFilters
      popular={popular}
      setFiltered={setFiltered}
      activeGenre={activeGenre}
      setActiveGenre={setActiveGenre}
    />
    
      {/* <motion.div
        layout 
        className="popular-movies"
      >
        
        <AnimatePresence>
          {filtered.map(movies => (
            <Movies 
              key={movies.id} 
              movies = {movies}
            />
          ))}
        </AnimatePresence>
        
      </motion.div> */}
      <motion.div layout className="popular-movies">
  <AnimatePresence>
    {filtered.map(movie => (
      <Movies key={movie.id} movies={[movie]} />
    ))}
  </AnimatePresence>
</motion.div>
    </div>
  );
}
export default Apps;