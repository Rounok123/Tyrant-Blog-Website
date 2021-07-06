import React from "react";
import Typed from "react-typed";
import "./style.css";
import r from '../../components/img/bg-1.jpg';
import a1 from '../../components/img/a-1.jpg';
import a2 from '../../components/img/a-2.jpg';
import a3 from '../../components/img/a-3.jpg';
import a4 from '../../components/img/a-4.jpg';
import a5 from '../../components/img/a-5.jpg';
import a6 from '../../components/img/a-6.jpg';

const Home = (props) => {
  return (
    <div className="main">
      <div id="home">
        <h1 id="header">Change the world by being yourself</h1>
        <Typed
          className="text-type"
          strings={[
            "Welcome to Tyrant blogging",
            "Love For All, Hatred For None.",
            "Die with memories, not dreams",
            "Aspire to inspire before we expire",
          ]}
          typeSpeed={50}
          backSpeed={50}
          loop
        />
      </div>
      <div id="testimonials">
      <h1 id="testi-head">Happy Faces...</h1>
      <html lang="en" dir="ltr">
        <head>
          <meta charset="UTF-8" />
          <link rel="stylesheet" href="style.css" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </head>
        <body>
          <div class="container">
            <input type="radio" name="dot" id="one" />
            <input type="radio" name="dot" id="two" />
            <div class="main-card">
              <div class="cards">
                <div class="card">
                  <div class="content">
                    <img src={a1} id="i"/>
                    <div class="details">
                      <div class="name">Samuel Rate</div>
                      <div class="job">Web Designer</div>
                    </div>
                    <div class="media-icons">
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="content">
                    <img src={a2} id="i"/>
                    <div class="details">
                      <div class="name">Danieel Fret</div>
                      <div class="job">UI Designer</div>
                    </div>
                    <div class="media-icons">
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="content">
                    <img src={a3} id="i"/>
                    <div class="details">
                      <div class="name">Zias Khan</div>
                      <div class="job">Web Devloper</div>
                    </div>
                    <div class="media-icons">
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cards">
                <div class="card">
                  <div class="content">
                    <img src={a4} id="i"/>
                    <div class="details">
                      <div class="name">Frenklin Carlo</div>
                      <div class="job">App Developer</div>
                    </div>
                    <div class="media-icons">
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="content">
                    <img src={a5} id="i"/>
                    <div class="details">
                      <div class="name">Adrina Calvo</div>
                      <div class="job">UI Designer</div>
                    </div>
                    <div class="media-icons">
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="content">
                    <img src={a6} id="i"/>
                    <div class="details">
                      <div class="name">Nicole Lewis</div>
                      <div class="job">Web Devloper</div>
                    </div>
                    <div class="media-icons">
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="button">
              <label for="one" class=" active one"></label>
              <label for="two" class="two"></label>
            </div>
          </div>
        </body>
      </html>
    </div>
    </div>
  );
};

export default Home;
