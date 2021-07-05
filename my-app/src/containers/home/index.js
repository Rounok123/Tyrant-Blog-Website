import React from 'react';
import Typed from 'react-typed';
import './style.css';

const Home  = props => {
    return (
        <div className="main">

            <div id="home">
                <h1>Change the world by being yourself</h1>
                <h3 id="type">
                <Typed className="text-type"
                    strings={["Welcome to Tyrant blogging",
                    "Love For All, Hatred For None.",
                    "Die with memories, not dreams",
                    "Aspire to inspire before we expire"]}
                    typeSpeed={50}
                    backSpeed={50}
                    loop
                />
                </h3>
            </div>

            <div id="testimonials">
                <h1>Testimonials</h1>
            </div>
            {
                $('.testi3').owlCarousel({
                    loop: true,
                    margin: 30,
                    nav: false,
                    dots: true,
                    autoplay: true,
                    responsiveClass: true,
                    responsive: {
                      0: {
                        items: 1,
                        nav: false
                      },
                      1024: {
                        items: 3
                      }
                    }
                  })
            }
        </div>
      );
}

export default Home;