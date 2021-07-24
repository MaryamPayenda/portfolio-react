import React from "react";
import classes from "./About.module.scss";
import { FaCode, FaHandshake } from "react-icons/fa";
import avatar from "../../img1/avatar.png";
//import DownloadLink from "react-download-link";
// import Pdf from "../../img/Letter.docx";

const About = () => {
  // const openResume = () => {
  //   window.open({ Pdf });
  // };
  return (
    <div className={classes.MainContainer}>
      <div className={classes.Container}>
        <div className={classes.Header}>
          <h1>
            ABOUT <span>ME</span>
          </h1>
          <p>
            I design and develop website for customers of all sizes ,
            specializing in creating modern websites.
          </p>
        </div>

        <div className={classes.Info}>
          <div className={classes.Image}>
            <img src={avatar} alt="Avatar" />
          </div>
          <div className={classes.Text}>
            <h2>I'm Maryam Payenda</h2>
            <p>I'm a Web developer based in Leipzig. </p>
            <p>
              I grew up thinking I would be an astronaut,but I developed a
              passion for computers. after high school graduation I joined
              Computer Science Faculty in Afghanistan. During and after uni I
              worked in exciting positions for ISAF and UNDP in my hometown
              Afghanistan. I love the logic & structure of coding, and problem
              solving is my passion .
            </p>
            <p>
              when I'm not playing with pixels you can find me playing with
              animals!
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
              <a href="./img/Letterr.docx" className={classes.Button} download>
                Download My CV
              </a>

              {/* <DownloadLink
                label="Download"
                className={classes.Button}
                filename="./img/Letter.docx"
                exportFile={() => "You will have my file now …"}
              /> */}

              {/* <button className={classes.Button} onClick={openResume}>
                Download My CV
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
