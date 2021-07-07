import React from 'react';
import './style.css';
import Dimg from'../../components/img/D.jpg';
import Rimg from'../../components/img/R.jpg';

const About = () => {
return (
	<div>
		<div id="our-mission">
			<h1 id="first">Our Mission</h1>
			<p id="firstp"> To enhancing the business growth of our customers with creative Design and Development to deliver market-defining high-quality solutions that create value and consistent competitive advantage for our clients around the world.</p>
		</div>
		<div id="our-vission">
			<p> Curiosity2Create will equip young minds with the skills and attitudes needed for fearless exploration, We take pride in our on time delivery and ability to meet quick turn around requests while exceeding customer quality demands..</p>
		</div>
		<div id="my-team">
			<h1 id="t">Our Team</h1>
			<img src={Dimg} className="team" alt="Avatar"></img>
			<p className="a">"I am a Web Developer" - ℝ𝕠𝕦𝕟𝕠𝕜 𝔻𝕒𝕤</p>
			<img src={Rimg} className="team"></img>
			<p className="a">"I am a App Developer" - 𝓓𝓲𝓹𝓼𝓲𝓴𝓱𝓪 𝓑𝓪𝓷𝓮𝓻𝓳𝓮𝓮</p>
		</div>
	</div>
);
};

export default About;
