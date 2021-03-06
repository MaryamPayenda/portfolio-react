import React, { useEffect, useRef } from "react";
import classes from "./Home.module.scss";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <div className={classes.Home}>
        <div className={classes.Container}>
          <div class={classes.TextTitle}>Hello, I'm</div>
          <div class={classes.TextName}>Maryam Payenda</div>

          <div class={classes.TextField}>
            Fullstack
            <span> Web Developer</span>
          </div>
          {/* <div className={classes.Crow}>|</div> */}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
