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

              <div>
                {/* <img src="" alt="hi" /> */}
                Windows
              </div>
              <div>
                {/* <img src="../../img/windows.png" alt="hi" />  */}
                Linux/ Ubuntu
              </div>
            </div>
            <div className={classes.Technologies}>
              <h2>Programming</h2>

              <div>html5</div>
              <div>Javasript</div>
              <div>CSS</div>
              <div>SCSS</div>
              <div>c#</div>
              <div>React.js</div>
              <div>Node.js</div>
              <div>Database</div>
              <div>SQLserver</div>
              <div>MY SQL</div>
            </div>
            <div className={classes.Technologies}>
              <h2>Other</h2>

              <div>M.S Office</div>
              <div>M.S Code</div>
              <div>Github</div>
              <div>Slack</div>
              <div>Git</div>
              <div>Git</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
