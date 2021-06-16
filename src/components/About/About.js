import React from "react";
import classes from "./About.module.scss";
import { FaCode, FaSave, FaHandshake } from "react-icons/fa";
import avatar from "../../img/avatar.png";

const About = () => {
  return (
    <div className={classes.MainContainer}>
      <div className={classes.Container}>
        <div className={classes.Header}>
          <h1>
            ABOUT <span>ME</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsam
            fugiat consectetur eum culpa ipsa, exercitationem vel, eius cumque
            rem dignissimos quidem officia. Qui, non quae sapiente sit officia
            itaque!
          </p>
        </div>

        <div className={classes.Info}>
          <div className={classes.Image}>
            <img src={avatar} alt="Avatar" />
          </div>
          <div className={classes.Text}>
            <h2>I'm Maryam Payenda</h2>
            <p>I'm a Web developer based in Leipzig </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              magni numquam consectetur cumque, a inventore sed similique quis
              esse modi porro quia qui excepturi tenetur, nulla illum ut
              voluptatibus eum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              omnis?
            </p>
            <div className={classes.MoreInfo}>
              <FaHandshake className={classes.icon} />
              <span>
                Class Projects <div>Completed</div>
              </span>
            </div>

            <div className={classes.MoreInfo}>
              <FaCode className={classes.icon} />
              <span>
                Latest Project <div>Portfolio</div>
              </span>
            </div>
            <div>
              <button className={classes.Button}>Download My CV</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
