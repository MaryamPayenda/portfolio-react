import React from "react";
import classes from "./Project.module.scss";
import Data from "../../data.json";

const Project = ({}) => {
  let galeryData;
  if (Data) {
    galeryData = Data.map((obj) => (
      <li key={obj.id} className={classes.Image}>
        <img
          src={`${process.env.PUBLIC_URL}/${obj.img}`}
          className={classes.Photo}
          alt={obj.title}
        />
        <a href={obj.link}>
          <div className={classes.Overlay}>
            <div>{obj.project}</div>

            <p>{obj.title} </p>
          </div>
        </a>
      </li>
    ));
  } else galeryData = <div />;
  return (
    <div>
      <div className={classes.Header}>
        <h2>
          <span> My </span>work
        </h2>
        <p>
          Here you can find some of my project during DCI web development
          course. These projects are mainly desinged with
          HTML,CSS,SASS,Javascript,React.js and some other libraries.
        </p>
      </div>
      <div className={classes.Main}>
        <ul className={classes.Gallery}>{galeryData}</ul>
      </div>
    </div>
  );
};

export default Project;
