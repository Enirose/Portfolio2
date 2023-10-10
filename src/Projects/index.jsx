
import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Swiper from "swiper";


export default function SwiperCarousel () {
  useEffect(() => {
    new Swiper(".swiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      // slidesPerView: "auto",
      slidesPerView: 3, // Number of slides to display at once
      loop: true,
      loopAdditionalSlides: 2, // Number of additional slides to create a continuous loop
      initialSlide: 3,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      },
      keyboard: {
        enabled: true,
      },
      mousewheel: {
        thresholdDelta: 70,
      },
      spaceBetween: 60,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

     // Handle window resize to update Swiper
    window.addEventListener("resize", () => {
      Swiperwiper.update();
    });

    return () => {
      // Clean up event listener on component unmount
      window.removeEventListener("resize", () => {
        Swiperwiper.update();
      });
    };
  }, []);

  return (
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide swiper-slide--one">
            <span>domestic</span>
              <div>
                <h2>Enjoy the exotic of sunny Hawaii</h2>
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  Maui, Hawaii
                </p>
              </div>
          </div>                  
          <div className="swiper-slide swiper-slide--two">
            <span>subtropical</span>
              <div>
                <h2>The Island of Eternal Spring</h2>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  Lanzarote, Spanien
                </p>
              </div>
          </div>                        
          <div className="swiper-slide swiper-slide--three">
            <span>history</span>
              <div>
                <h2>Awesome Eiffel xcxcxcx czzxczxczxczxcxcxzcxz czxczxcxzc zxczxczxc Tower</h2>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  Paris, France
                </p>
              </div>
          </div>
          <div className="swiper-slide swiper-slide--two">
            <span>subtropical</span>
              <div>
                <h2>The Island of Eternal Spring</h2>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  Lanzarote, Spanien
                </p>
              </div>
          </div>                        
          <div className="swiper-slide swiper-slide--three">
            <span>history</span>
              <div>
                <h2>Awesome Eiffel xcxcxxc Tower</h2>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  Paris, France
                </p>
              </div>
          </div>
        </div>
        
        
        {/* Swiper pagination */}
        <div className="swiper-pagination"></div>
      </div>
  );
};
