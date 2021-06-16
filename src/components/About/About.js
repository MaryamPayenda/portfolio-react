import React from "react";
import classes from "./About.module.css";
import { FaHome } from "react-icons/fa";
const About = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Header}>
        <h1>
          ABOUT <span>ME</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsam
          fugiat consectetur eum culpa ipsa, exercitationem vel, eius cumque rem
          dignissimos quidem officia. Qui, non quae sapiente sit officia itaque!
        </p>
      </div>
      <div className={classes.Info}>
        <div className={classes.Image}>
          <img src="" alt="" />
        </div>
        <div className={classes.Text}>
          <h3>I'm Maryam Payenda</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae magni
            numquam consectetur cumque, a inventore sed similique quis esse modi
            porro quia qui excepturi tenetur, nulla illum ut voluptatibus eum.
          </p>
          <div className={classes.MoreInfo}>
            <FaHome />
            <FaHome />
            <FaHome />
            <FaHome />
          </div>
          <div className={classes.Button}>
            <button>Download My CV</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
