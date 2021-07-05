import React from 'react';
import './style.css';
import Dimg from'../../components/img/D.jpg';
import Rimg from'../../components/img/R.jpg';

const About = () => {
return (
	<div>
		<div id="our-mission">
			<h1 id="first">Our Mission</h1>
			<p> Curiosity2Create will equip young minds with the skills and attitudes needed for fearless exploration, creative problem-solving, and self-discovery through interactive project-based programming.</p>
		</div>
		<div id="our-vission">
			<p> Curiosity2Create will equip young minds with the skills and attitudes needed for fearless exploration, creative problem-solving, and self-discovery through interactive project-based programming.</p>
		</div>
		<div id="my-team">
			<h1>Our Team</h1>
			<img src={Dimg} className="team"></img>
			<img src={Rimg} className="team"></img>
		</div>
	</div>
);
};

export default About;
