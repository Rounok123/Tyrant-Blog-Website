import React from 'react';
import Typed from 'react-typed';
import './style.css';

const Home  = props => {
    return (
        <div id="home">
            <h1>Welcome to Tyrant Bloging</h1>
            <h3 id="type">
            <Typed className="text-type"
                strings={["uhgiuer","isd,ogfgf","hlcshcks"]}
                typeSpeed={40}
                backSpeed={60}
                loop
            />
            </h3>

            {/* <h2><a href="#" id="btn">Go To Blog</a></h2> */}
        </div>
    );
}

export default Home;