

import React, { useEffect } from 'react';
import '../../Styles/Contact.css';
import { FaGithub, FaCodepen, FaTwitter, FaInstagram } from 'react-icons/fa';
import axios from '../../axios';
const ContactForm = () => {

  useEffect(() => {
    const handleSubmit = (e) => {
      e.preventDefault();
      
      const data = {
        nom: e.target.elements.nom.value,
        telephone: e.target.elements.telephone.value,
        email: e.target.elements.email.value,
        message: e.target.elements.message.value
      };

      axios.post('/send-email', data)
        .then(response => {
          // La requête a réussi, vous pouvez effectuer des actions supplémentaires ici
          console.log('Email envoyé avec succès !');
        })
        .catch(error => {
          // Une erreur s'est produite lors de la requête, vous pouvez la gérer ici
          console.log('Erreur lors de l\'envoi de l\'email.', error);
        });

      // Réinitialisez les champs du formulaire
      e.target.elements.nom.value = '';
      e.target.elements.telephone.value = '';
      e.target.elements.email.value = '';
      e.target.elements.message.value = '';
    };

    const contactForm = document.querySelector('#contact-form');
    contactForm.addEventListener('submit', handleSubmit);

    return () => {
      contactForm.removeEventListener('submit', handleSubmit);
    };
  }, []);

 
  return (
    <section id="contact">
      <h1 className="section-header" style={{ fontSize: '31px',fontFamily: 'Bebas Neue', }}>Contact</h1>
      <div className="contact-wrapper">
        
        {/* Left contact page */}
        
        <form id="contact-form" className="form-horizontal" role="form" method="POST" action="/send-email">
          <input type="hidden" name="_token" value="{{ csrf_token() }}" />
          <div className="form-group mb-3">
            <div className="col-sm-12">
              <input type="text" className="form-control" id="nom" placeholder="NAME" name="nom"  required style={{ width: '88%' }}/>
            </div>
          </div>
          <div className="form-group mb-3">
            <div className="col-sm-12">
              <input type="number" className="form-control" id="telephone" placeholder="Tel: +237 xxxxxxxx" name="telephone"  required style={{ width: '88%' }}/>
            </div>
          </div>
          <div className="form-group mb-3">
            <div className="col-sm-12">
            <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email"  required style={{ width: '88%' }} />
            </div>
          </div>
          <div className="form-group mb-3">
            <div className="col-sm-12">
              <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" required style={{ width: '88%' }}></textarea>
            </div>
          </div>
          <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND" style={{ backgroundColor: '#ff0000', color: 'white', width: '88%', }}>
            <div className="alt-send-button">
              <i className="fa fa-paper-plane" style={{ marginLeft: '-45px', marginTop: '8px', }}></i><span className="send-text">Envoyer</span>
            </div>
          </button>
        </form>
        
        {/* Right contact page */}
        
        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Yaounde, cameroun</span></i></li>
            <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(+237) 696666618</a></span></i></li>
            <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">marcelnoumsi8@gmail.com</a></span></i></li>
          </ul>
          <hr style={{ marginLeft: '-21px', marginTop: '11px', }} />
          <ul className="social-media-list">
            <li><a href="#" target="_blank" className="contact-icon"><i className="fa fa-coffee" aria-hidden="true"></i></a></li>
            <li><a href="#" target="_blank" className="contact-icon"><i className="fa fa-DESIGN" aria-hidden="true"></i></a></li>
            <li><a href="#" target="_blank" className="contact-icon"><i className="fa fa-code" aria-hidden="true"></i></a></li>
            <li><a href="#" target="_blank" className="contact-icon"><i className="fa fa-delivery" aria-hidden="true"></i></a></li>
          </ul>
          <hr style={{ marginLeft: '-21px', marginTop: '31px', }} />
          <div className="copyright" style={{ marginLeft: '-21px', marginTop: '31px', }}>&copy; ALL OF THE RIGHTS RESERVED</div>
        </div>
        
      </div>
    </section>
  );
};

export default ContactForm;