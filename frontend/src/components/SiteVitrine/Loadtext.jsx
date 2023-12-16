

import React, { useEffect } from 'react';
import '../../Styles/Services.css';
import gsap from 'gsap';
import SplitType from 'split-type'; // Importez le module SplitType si nécessaire

function TextLoad() {
    useEffect(() => {
        const delay = 1300; // Délai en millisecondes (2 secondes)

        const timeout = setTimeout(() => {
            const myText = new SplitType('#my-text');

            gsap.to('.char', {
                y: 0,
                stagger: 0.05,
                delay: 0.2,
                duration: 0.3
            });
        }, delay);

        // Nettoyage du timeout lorsque le composant est démonté
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="services">
            <h1 id="my-text">MES SERVICES</h1>
        </div>
    );
}

export default TextLoad;





