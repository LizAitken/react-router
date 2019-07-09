import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import HomePage from './Components/HomePage.js';
import AboutPage from './Components/AboutPage.js';
import ContactPage from './Components/ContactPage.js';
import TopicsPage from './Components/TopicsPage';
import MainNav from './Components/MainNav';

const routesArray = [
  { linkRoute: "/", linkName: "Homepage" },
  { linkRoute: "/about", linkName: "About Page"},
  { linkRoute: "/contact", linkName: "Contact Page"},
  { linkRoute: "/topics", linkName: "Topics Page"}
];

function App() {
  return (
    <Router> 
      <div className="App">
        <MainNav routes={routesArray} />
        <Route path="/" exact render={routeProps => <HomePage name="Liz" {...routeProps}/>}/>
        <Route path="/about/" component={AboutPage} />
        <Route path="/contact/" component={ContactPage}/>
        <Route path="/topics" component={TopicsPage} />
      </div> 
    </Router>
  );
}

export default App;
