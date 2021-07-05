import React from "react";
import Typed from "react-typed";
import "./style.css";

const Home = (props) => {
  return (
    <div className="main">
        <div id="home">
          <h1>Change the world by being yourself</h1>
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
          <h1>Testimonials</h1>
          <div className="container">
            <img src="bandmember.jpg" alt="Avatar" />
            <p>
              <span>Chris Fox.</span> CEO at Mighty Schools.
            </p>
            <p>John Doe saved us from a web disaster.</p>
          </div>

          <div className="container">
            <img src="avatar_g2.jpg" alt="Avatar" />
            <p>
              <span>Rebecca Flex.</span> CEO at Company.
            </p>
            <p>No one is better than John Doe.</p>
          </div>
        </div>
    </div>
  );
};

export default Home;
