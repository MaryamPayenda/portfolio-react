import React from "react";
import classes from "./Skills.module.scss";

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
                <img
                  src={`${process.env.PUBLIC_URL}/img/windows.png`}
                  alt="Windows"
                />
                <span>Windows</span>
              </div>
              <div className={classes.ToolkitsDivs}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/ubuntu.jpeg`}
                  alt="Ubuntu"
                />
                <span> Linux</span>
              </div>
            </div>

            <div className={classes.Technologies}>
              <h2>Programming</h2>

              <div className={classes.ToolkitsDivs}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/html5.png`}
                  alt="something"
                />
                <span>html5</span>
              </div>

              <div className={classes.ToolkitsDivs}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/js.png`}
                  alt="Javascript"
                />
                <span>Javasript</span>{" "}
              </div>

              <div className={classes.ToolkitsDivs}>
                <img src={`${process.env.PUBLIC_URL}/img/css3.png`} alt="CSS" />
                <span>CSS</span>{" "}
              </div>

              <div className={classes.ToolkitsDivs}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/sass.png`}
                  alt="SCSS"
                />
                <span>SCSS</span>
              </div>

              <div className={classes.ToolkitsDivs}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/csharp.jpeg`}
                  alt="C#"
                />
                <span>C#</span>{" "}
              </div>

              <div className={classes.ToolkitsDivs}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/react.png`}
                  alt="Reactjs"
                />
                <span>React.js</span>{" "}
              </div>

              <div className={classes.ToolkitsDivs}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/node.png`}
                  alt="Nodejs"
                />
                <span>Node.js</span>
              </div>

              <div className={classes.ToolkitsDivs}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/sqlServer.png`}
                  alt="SQl Server"
                />
                <span>SQLserver</span>
              </div>

              <div className={classes.ToolkitsDivs}>
                <img src={`${process.env.PUBLIC_URL}/img/mysql.png`} alt="" />
                <span>MY SQL</span>{" "}
              </div>
            </div>
            <div className={classes.Technologies}>
              <h2>Other</h2>
              <div className={classes.ToolkitsDivs}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/msOffice.jpeg`}
                  alt="ms Office"
                />
                <span>M.S Office</span>{" "}
              </div>
              <div className={classes.ToolkitsDivs}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/msCode.jpeg`}
                  alt="MS Code"
                />
                <span>M.S Code</span>{" "}
              </div>
              <div className={classes.ToolkitsDivs}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/github.png`}
                  alt="Github"
                />
                <span>Github</span>{" "}
              </div>
              <div className={classes.ToolkitsDivs}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/slack.png`}
                  alt="Slack"
                />
                <span>Slack</span>{" "}
              </div>
              <div className={classes.ToolkitsDivs}>
                <img src={`${process.env.PUBLIC_URL}/img/git.png`} alt="Git" />
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
