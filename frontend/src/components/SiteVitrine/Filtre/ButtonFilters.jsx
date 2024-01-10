// // import { useContext } from "react";
// // import { useState } from "react"
// // import { MovieContext } from "../Appx";
// // import { genres } from "../untils"

// // const ButtonFilters = () => {
// //   const [tabActive, setTabActive] = useState(0);
// //   const { popularMovies, setFilteredMovie } = useContext(MovieContext);

// //   const handleClickFilter = (id) => {
// //     setTabActive(id);
// //     const filteredMovie = popularMovies.filter(movie => movie.genre_ids.includes(id));
// //     if(id === 0) {
// //       setFilteredMovie(popularMovies);
// //     } else {
// //       setFilteredMovie(filteredMovie);
// //     }
// //   }

// //   return (
// //     <div className="button-wrapper">
// //       {genres.map(item => (
// //         <button
// //           key={item.id}
// //           className={tabActive === item.id ? "active" : undefined}
// //           onClick={() => handleClickFilter(item.id)}  
// //         >{item.name}</button>
// //       ))}
// //     </div>
// //   )
// // }

// // export default ButtonFilters

// import { useContext } from "react";
// import { useState } from "react"
// import { MovieContext } from "../Appx";
// import { genres } from "../untils";

// const ButtonFilters = () => {
//   const [tabActive, setTabActive] = useState(0);
//   const { popularMovies, setFilteredMovie } = useContext(MovieContext);

//  console.log('popularMovies:', popularMovies); //  Ajoutez cette ligne pour afficher les données dans la console

//   const handleClickFilter = (id) => {
//     setTabActive(id);
//     const filteredMovie = popularMovies.filter(movie => movie.categorie === id);
//     if(id === 0) {
//       setFilteredMovie(popularMovies);
//     } else {
//       setFilteredMovie(filteredMovie);
//     }
//   }

//   return (
//     // <div className="button-wrapper">
//     //   {genres.map(item => (
//     //     <button
//     //       key={item.id}
//     //       className={tabActive === item.id ? "active" : undefined}
//     //       onClick={() => handleClickFilter(item.id)}  
//     //     >{item.name}</button>
//     //   ))}
//     // </div>
//     <div className="button-wrapper">
//         {categories.map(item => (
//         <button
//             key={item.id}
//             className={tabActive === item.id ? "active" : undefined}
//             onClick={() => handleClickFilter(item.id)}
//         >{item.name}</button>
//         ))}
//     </div>
//   )
// }

// export default ButtonFilters

import { useEffect, useState } from "react"

// const ButtonFilters = ({ activeGenre, setActiveGenre, setFiltered, popular }) => {

//   useEffect(() => {
//     console.log('Popular movies:', popular);
//     console.log('Active genre:', activeGenre);
//     if (activeGenre === 'All') {
//       setFiltered(popular)
//       return
//     }
//     // const filtered = popular.filter(movie => movie.categorie === activeGenre);
//     const filtered = popular.filter(movie => movie.categorie === activeGenre);
//     setFiltered(filtered);
//   }, [activeGenre])
  

//   return (
//     <div className="filter-container">
//       <button 
//         className={activeGenre === 'All' ? "active" : ""}
//         onClick={() => setActiveGenre('All')}
//       >
//         All
//   </button>
//       <button 
//         className={activeGenre === 'Client' ? "active" : ""}
//         onClick={() => setActiveGenre('Client')}
//       >
//         Client
//       </button>
//       <button 
//         className={activeGenre === 'serveur' ? "active" : ""}
//         onClick={() => setActiveGenre('serveur')}
//       >
//         Serveur
//       </button>
//       <button 
//         className={activeGenre === 'Graphisme' ? "active" : ""}
//         onClick={() => setActiveGenre('Graphisme')}
//       >
//         Graphisme
//       </button>
//       <button 
//         className={activeGenre === 'design' ? "active" : ""}
//         onClick={() => setActiveGenre('design')}
//       >
//         Design
//       </button>
//     </div>
//   )
// }
// const ButtonFilters = ({ activeGenre, setActiveGenre, setFiltered, popular }) => {
//   useEffect(() => {
//     console.log('Popular movies:', popular);
//     console.log('Active genre:', activeGenre);
//     if (activeGenre === 'All') {
//       setFiltered(popular);
//     } else {
//       const filtered = popular.filter(movie => movie.categorie === activeGenre);
//       setFiltered(filtered);
//     }
//   }, [activeGenre, popular, setFiltered]);

