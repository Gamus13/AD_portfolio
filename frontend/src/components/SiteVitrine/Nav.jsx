import React, { useState, useEffect } from 'react';
import styles from './scss/base/_base.scss';
// import styles from "./scss/base/_base.scss?inline";
import '../../Styles/Navbar.css';

function Navbars() {
  useEffect(() => {
    const showMenu = () => {
      const navMenu = document.getElementById('nav-menu');
      navMenu.classList.toggle('show-menu');
    };

    const toggleItem = (item) => {
      const dropdownContainer = item.querySelector('.dropdown__container');

      if (item.classList.contains('show-dropdown')) {
        dropdownContainer.removeAttribute('style');
        item.classList.remove('show-dropdown');
      } else {
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px';
        item.classList.add('show-dropdown');
      }
    };

    const removeDropdownStyles = () => {
      const mediaQuery = window.matchMedia('(min-width: 1118px)');
      const dropdownContainers = document.querySelectorAll('.dropdown__container');

      if (mediaQuery.matches) {
        dropdownContainers.forEach((container) => {
          container.removeAttribute('style');
        });

        dropdownItems.forEach((item) => {
          item.classList.remove('show-dropdown');
        });
      }
    };

    const dropdownItems = document.querySelectorAll('.dropdown__item');

    dropdownItems.forEach((item) => {
      const dropdownButton = item.querySelector('.dropdown__button');

      dropdownButton.addEventListener('click', () => {
        const showDropdown = document.querySelector('.show-dropdown');

        toggleItem(item);

        if (showDropdown && showDropdown !== item) {
          toggleItem(showDropdown);
        }
      });
    });

    window.addEventListener('resize', removeDropdownStyles);

    return () => {
      window.removeEventListener('resize', removeDropdownStyles);
    };
  }, []);  

  return (
    <>
          <header class="header">
                <nav class="nav container">
                    <div class="nav__data">
                        <a href="#" class="nav__logo">
                            <i class="ri-code-s-slash-line"></i> CodeBox
                        </a>
        
                        <div class="nav__toggle" id="nav-toggle">
                            <i class="ri-menu-line nav__toggle-menu"></i>
                            <i class="ri-close-line nav__toggle-close"></i>
                        </div>
                    </div>

                    {/* <!--=============== NAV MENU ===============--> */}
                    <div class="nav__menu" id="nav-menu">
                        <ul class="nav__list">
                            <li>
                                <a href="#" class="nav__link">SERVICES</a>
                            </li>

                            {/* <!--=============== DROPDOWN 1 ===============--> */}
                            <li class="dropdown__item">                      
                                <div class="nav__link dropdown__button">
                                COMPÉTENCES <i class="ri-arrow-down-s-line dropdown__arrow"></i>
                                </div>

                                <div class="dropdown__container">
                                    <div class="dropdown__content">
                                        <div class="dropdown__group">
                                            <div class="dropdown__icon">
                                                <i class="ri-flashlight-line"></i>
                                            </div>
        
                                            <span class="dropdown__title">Most viewed courses</span>
        
                                            <ul class="dropdown__list">
                                                <li>
                                                    <a href="#" class="dropdown__link">HTML for beginners</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown__link">Advanced CSS</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown__link">JavaScript OOP</a>
                                                </li>
                                            </ul>
                                        </div>
        
                                        <div class="dropdown__group">
                                            <div class="dropdown__icon">
                                                <i class="ri-heart-3-line"></i>
                                            </div>
        
                                            <span class="dropdown__title">Popular courses</span>
        
                                            <ul class="dropdown__list">
                                                <li>
                                                    <a href="#" class="dropdown__link">Development with Flutter</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown__link">Web development with React</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown__link">Backend development expert</a>
                                                </li>
                                            </ul>
                                        </div>
        
                                        <div class="dropdown__group">
                                            <div class="dropdown__icon">
                                                <i class="ri-book-mark-line"></i>
                                            </div>
        
                                            <span class="dropdown__title">Careers</span>
        
                                            <ul class="dropdown__list">
                                                <li>
                                                    <a href="#" class="dropdown__link">Web development</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown__link">Applications development</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown__link">UI/UX design</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown__link">Informatic security</a>
                                                </li>
                                            </ul>
                                        </div>
        
                                        <div class="dropdown__group">
                                            <div class="dropdown__icon">
                                                <i class="ri-file-paper-2-line"></i>
                                            </div>
        
                                            <span class="dropdown__title">Certifications</span>
        
                                            <ul class="dropdown__list">
                                                <li>
                                                    <a href="#" class="dropdown__link">Course certificates</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown__link">Free certifications</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            {/* <!--=============== DROPDOWN 2 ===============--> */}
                            <li class="dropdown__item">
                                <div class="nav__link dropdown__button">
                                PORTFOLIO <i class="ri-arrow-down-s-line dropdown__arrow"></i>
                                </div>

                                <div class="dropdown__container">
                                    <div class="dropdown__content">
                                        <div class="dropdown__group">
                                            <div class="dropdown__icon">
                                                <i class="ri-code-line"></i>
                                            </div>
        
                                            <span class="dropdown__title">Web templates</span>
        
                                            <ul class="dropdown__list">
                                                <li>
                                                    <a href="#" class="dropdown__link">Free templates</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown__link">Premium templates</a>
                                                </li>
                                            </ul>
                                        </div>
        
                                        <div class="dropdown__group">
                                            <div class="dropdown__icon">
                                                <i class="ri-pen-nib-line"></i>
                                            </div>
        
                                            <span class="dropdown__title">Designs</span>
        
                                            <ul class="dropdown__list">
                                                <li>
                                                    <a href="#" class="dropdown__link">Web designs</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown__link">App designs</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown__link">Component design</a>
                                                </li>
                                            </ul>
                                        </div>
        
                                        <div class="dropdown__group">
                                            <div class="dropdown__icon">
                                                <i class="ri-apps-2-line"></i>
                                            </div>
        
                                            <span class="dropdown__title">Others</span>
        
                                            <ul class="dropdown__list">
                                                <li>
                                                    <a href="#" class="dropdown__link">Recent blogs</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown__link">Tutorial videos</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown__link">Webinar</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <a href="#" class="nav__link">À PROPOS</a>
                            </li>

                            

                            {/* <!--=============== DROPDOWN 3 ===============--> */}
                            <li class="dropdown__item">                        
                                <div class="nav__link dropdown__button">
                                CONTACT <i class="ri-arrow-down-s-line dropdown__arrow"></i>
                                </div>

                                <div class="dropdown__container">
                                    <div class="dropdown__content">
                                        <div class="dropdown__group">
                                            <div class="dropdown__icon">
                                                <i class="ri-community-line"></i>
                                            </div>
        
                                            <span class="dropdown__title">About us</span>
        
                                            <ul class="dropdown__list">
                                                <li>
                                                    <a href="#" class="dropdown__link">About us</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown__link">Support</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown__link">Contact us</a>
                                                </li>
                                            </ul>
                                        </div>
        
                                        <div class="dropdown__group">
                                            <div class="dropdown__icon">
                                                <i class="ri-shield-line"></i>
                                            </div>
        
                                            <span class="dropdown__title">Safety and quality</span>
        
                                            <ul class="dropdown__list">
                                                <li>
                                                    <a href="#" class="dropdown__link">Cookie settings</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="dropdown__link">Privacy Policy</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
    </>
  );
}

export default Navbars;