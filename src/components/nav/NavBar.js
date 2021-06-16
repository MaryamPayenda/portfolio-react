//import { FaHome, FaUser, FaThLarge, FaBriefcase } from "react-icons/fa";
import classes from "./NavBar.module.scss";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import NavLinks from "./NavLinks";
const NavBar = () => {
  return (
    <div className={classes.NavBar}>
      <div className={classes.logo}>
        <a href="#">
          m<span>P.</span>
        </a>
      </div>
      <NavLinks />
      {/* <Navigation />
      <MobileNavigation /> */}
    </div>
  );
};
export default NavBar;
