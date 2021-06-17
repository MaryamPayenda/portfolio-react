import React from "react";
import classes from "./Contact.module.scss";
import { FaMapMarker, FaEnvelope, FaCode } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className={classes.MainContainer}>
        <div className={classes.Container}>
          <div className={classes.Header}>
            <h1>
              CONTACT <span>ME</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              ipsam fugiat consectetur eum culpa ipsa, exercitationem vel, eius
              cumque rem dignissimos quidem officia. Qui, non quae sapiente sit
              officia itaque!
            </p>
          </div>
          <div className={classes.Info}>
            <div className={classes.EmailInfo}>
              <h4>Get In Touch</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
                sapiente.
              </p>
              <div className={classes.MoreInfo}>
                <FaMapMarker className={classes.icon} />
                <span>
                  Location <div>Leipzig</div>
                </span>
              </div>

              <div className={classes.MoreInfo}>
                <FaEnvelope className={classes.icon} />
                <span>
                  E-mail <div>maryampayanda12@gmail.com</div>
                </span>
              </div>
              <div className={classes.MoreInfo}>
                <FaCode className={classes.icon} />
                <span>
                  Website <div>.com</div>
                </span>
              </div>
            </div>
            <div className={classes.FormInfo}>
              <div>
                <button className={classes.Button}>Download My CV</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
