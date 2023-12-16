
import React, { useEffect } from 'react';
import '../../Styles/Header.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Importez ScrollTrigger depuis gsap



import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';
import image6 from './images/6.jpg';
import image7 from './images/7.jpg';
import image8 from './images/8.jpg';
import image9 from './images/9.jpg';
import image10 from './images/10.jpg';
import image11 from './images/11.jpg';
import image12 from './images/12.jpg';
import image13 from './images/13.jpg';
import image14 from './images/14.jpg';
import image15 from './images/15.jpg';
import image17 from './images/17.jpg';
import image18 from './images/18.jpg';
import image19 from './images/19.jpg';
import image20 from './images/20.jpg';
import image21 from './images/21.jpg';
import image22 from './images/22.jpg';
import image23 from './images/23.jpg';
gsap.registerPlugin(ScrollTrigger); // Enregistrez le plugin ScrollTrigger

const AnimatedGallery = () => {
  useEffect(() => {
    var items = document.querySelectorAll(".item img");

    items.forEach((val, index) => {
      val.src = images[index];
    });

    var tl = gsap.timeline();

    tl.to(".items img", { scale: 1 }, 0);
    tl.to(".items", { scale: 2, rotate: 0 }, 0);

    tl.to(".overlay", { height: "100%" }, 0.2);
    tl.to(".overlay h1", { scale: 1 }, 0.6);
    tl.to(".items", { scale: 0.8, opacity: 0.2 }, 0.6);

    // Utilisez ScrollTrigger pour déclencher l'animation lors du défilement
    ScrollTrigger.create({
      trigger: ".wrapper",
      start: "top top",
      end: "50%+=500px",
      scrub: 2,
      animation: tl,
    });
  }, []);

  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15,  image17, image18, image19, image20, image21, image22, image23];

  return (
    <div className="wrapper">
      <div className="items">
        <div className="item">
          <img src={image1} alt="" />
        </div>
        <div className="item">
          <img src={image2} alt="" />
        </div>
        <div className="item">
          <img src={image3} alt="" />
        </div>
        <div className="item">
          <img src={image4} alt="" />
        </div>
        <div className="item">
          <img src={image5} alt="" />
        </div>
        <div className="item">
          <img src={image6} alt="" />
        </div>
        <div className="item">
          <img src={image7} alt="" />
        </div>
        <div className="item">
          <img src={image8} alt="" />
        </div>
        <div className="item">
          <img src={image9} alt="" />
        </div>
        <div className="item">
          <img src={image10} alt="" />
        </div>
        <div className="item">
          <img src={image11} alt="" />
        </div>
        <div className="item">
          <img src={image12} alt="" />
        </div>
        <div className="item">
          <img src={image13} alt="" />
        </div>
        <div className="item">
          <img src={image14} alt="" />
        </div>
        <div className="item">
          <img src={image15} alt="" />
        </div>
        <div className="item">
          <img src={image21} alt="" />
        </div>
        <div className="item">
          <img src={image17} alt="" />
        </div>
        <div className="item">
          <img src={image18} alt="" />
        </div>
        <div className="item">
          <img src={image19} alt="" />
        </div>
        <div className="item">
          <img src={image20} alt="" />
        </div>
        <div className="item">
          <img src={image22} alt="" />
        </div>
        <div className="item">
          <img src={image23} alt="" />
        </div>
      </div>
      {/* <div className="overlay">
        <h1>AWESOME</h1>
      </div> */}
      {/* <div className="services">
      <h1>MES SERVICES</h1>
      </div> */}
      
    </div>
  );
}

export default AnimatedGallery;