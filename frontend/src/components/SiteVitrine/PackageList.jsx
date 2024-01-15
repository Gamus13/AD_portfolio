import React from 'react';
import './Saas/PackList.scss';

const PackList = () => {
  return (
    <div className="containerY">
      <div className="packList">
        <div className="packContainer">
          <input type="radio" id="personal" className="packRadio" name="pack" />
          <label className="pack" htmlFor="personal">
            {/* <div className="headerY">
              <h4>Personal</h4>
            </div> */}
            <div className="priceY">
              <p>
                <b>CDD</b>
                à negocier
              </p>
            </div>
            <div className="features">
              <p>
                Ce Services est utilisés pour des projets spécifiques ou des remplacements temporaires dans une equipe.
              </p>
              <ul>
                <li className="active">Développement de sites web </li>
                <li className="active">Intégration de maquettes et de designs</li>
                <li className="active">Développement back-end</li>
                <li className="active">Optimisation des performances    </li>
                <li className="active">Intégration de systèmes tiers </li>
                <li className="active">Collaboration avec des équipes</li>
                <li className="active">Bien d'autre...</li>
              </ul>
            </div>
          </label>
        </div>
        <div className="packContainer">
          <input type="radio" id="institutional" className="packRadio" name="pack" checked />
          <label className="pack" htmlFor="institutional">
            
            <div className="priceY">
              <p>
                <b>CDI</b>
                30 000 à 40 000€ /ans
              </p>
            </div>
            <div className="features">
              <p>
                Ce Services est utilisés pour des projets sur le long termes ou pour un emploi classique au sein d'une structure.
              </p>
              <ul>
                <li className="active">Développement de sites web</li>
                <li className="active">Intégration de maquettes et de designs </li>
                <li className="active">Développement back-end</li>
                <li className="active">Maintenance et mise à jour</li>
                <li className="active">Optimisation des performances</li>
                <li className="active">Intégration de systèmes tiers </li>
                <li className="active">veille technologique</li>
                <li className="active">Collaboration avec des équipes</li>
              </ul>
            </div>
          </label>
        </div>
        <div className="packContainer">
          <input type="radio" id="social" className="packRadio" name="pack" />
          <label className="pack" htmlFor="social">
            
            <div className="priceY">
              <p>
                <b>Freelance</b>
                20 à 40€ /h
              </p>
            </div>
            <div className="features">
              <p>
                Ce Services est utilisés pour la conception et la realisation des projets lourds ou des corrections et amelioration des projets existants(mission).
              </p>
              <ul>
                <li className="active">Création charte graphique personnalisée</li>
                <li className="active">Développement et intégration de sites web.</li>
                <li className="active">Collaboration avec des équipes de développement pour des projets spécifiques.</li>
                <li className="active">Mise en place du contenu(textes & images)</li>
                <li className="active">Optimisation des performances et du référencement (SEO) des sites web.</li>
                <li className="active">Développement de fonctionnalités front-end et back-end.</li>
                <li className="active">Intégration et gestion de bases de données.</li>
              </ul>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PackList;