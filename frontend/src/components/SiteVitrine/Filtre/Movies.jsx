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

  // const Movies = ({ movies }) => {
  //   const [filteredMovies, setFilteredMovies] = useState(movies);
  
  //   useEffect(() => {
  //     setFilteredMovies(movies);
  //   }, [movies]);

  //   const url = new URL(movie.preview);
  //   const previewUrl = url.href;


  
  //   return (
  //     <motion.div 
  //       layout
  //       animate={{ opacity: 1 }}
  //       initial={{ opacity: 0 }}
  //       exit={{ opacity: 0 }}
  //       transition={{ duration: 0.5 }}
  //       style={{ position: 'relative', top: '800px',
  //       marginLeft: '20px',
  //       marginRight: '20px',
  //       paddingTop: '30px',
  //      }} // Ajout du style pour déplacer la div vers le bas
        
  //     >
  //       {filteredMovies.map(movie => (
  //         <div key={movie.id} className="resultData">
  //           <div className="imageContainer">
  //             <img src={`http://localhost:8000/storage/${movie.image}`} alt="" />
  //             <div className="overlay">
  //               <div className="iconContainer">
  //                 <span>
  //                   <a href={previewUrl} target="_blank" rel="noopener noreferrer">
  //                     <i className="fa fa-play"></i>
  //                   </a>
  //                   <span className="iconSubtitle">Lire</span>
  //                 </span>
  //                 <span>
  //                   <a href={movie.repository} target="_blank" rel="noopener noreferrer">
                    
  //                     <i className="fa fa-circle"></i>
  //                   </a>
  //                   <span className="iconSubtitle">Info</span>
  //                 </span>

  //               </div>
  //             </div>
  //           </div>
  //           <h2>{movie.titre}</h2>
  //           <p>{movie.description}</p>
  //           {/* <p>{movie.technologie}</p> */}
  //           <div className="tech">{movie.technologie}</div>
  //         </div>
  //       ))}
  //     </motion.div>
  //   );
  // };

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
        style={{ 
          // la position pour la div qui affiche les datas
          position: 'relative',
          top: '2690px',
          marginLeft: '20px',
          marginRight: '20px',
          paddingTop: '30px',
         
        }}
      >
        <style>
        {`
          @media screen and (max-width: 600px) {
            .resultData {
              position: relative;
              top: 1790px;
            }
          }
        `}
      </style>
        {/* ce script est utilisé pour que chaque clic sur l'icône ouvre le lien vers une autre page pour éviter localhost:3000//www... */}
        {filteredMovies.map(movie => {
          let previewUrl = movie.preview;
          let repositoryUrl = movie.repository;
  
          if (!repositoryUrl.startsWith('http://') && !repositoryUrl.startsWith('https://')) {
            repositoryUrl = `https://${repositoryUrl}`;
          }
  
          if (!previewUrl.startsWith('http://') && !previewUrl.startsWith('https://')) {
            previewUrl = `http://${previewUrl}`;
          }
  
          return (
            <div key={movie.id} className="resultData">
              <div className="imageContainer">
                <img src={`http://localhost:8000/storage/${movie.image}`} alt="" />
                <div className="overlay">
                  <div className="iconContainer">
                    <span>
                      <a href={previewUrl} target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-play"></i>
                      </a>
                      <span className="iconSubtitle" id="iconSubtitle">Live</span>
                    </span>
                    <span>
                      <a href={repositoryUrl} target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-code"></i>
                      </a>
                      <span className="iconSubtitle" id="iconSubtitle">Code</span>
                    </span>
                  </div>
                </div>
              </div>
              <h2>{movie.titre}</h2>
              <p>{movie.description}</p>
              <div className="tech">{movie.technologie}</div>
            </div>
          );
        })}
      </motion.div>
    );
  };

export default Movies