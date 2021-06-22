import React, { useState } from "react";
import NavLinks from "./NavLinks";
import classes from "./NavBar.module.scss";
// import { CgMenuRound } from "react-icons/cg";
// import { CgCloseO } from "react-icons/cg";
import { FaTimes, FaBars } from "react-icons/fa";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <FaBars
      className={classes.Humberger}
      size="40px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <FaTimes
      className={classes.Humberger}
      size="40px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  return (
    <nav className={classes.MobileNavigation}>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks />}
    </nav>
  );
};

export default MobileNavigation;
