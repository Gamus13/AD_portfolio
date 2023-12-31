import React, { useEffect } from 'react'
import gsap from 'gsap';
import '../../Styles/SectionServices.css';
import ScrollTrigger from 'gsap/ScrollTrigger';
function ServicesSection() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        ScrollTrigger.defaults({
          toggleActions: "play none none reverse"
        });
    
        gsap.to('.img-container', {
          scale: 52,
          ease: "ease",
          scrollTrigger: {
            trigger: '.video-section',
            scrub: 1,
            start: "top top",
            end: "bottom",
            pin: true
          }
        });
    
        gsap.to('.right', {
          autoAlpha: 0,
          x: 500,
          duration: 1.5,
          scrollTrigger: {
            start: 1
          }
        });
    
        gsap.to('.left', {
          autoAlpha: 0,
          x: -500,
          duration: 1.5,
          scrollTrigger: {
            start: 1
          }
        });
    
        gsap.to('.txt-bottom', {
          autoAlpha: 0,
          letterSpacing: -10,
          duration: 2,
          scrollTrigger: {
            start: 2
          }
        });
    
        const tl = gsap.timeline();
    
        tl.from('.left-side div', {
          y: 150,
          opacity: 0,
          stagger: {
            amount: .4
          },
          delay: .5
        }).from('.right-side', { opacity: 0, duration: 2 }, .5)
          .to('.wrapper', { x: -window.innerWidth });
    
        ScrollTrigger.create({
          animation: tl,
          trigger: '.wrapper',
          start: "top top",
          end: "+=600",
          scrub: 1,
          pin: true,
          ease: "ease"
        });
    
        gsap.utils.toArray('.col').forEach(image => {
          gsap.fromTo(image, {
            opacity: .3,
            x: 0
          }, {
            opacity: 1,
            x: -50,
            scrollTrigger: {
              trigger: image,
              start: "10%",
              stagger: {
                amount: .4
              }
            }
          });
        });
    
        const timeline = gsap.timeline();
    
        timeline.from('.title span', {
          y: 150,
          skewY: 7,
          duration: 3
        }).from('.txt-bottom', {
          letterSpacing: -10,
          opacity: 0,
          duration: 3
        });
    }, []);

    return (
        <>
            <div class="wrapper">
                <section class="video-section">
                    <div class="video-container">
                        <video src="./media/flower.mp4" autoplay loop muted></video>
                    </div>
                    <div class="img-container">
                        <img src="./media/window.png" alt="" class="img"/>
                    </div>

                    <div class="text-content">
                        <div class="img_txt">
                            <div class="title sm left">
                                <span>between</span>
                            </div>
                            <div class="title bg left">
                                <span>Reality</span>
                            </div>
                            <div class="title bg right n">
                                <span>&</span>
                            </div>
                            <div class="title bg right">
                                <span>Dream</span>
                            </div>
                        </div>
                        <p class="txt-bottom">
                            shots that will change your mind
                        </p>
                    </div>

                    <div class="v_container">
                        <div class="left-side">
                            <div class="tv">
                                <div class="bg">push</div>
                                <div class="sm">the</div>
                                <div class="bg bottom">envelope</div>
                            </div>
                            <div class="text-container">
                                <p>
                                    Photography has become a big part of almost
                                    every element of our lives.
                                </p>
                                <p>
                                    It become widespread and diverse but we know that this is still a real form of art and
                                    magic.

                                </p>
                            </div>
                        </div>
                        <div class="right-side">
                            <p>explore works <i class="fa-solid fa-arrow-right-long"></i></p>
                        </div>
                    </div>
                </section>

                <section class="section">
                    <div class="boxes-container">
                        <div class="columns box1">
                            <div class="col col-1">
                                <img src="./media/1.jpeg" alt=""/>
                                <img src="./media/2.jpeg" alt=""/>
                            </div>
                            <div class="col-2">
                                <h1>Carolina</h1>
                                <span>28 october 2021</span>
                                <div class="line"></div>
                                <div class="text-box">
                                    <p>
                                        This series is excellently showing that ordinary
                                        portrait photography still can be inspiring for you.
                                    </p>
                                    <p>
                                        Check the shots of beautiful Caroline in hat with red and green lights.
                                    </p>
                                </div>
                            </div>
                            <div class="col col-3">
                                <img src="./media/3.webp" alt=""/>
                                <img src="./media/4.jpeg" alt=""/>
                                <img src="./media/5.jpeg" alt=""/>
                            </div>
                        </div>
                        <div class="columns box2">
                            <div class="col col-1">
                                <img src="./media/p1.jpeg" alt=""/>
                                <img src="./media/p2.webp" alt=""/>
                            </div>
                            <div class="col-2">
                                <h1>soul dance</h1>
                                <span>17 september 2021</span>
                                <div class="line"></div>
                                <div class="text-box">
                                    <p>
                                        Beautiful dance of Hanna in neon ligths with retro effect. Pink lights, pretty women
                                        and sensuality.
                                    </p>
                                    <p>
                                        Inspiring vibes and invisible beautiful soul on this shots.
                                    </p>
                                </div>
                            </div>
                            <div class="col col-3">
                                <img src="./media/p3.jpeg" alt=""/>
                                <img src="./media/p4.jpeg" alt=""/>
                                <img src="./media/p5.jpeg" alt=""/>
                            </div>
                        </div>
                        <div class="columns box3">
                            <div class="col col-1">
                                <img src="./media/b1.jpeg" alt=""/>
                                <img src="./media/b2.webp" alt=""/>
                                <img src="./media/b3.jpeg" alt=""/>
                                <img src="./media/b4.jpeg" alt=""/>
                            </div>
                            <div class="col-2">
                                <h1>80's vibes</h1>
                                <span>1 september 2021</span>
                                <div class="line"></div>
                                <div class="text-box">
                                    <p>
                                        Retro nostagia can be sweet and sour at the same time. Christina helped us to make
                                        photos, that will give you this feelings.

                                    </p>
                                    <p>

                                        Drop in past times with this collection of 80's styled photos.
                                    </p>
                                </div>
                            </div>
                            <div class="col col-3">
                                <img src="./media/b5.webp" alt=""/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ServicesSection
