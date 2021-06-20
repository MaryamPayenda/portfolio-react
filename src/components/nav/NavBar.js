//import { FaHome, FaUser, FaThLarge, FaBriefcase } from "react-icons/fa";
import classes from "./NavBar.module.scss";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const NavBar = () => {
  return (
    <div className={classes.NavBar}>
      <div className={classes.logo}>
        m<span>P.</span>
      </div>
      <Navigation />
      <MobileNavigation />
    </div>
  );
};
export default NavBar;