//   return (
//     <div className="filter-container">
//       <button
//         className={activeGenre === 'All' ? "active" : ""}
//         onClick={() => {
//           console.log('Clicked All');
//           setActiveGenre('All');
//         }}
//       >
//         All
//       </button>
//       <button
//         className={activeGenre === 'Client' ? "active" : ""}
//         onClick={() => setActiveGenre('Client')}
//       >
//         Client
//       </button>
//       <button
//         className={activeGenre === 'serveur' ? "active" : ""}
//         onClick={() => setActiveGenre('serveur')}
//       >
//         Serveur
//       </button>
//       <button
//         className={activeGenre === 'Graphisme' ? "active" : ""}
//         onClick={() => setActiveGenre('Graphisme')}
//       >
//         Graphisme
//       </button>
//       <button
//         className={activeGenre === 'design' ? "active" : ""}
//         onClick={() => setActiveGenre('design')}
//       >
//         Design
//       </button>
//     </div>
//   );
// };

// const ButtonFilters = ({ setFiltered, popular }) => {
//   const [activeGenre, setActiveGenre] = useState('All');

//   useEffect(() => {
//     if (activeGenre === 'All') {
//       setFiltered(popular);
//     } else {
//       const filtered = popular.filter(movie => movie.categorie === activeGenre);
//       setFiltered(filtered);
//     }
//   }, [activeGenre, popular, setFiltered]);

//   return (
//     <div className="filter-container">
//       <button
//         className={activeGenre === 'All' ? "active" : ""}
//         onClick={() => setActiveGenre('All')}
//       >
//         All
//       </button>
//       <button
//         className={activeGenre === 'Client' ? "active" : ""}
//         onClick={() => setActiveGenre('Client')}
//       >
//         Client
//       </button>
//       {/* Ajoutez les autres boutons pour les genres restants */}
//     </div>
//   );
// };
import axios from '../../../axios';

// const ButtonFilters = ({ setFiltered }) => {
//   const [activeGenre, setActiveGenre] = useState('All');

//   const handleButtonClick = (genre) => {
//     setActiveGenre(genre);

//     if (genre === 'All') {
//       setFiltered([]);
//     } else {
//       axios.post('http://localhost:8000/api/realisations/filter', { category: genre })
//         .then(response => {
//           const filteredData = response.data.filteredRealisations;
//           setFiltered(filteredData);
//           console.log('Filtered data:', filteredData);
//         })
//         .catch(error => {
//           console.error('Error filtering data:', error);
//         });
//     }

    
//   };

//   return (
//     <div className="filter-container">
//       <button
//         className={activeGenre === 'All' ? 'active' : ''}
//         onClick={() => handleButtonClick('All')}
//       >
//         All
//       </button>
//       <button
//         className={activeGenre === 'Client' ? 'active' : ''}
//         onClick={() => handleButtonClick('Client')}
//       >
//         Client
//       </button>
//       {/* Ajoutez les autres boutons pour les autres catégories */}
//     </div>
//   );
// };
const ButtonFilters = ({ setFiltered }) => {
  const [activeGenre, setActiveGenre] = useState('All');

  const handleButtonClick = (genre) => {
    setActiveGenre(genre);

    if (genre === 'All') {
      setFiltered([]);
    } else {
      axios.post('http://localhost:8000/api/realisations/filter', { category: genre })
        .then(response => {
          const filteredData = response.data.filteredRealisations;
          setFiltered(filteredData);
          console.log('Filtered data:', filteredData);
        })
        .catch(error => {
          console.error('Error filtering data:', error);
        });
    }
  };

  return (
    <div className="filter-container">
      <button
        className={activeGenre === 'All' ? 'active' : ''}
        onClick={() => handleButtonClick('All')}
      >
        All
      </button>
      <button
        className={activeGenre === 'Client' ? 'active' : ''}
        onClick={() => handleButtonClick('Client')}
      >
        Client
      </button>
      {/* Ajoutez les autres boutons pour les autres catégories */}
    </div>
  );
};
export default ButtonFilters