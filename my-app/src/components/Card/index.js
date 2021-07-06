import React from "react";
import "./style.css";

const Card = (props) => {
  return (
    <div>
    <div className="showcase">
      <div class="blog-card">
        <div class="header">
          <h2 class="category">Web Development</h2>
        </div>

        <div class="content">
          <div class="picture-wrapper">
            <img className="bimg" src="https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/11/Artificial-Intelligence-5.jpg"/>
          </div>

          <div class="text-wrapper">
            <a href="https://www.techopedia.com/2/29912/development/web-development/10-things-every-modern-web-developer-must-know">
            <h1 class="title">Thinking to become a Web Developer ???</h1>
            </a>
            <h3 class="author">By Dipsikha Banerjee</h3>
            <p class="text">
              We give wings to your dreams. Now you decide where to fly.Let's explore...
            </p>
          </div>
        </div>
      </div>
      <div class="blog-card">
        <div class="header">
          <h2 class="category">UI Development</h2>
        </div>

        <div class="content">
          <div class="picture-wrapper">
          <img className="bimg" src="https://www.smart-academy.in/wp-content/uploads/2020/11/SMART-ACADEMY-BLOG-POST-UI-DEVELOPER.jpg"/>
          </div>

          <div class="text-wrapper">
           <a href="https://careerfoundry.com/en/blog/ui-design/how-to-become-a-ui-designer/"> <h1 class="title">10 things you should know to become a UI designer</h1></a>
            <h3 class="author">By Rounok Das</h3>
            <p class="text">
              Be more Strong than your Excuses. Let's explore...
            </p>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default Card;
