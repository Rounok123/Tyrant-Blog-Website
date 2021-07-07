import React from "react";
import "./style.css";
function footer() {
  return (
    <div>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
              <img src="favicon.png" id="logo"/> 
          </h3>

          <p class="footer-links">
            <a href="/" class="link-1">
              Home
            </a>

            <a href="/blogs">Blog</a>

            <a href="/about">About</a>
            <a href="/contacts">Contact</a>
          </p>

          <p class="footer-company-name">Tyrant © 2021 All rights reserved</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>6/10 Sreenagar Pally,Rabindra Sarani,</span>Durgapur, West Bengal,India
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+916295664284,
                 +917908883220
            </p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">support@company.com</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
               Our mission is to enrich the new generation about the new technologies.New designs are freely available with demo and source code.
          </p>

          <div class="footer-icons">
            <a href="https://www.facebook.com/profile.php?id=100014393987294">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/style_n_tips_by_sikha/">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/dipsikha-banerjee-61ba29200/">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/Rounok123">
              <i class="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default footer;
