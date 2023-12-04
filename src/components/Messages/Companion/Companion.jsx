import { NavLink } from 'react-router-dom';
import classes from './Companion.module.css';

const Companion = (props) => {
  return (
    <div className={classes.content}>
      <NavLink to={`/messages/${props.id}`} className={({ isActive }) => isActive ? classes.activeLink : classes.inactiveLink}>
        <div className={classes.button}>
          {props.name}
        </div>
      </NavLink>
    </div>
  );
}

export default Companion;