import { NavLink } from 'react-router-dom';
import classes from './NavItem.module.css';

const NavItem = (props) => {
  return (
    <div className={classes.item}>
      <NavLink to={props.path} className={({ isActive }) => isActive ? classes.activeLink : classes.inactiveLink}>
        <div className={classes.button}>
          {props.name}
        </div>
      </NavLink>
    </div>
  );
}

export default NavItem;