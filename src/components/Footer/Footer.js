import React from "react";
import classes from "./Footer.module.scss";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

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
              <a href="https://www.instagram.com/_mm.payenda/" target="_blank">
                <FaInstagram className={classes.fa} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
