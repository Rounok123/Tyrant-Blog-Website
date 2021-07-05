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
        </div>
    </div>
  );
};

export default Home;
