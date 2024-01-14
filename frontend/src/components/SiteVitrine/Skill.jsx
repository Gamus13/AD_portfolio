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
                <span class="tooltip">figma</span>
                <div class="box-face">
                    <div class="box-text">
                        <img src="data:image/png;base64,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" alt="" srcset="" />
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
                    <div class="box-text"><i class="fab fa-react"></i></div>
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
                        <img src="data:image/jpeg;base64,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" alt=""/>
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
                        <img src="data:image/png;base64,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" alt=""/>
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