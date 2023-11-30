import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
      <nav className={classes.nav}>
        <div className={classes.item}>
          <NavLink to="/profile" className={({ isActive }) => isActive ? classes.activeLink : classes.inactiveLink}>Profile</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/messages" className={({ isActive }) => isActive ? classes.activeLink : classes.inactiveLink}>Messages</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/news" className={({ isActive }) => isActive ? classes.activeLink : classes.inactiveLink}>News</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/music" className={({ isActive }) => isActive ? classes.activeLink : classes.inactiveLink}>Music</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/settings" className={({ isActive }) => isActive ? classes.activeLink : classes.inactiveLink}>Settings</NavLink>
        </div>
      </nav>
  );
}

export default Navbar;