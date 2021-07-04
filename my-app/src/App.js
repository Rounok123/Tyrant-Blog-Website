import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Contacts from './pages/contact'
import About from './pages/about';
import Blogs from './pages/blogs';

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

