

import React, { useEffect } from 'react';
import '../../Styles/Services2.css';
import gsap from 'gsap';
import SplitType from 'split-type';
import CSSPlugin from 'gsap/CSSPlugin';

gsap.registerPlugin(CSSPlugin);

function TextserviceLoad() {
    useEffect(() => {
        const delay = 1300;

        const timeout = setTimeout(() => {
            const myTexte = new SplitType('#my-texte h2');

            gsap.to('.char2', {
                y: 0,
                stagger: 0.05,
                delay: 0.2,
                duration: 0.3
            });
        }, delay);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="services2">
            <h2 id="my-texte">
                Des prestations adaptées à vos besoins
            </h2>
        </div>
    );
}

export default TextserviceLoad;

