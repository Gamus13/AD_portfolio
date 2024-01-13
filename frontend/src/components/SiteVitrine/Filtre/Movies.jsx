// // import { useContext } from "react"
// // import { MovieContext } from "../Appx"
// // import { motion } from "framer-motion";

// // const Movies = () => {
// //   const { filteredMovie } = useContext(MovieContext);

// //   return filteredMovie.map(movie => (
// //     <motion.div className="image-card" key={movie.id}
// //       layout
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       exit={{ opacity: 0 }}
// //       transition={{duration: 0.5 }}
// //     >
// //       <img src={`http://localhost:8000/storage/images/${movie.image}`} alt={movie.titre} />
// //       <h2>{movie.title}</h2>
// //     </motion.div>
// //   ))
// // }

// // export default Movies

// import React, { useContext } from 'react';
// import { MovieContext } from "../Appx";
// import { motion } from 'framer-motion';

// const Movies = () => {
//  const { popularMovies, filteredMovie, setFilteredMovie } = useContext(MovieContext);

//  return (
//     <div className="image-container">
//       {filteredMovie.map((movie, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <img src={`http://localhost:8000/storage/images/${movie.image}`} alt={movie.titre} />
//           <h3>{movie.titre}</h3>
//         </motion.div>
//       ))}
//     </div>
//  );
// };

// export default Movies;

// const Movies = ({ movies }) => {
//   console.log('Movies data:', movies);
//   return (
//     <motion.div 
//       layout
//       animate={{ opacity: 1 }}
//       initial={{ opacity: 0 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//        <h2>{movies.titre}</h2>
//        <p>{movies.description}</p>
//       <p>{movies.technologie}</p>
//       <img src={movies.image} alt="" />
//     </motion.div>
//   )
// }

  // const Movies = ({ movies }) => {
  //   // console.log('Movies data:', movies);
  //   return (
  //     <motion.div 
  //       layout
  //       animate={{ opacity: 1 }}
  //       initial={{ opacity: 0 }}
  //       exit={{ opacity: 0 }}
  //       transition={{ duration: 0.5 }}
  //     >
  //       {movies.map(movie => (
  //         <div key={movie.id}>
  //           <h2>{movie.titre}</h2>
  //           <p>{movie.description}</p>
  //           <p>{movie.technologie}</p>
  //           <img src={movie.image} alt="" />
  //         </div>
  //       ))}
  //     </motion.div>
  //   );
  // };
  import { useEffect, useState } from "react"
  import { motion } from "framer-motion"

  const Movies = ({ movies }) => {
    const [filteredMovies, setFilteredMovies] = useState(movies);
  
    useEffect(() => {
      setFilteredMovies(movies);
    }, [movies]);
  
    return (
      <motion.div 
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{ position: 'relative', top: '840px',
        '@media (min-width: 768px)': {
          gridTemplateColumns: 'repeat(2, 1fr)',
        },
        '@media (min-width: 1024px)': {
          gridTemplateColumns: 'repeat(4, 1fr)',
        }
       }} // Ajout du style pour déplacer la div vers le bas
        
      >
        {filteredMovies.map(movie => (
          <div key={movie.id} className="resultData">
            <img src={`http://localhost:8000/storage/${movie.image}`} alt="" />
            <h2>{movie.titre}</h2>
            <p>{movie.description}</p>
            <p>{movie.technologie}</p>
            
          </div>
        ))}
      </motion.div>
    );
  };

export default Movies