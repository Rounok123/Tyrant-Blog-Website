import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/home/index";
import Contacts from "./containers/Contact Us/index";
import About from "./containers/about/index";
import Blogs from "./containers/blog/index";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/blogs" component={Blogs} />
        </Switch>
      </Router>
      <Footer/>
	  </div>
  );
}

export default App;
