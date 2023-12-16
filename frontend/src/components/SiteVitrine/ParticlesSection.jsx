import React, { useEffect } from 'react';
import ParticlesJS from 'particles.js';
import Stats from 'stats.js';
import '../../Styles/Particles.css';

const Particles = () => {
    useEffect(() => {
      // Code de configuration de particles.js
      particlesJS("particles-js", {
        // ... Copiez le code de configuration de particles.js ici ...
      });
  
      // Code de configuration de stats.js
      const stats = new Stats();
      stats.setMode(0);
      stats.domElement.style.position = 'absolute';
      stats.domElement.style.left = '0px';
      stats.domElement.style.top = '0px';
      document.body.appendChild(stats.domElement);
  
      const countParticles = document.querySelector('.js-count-particles');
      const update = () => {
        stats.begin();
        stats.end();
        if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
          countParticles.innerText = window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
  
      // Nettoyage lors du démontage du composant
      return () => {
        // Supprimez les éléments DOM et arrêtez les animations si nécessaire
        document.body.removeChild(stats.domElement);
        cancelAnimationFrame(update);
      };
    }, []);
  
    return (
      <div>
        {/* Conteneur pour particles.js */}
        <div id="particles-js"></div>
  
        {/* Compteur de particules */}
        <div className="count-particles">
          <span className="js-count-particles">--</span> particles
        </div>
      </div>
    );
  };
  
  export default Particles;