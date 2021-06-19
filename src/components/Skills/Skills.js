import React from "react";
import classes from "./Skills.module.scss";
import windows from "../../img1/windows.png";
import ubuntu from "../../img1/ubuntu.jpeg";
import html from "../../img1/html5.png";
import js from "../../img1/js.png";
import css from "../../img1/css3.png";
import scss from "../../img1/sass.png";
import csharp from "../../img1/csharp.jpeg";
import react from "../../img1/react.png";
import node from "../../img1/node.png";
import sqlServer from "../../img1/sqlserver.png";
import sql from "../../img1/mysql.png";
import office from "../../img1/msOffice.jpeg";
import code from "../../img1/msCode.jpeg";
import github from "../../img1/github.png";
import slack from "../../img1/slack.png";
import git from "../../img1/git.png";

const Skills = () => {
  return (
    <div>
      <div className={classes.MainContainer}>
        <div className={classes.Container}>
          <div className={classes.Header}>
            <h1>
              <span>MY</span> SKILLS
            </h1>
            <p>
              I am life long life lerner and enjoy learning new stuff! below are
              some programming languages,toolkits,frameworks and libraries that
              I can work with.
            </p>
          </div>
          <div className={classes.Info}>
            <div className={classes.Technologies}>
              <h2>Operating Systems</h2>

              <div>
                <img src={windows} alt="hi" />
                <span>Windows</span>
              </div>
              <div>
                <img src={ubuntu} alt="" />
                <span> Linux/ Ubuntu</span>
              </div>
            </div>
            <div className={classes.Technologies}>
              <h2>Programming</h2>

              <div>
                <img src={html} alt="" />
                <span>html5</span>{" "}
              </div>

              <div>
                <img src={js} alt="" />
                <span>Javasript</span>{" "}
              </div>

              <div>
                <img src={css} alt="" />
                <span>CSS</span>{" "}
              </div>

              <div>
                <img src={scss} alt="" />
                <span>SCSS</span>
              </div>

              <div>
                <img src={csharp} alt="" />
                <span>C#</span>{" "}
              </div>

              <div>
                <img src={react} alt="" />
                <span>React.js</span>{" "}
              </div>

              <div>
                <img src={node} alt="" />
                <span>Node.js</span>
              </div>

              <div>
                <img src={sqlServer} alt="" />
                <span>SQLserver</span>
              </div>

              <div>
                <img src={sql} alt="" />
                <span>MY SQL</span>{" "}
              </div>
            </div>
            <div className={classes.Technologies}>
              <h2>Other</h2>

              <div>
                <img src={office} alt="ms Office" />
                <span>M.S Office</span>{" "}
              </div>

              <div>
                <img src={code} alt="" />
                <span>M.S Code</span>{" "}
              </div>

              <div>
                <img src={github} alt="" />
                <span>Github</span>{" "}
              </div>

              <div>
                <img src={slack} alt="" />
                <span>Slack</span>{" "}
              </div>

              <div>
                <img src={git} alt="" />
                <span>Git</span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
