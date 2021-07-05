import React from 'react';
import './style.css';
const Navbar = () => {
return (
	<nav>
		<a href="/home"><img src="./favicon.png"></img></a>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/contacts">Always Welcome</a></li>
			<li><a href="/blogs">Blogs</a></li>
		</ul>
	</nav>
);
};

export default Navbar;
