import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/home';
import Contacts from './containers/contact'
import About from './containers/about';
import Blogs from './containers/blogs';

function App() {
return (
	<Router>
	<Navbar />
	<Switch>
		<Route path='/home' exact component={Home} />
		<Route path='/about' component={About} />
		<Route path='/contacts'component={Contacts}/>
		<Route path='/blogs' component={Blogs} />
	</Switch>
	</Router>
);
}

export default App;

