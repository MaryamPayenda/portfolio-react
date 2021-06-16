import React from "react";
import classes from "./Project.module.scss";
import Data from "../../data.json";

const Project = ({}) => {
  let galeryData;
  if (Data) {
    galeryData = Data.map((obj) => (
      <li key={obj.id} className={classes.MainContainer}>
        <img src={`${process.env.PUBLIC_URL}/${obj.img}`} alt={obj.title} />
        <div>
          <div>{obj.project}</div>

          <p>{obj.title} </p>
        </div>
      </li>
    ));
  } else galeryData = <div />;
  return (
    <React.Fragment>
      {/* <div className={classes.MainContainer}> */}
      {/* <div className={classes.Container}>
        <div className={classes.Header}>
          <h1>
            <span> My</span> Projects
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              omnis?
            </p>
          </div>
        </div>
      </div> */}
      <ul className={classes.Container}>{galeryData}</ul>
      {/* //</div> */}
    </React.Fragment>
  );
};

export default Project;
