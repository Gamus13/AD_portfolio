import React from 'react';
import '../../Styles/Footer.css';

const Footer = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <div className="footer-content">
            <div className="row" id='row'>
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="logo-widget footer-widget">
                  <figure className="logo-box"><a href="#" id='txtfoos'><img src="https://i.ibb.co/QDy827D/ak-logo.png" alt="" /></a></figure>
                  <div className="text">
                    <p id='txtfooter'>Développeur Fullstack & Webdesigner freelance, je suis à votre disposition pour répondre à tout type de projets de création de sites internet, de développement spécifique ou d'applications web.

                    Passionné par les technologies liées au web et au mobile, je mets mes compétences au service de vos besoins dans divers domaines.</p>
                  </div>
                  <ul className="footer-social">
                    <li id='txtfooss'><a href="#" id='txtfoos'><i className="fab fa-facebook-f"></i></a></li>
                    <li id='txtfooss'><a href="#" id='txtfoos'><i className="fab fa-linkedin"></i></a></li>
                    <li id='txtfooss'><a href="#" id='txtfoos'><i className="fab fa-vimeo-v"></i></a></li>
                    <li id='txtfooss'><a href="#" id='txtfoos'><i className="fab fa-google-plus-g"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 offset-lg-2 footer-column">
                <div className="service-widget footer-widget">
                  <div className="footer-title">Services</div>
                  <ul className="list">
                    <li><a href="#" id='txtfoos'>UX/UI Design</a></li>
                    <li><a href="#" id='txtfoos'>Front-End</a></li>
                    <li><a href="#" id='txtfoos'>Back-End</a></li>
                    <li><a href="#" id='txtfoos'>Animal Saves</a></li>
                    <li><a href="#" id='txtfoos'>Help Orphan</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-widget">
                <div className="contact-widget footer-widget">
                  <div className="footer-title">Contacts</div>
                  <div className="text">
                    <p id='txtfooter'>Lorem Ipsum, simply dummy text, printing, Chandigarh</p>
                    <p id='txtfooter'>+237 696666618</p>
                    <p id='txtfooter'>marcelnoumsi8@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* main-footer end */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row" >
            <div className="col-lg-6 col-md-6 col-sm-12 column">
              <div className="copyright"><a href="#" id='txtfoos'>Afro Dev</a> &copy; 2019 All Right Reserved</div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 column">
              <ul className="footer-nav">
                <li><a href="#" id='txtfoos'>NOUMSI GUY JUNIOR - COPYRIGHT © 2021 - 2023</a></li>
                {/* <li><a href="#" id='txtfoos'>Privacy Policy</a></li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;