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

              <div className={classes.ToolkitsDivs}>
                <img src={windows} alt="Windows" />
                <span>Windows</span>
              </div>
              <div className={classes.ToolkitsDivs}>
                <img src={ubuntu} alt="Ubuntu" />
                <span> Linux</span>
              </div>
            </div>

            <div className={classes.Technologies}>
              <h2>Programming</h2>

              <div className={classes.ToolkitsDivs}>
                <img src={html} alt="HTML5" />
                <span>html5</span>{" "}
              </div>

              <div className={classes.ToolkitsDivs}>
                <img src={js} alt="Javascript" />
                <span>Javasript</span>{" "}
              </div>

              <div className={classes.ToolkitsDivs}>
                <img src={css} alt="CSS" />
                <span>CSS</span>{" "}
              </div>

              <div className={classes.ToolkitsDivs}>
                <img src={scss} alt="SCSS" />
                <span>SCSS</span>
              </div>

              <div className={classes.ToolkitsDivs}>
                <img src={csharp} alt="C#" />
                <span>C#</span>{" "}
              </div>

              <div className={classes.ToolkitsDivs}>
                <img src={react} alt="Reactjs" />
                <span>React.js</span>{" "}
              </div>

              <div className={classes.ToolkitsDivs}>
                <img src={node} alt="Nodejs" />
                <span>Node.js</span>
              </div>

              <div className={classes.ToolkitsDivs}>
                <img src={sqlServer} alt="SQl Server" />
                <span>SQLserver</span>
              </div>

              <div className={classes.ToolkitsDivs}>
                <img src={sql} alt="" />
                <span>MY SQL</span>{" "}
              </div>
            </div>
            <div className={classes.Technologies}>
              <h2>Other</h2>
              <div className={classes.ToolkitsDivs}>
                <img src={office} alt="ms Office" />
                <span>M.S Office</span>{" "}
              </div>
              <div className={classes.ToolkitsDivs}>
                <img src={code} alt="MS Code" />
                <span>M.S Code</span>{" "}
              </div>
              <div className={classes.ToolkitsDivs}>
                <img src={github} alt="Github" />
                <span>Github</span>{" "}
              </div>
              <div className={classes.ToolkitsDivs}>
                <img src={slack} alt="Slack" />
                <span>Slack</span>{" "}
              </div>
              <div className={classes.ToolkitsDivs}>
                <img src={git} alt="Git" />
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
