import React from "react";
import classes from "./Footer.module.scss";
import { FaGithub, FaLinkedinIn, FaEnvelopeSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className={classes.Footer}>
        <div className={classes.Media}>
          <ul>
            <li>
              <a href="https://github.com/MaryamPayenda" target="_blank">
                <FaGithub className={classes.fa} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/maryam-payenda-1844a7140/"
                target="_blank"
              >
                <FaLinkedinIn className={classes.fa} />
              </a>
            </li>

            <li>
              <a href="mailto: maryampayanda12.com" target="_blank">
                <FaEnvelopeSquare className={classes.fa} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
