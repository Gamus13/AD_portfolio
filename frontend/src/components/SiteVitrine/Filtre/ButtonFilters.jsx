
import axios from '../../../axios';
import { useEffect, useState } from "react"

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
      <button
        className={activeGenre === 'Serveur' ? 'active' : ''}
        onClick={() => handleButtonClick('Serveur')}
      >
        Serveur
      </button>
      <button
        className={activeGenre === 'Graphisme' ? 'active' : ''}
        onClick={() => handleButtonClick('Graphisme')}
      >
        Graphisme
      </button>
      <button
        className={activeGenre === 'design' ? 'active' : ''}
        onClick={() => handleButtonClick('design')}
      >
        UX/UI
      </button>
      {/* Ajoutez les autres boutons pour les autres catégories */}
    </div>
  );
};
export default ButtonFilters