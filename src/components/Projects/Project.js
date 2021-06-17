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
        <div className={classes.Overlay}>
          <div>{obj.project}</div>

          <p>{obj.title} </p>
        </div>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
          deleniti dolor quis nostrum amet error ab tempora! Corporis facere
          quasi eveniet consectetur et laborum nostrum. Odio laudantium
          blanditiis quaerat perferendis?
        </p>
      </div>
      <div className={classes.Main}>
        <ul className={classes.Gallery}>{galeryData}</ul>
      </div>
    </div>
  );
};

export default Project;
