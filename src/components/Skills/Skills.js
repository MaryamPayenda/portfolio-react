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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              ipsam fugiat consectetur eum culpa ipsa, exercitationem vel, eius
              cumque rem dignissimos quidem officia. Qui, non quae sapiente sit
              officia itaque!
            </p>
          </div>
          <div className={classes.Info}>
            <div className={classes.Technologies}>
              <h2>Operating Systems</h2>
              <img src="" alt="hi" />
              <div>Windows</div>
              <div>Linux/ Ubuntu</div>
            </div>
            <div className={classes.Technologies}>
              <h2>Programming</h2>
              <h3>Languages</h3>
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
              <div>css</div>
              <div>Github</div>
              <div>Git</div>
              <div>Git</div>
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
