import React from "react";
import Card from "../../components/Card/index";

import "./style.css";

const Blogs = () => {
  return (
    <div id="back">
    <div className="showcase">
      <Card/>
    </div>
    <div className="showcase">
      <div class="blog-card">
        <div class="header">
          <h2 class="category"> App Development</h2>
        </div>

        <div class="content">
          <div class="picture-wrapper">
            <img className="bimg" src="https://www.iwdtechnologies.com/wp-content/uploads/2020/05/app-development-services.jpg"/>
          </div>

          <div class="text-wrapper">
            <a href="https://careerkarma.com/careers/mobile-development/">
            <h1 class="title">Things you should know App Development</h1>
            </a>
            <h3 class="author">By Christenia I</h3>
            <p class="text">
            Rest easy, our apps are handcrafted with love ❤️.
            </p>
          </div>
        </div>
      </div>
      </div>
      <div className="showcase">
      <div class="blog-card">
        <div class="header">
          <h2 class="category"> UI/UX </h2>
        </div>

        <div class="content">
          <div class="picture-wrapper">
            <img className="bimg" src="https://i.pinimg.com/originals/a5/76/0e/a5760ecb0a999a2434414831e1c89f9e.jpg"/>
          </div>

          <div class="text-wrapper">
            <a href="https://skillcrush.com/blog/skills-to-become-a-front-end-developer/">
            <h1 class="title">Want to become the best UI/UX Designer???</h1>
            </a>
            <h3 class="author">By Samual George</h3>
            <p class="text">
            We do what we love for people who love what we do.            
            </p>
          </div>
        </div>
      </div>
      <div class="blog-card">
        <div class="header">
          <h2 class="category"> Web Designer </h2>
        </div>

        <div class="content">
          <div class="picture-wrapper">
            <img className="bimg" src="https://miro.medium.com/max/3200/1*5IYtIe5OwxeoYXi226J-Uw.jpeg"/>
          </div>

          <div class="text-wrapper">
            <a href="https://webflow.com/blog/web-designer-skills">
            <h1 class="title">Want to become a Web Designer ?? Click Here !!!</h1>
            </a>
            <h3 class="author">By Ariana Grande</h3>
            <p class="text">
                Every Design is a New Creation ❤️.
            </p>
          </div>
        </div>
      </div>
      </div>
      <div className="showcase">
      <div class="blog-card">
        <div class="header">
          <h2 class="category"> Marketing </h2>
        </div>

        <div class="content">
          <div class="picture-wrapper">
            <img className="bimg" src="https://cdn.relevance.com/wp-content/uploads/2020/02/Mobile-App-Through-Content-Marketing.jpg"/>
          </div>

          <div class="text-wrapper">
            <a href="https://coschedule.com/blog/marketing-basics-101-guide">
            <h1 class="title">Things to know to develop great marketing field.</h1>
            </a>
            <h3 class="author">By Antonio Emmanual</h3>
            <p class="text">
            Design, Development, and Marketing.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Blogs;
