import React from 'react';
import './Saas/Skill.scss';

function SkillComponent() {
  return (
    <section className="section">
      <div className="wall">
        <div className="v-boxes">
            <div className="box">
                <span className="tooltip">CSS</span>
                <div className="box-face">
                    <div className="box-text">
                        <i className="fab fa-css3-alt"></i>
                    </div>
                </div>
                <div className="box-back">
                    <div className="box-text">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <i className="far fa-star"></i>
                    </div>
                </div>
            </div>

            <div class="box">
                <span class="tooltip">JavaScript</span>
                <div class="box-face">
                    <div class="box-text">
                        <i class="fab fa-js-square"></i>
                    </div>
                </div>
                <div class="box-back">
                    <div class="box-text">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>        
            </div>
            <div class="box">
                <span class="tooltip">Boostrap</span>
                <div class="box-face">
                    <div class="box-text">
                        <img src="https://bulma.io/favicons/favicon-32x32.png?v=201701041855" alt=""/>
                    </div>
                </div>
                <div class="box-back">
                    <div class="box-text">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </div>
            <div class="box">
                <span class="tooltip">Reactjs</span>
                <div class="box-face">
                    <div class="box-text"><i class="fab fa-vuejs"></i></div>
                </div>
                <div class="box-back">
                    <div class="box-text">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="v-boxes second">
            <div class="box">
                <span class="tooltip">PHP</span>
                <div class="box-face">
                    <div class="box-text"><i class="fab fa-php"></i></div>
                </div>
                <div class="box-back">
                    <div class="box-text">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </div>
            <div class="box">
                <span class="tooltip">Laravel</span>
                <div class="box-face">
                    <div class="box-text"><i class="fab fa-laravel"></i></div>
                </div>
                <div class="box-back">
                    <div class="box-text">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </div>
            <div class="box">
                <span class="tooltip">NodeJs</span>
                <div class="box-face">
                    <div class="box-text"><i class="fab fa-node-js"></i></div>
                </div>
                <div class="box-back">
                    <div class="box-text">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="v-boxes third">
            <div class="box">
                <span class="tooltip">Sql</span>
                <div class="box-face">
                    <div class="box-text">
                        <img src="https://electronjs.org/images/favicon.ico" alt=""/>
                    </div>
                </div>
                <div class="box-back">
                    <div class="box-text">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </div>
            <div class="box">
                <span class="tooltip">Threejs</span>
                <div class="box-face">
                    <div class="box-text">
                        <img src="https://vue-native.io/images/logo.png" alt=""/>
                    </div>
                </div>
                <div class="box-back">
                    <div class="box-text">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </div>
        </div>

        <div className="v-boxes forth">
          <div className="box link">
            <div className="box-face">
              <div className="box-text"><i className="fab fa-github-alt"></i></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillComponent;