import React from "react";
import NavBar from "./components/nav/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";

import Footer from "./components/Footer/Footer";
function App() {
  return (
    <React.Fragment>
      <NavBar />

      <Home />

      <Footer />
      <About />
    </React.Fragment>
  );
}

export default App;
