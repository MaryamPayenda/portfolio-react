import React from "react";
import NavBar from "./components/nav/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Project from "./components/Projects/Project";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/project" component={Project} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
          <Route path={() => "/main" || "/anything"}>
            <Home />
          </Route>
        </Switch>
      </Router>

      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
