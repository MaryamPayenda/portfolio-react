import React, { useState, useEffect } from "react";
import NavBar from "./components/nav/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Project from "./components/Projects/Project";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Loading from "./components/Loading";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  // loading
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  if (loading) return <Loading />;

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
    </React.Fragment>
  );
}

export default App;
