import { NavLink } from 'react-router-dom';
import classes from './Companion.module.css';
import { updateMessagesPage } from '../../../redux/state';

const Companion = (props) => {

  let updatePage = () => {
    props.dispatch(updateMessagesPage())
  }

  return (
    <div className={classes.content}>
      <NavLink to={`/messages/${props.id}`} className={({ isActive }) => isActive ? classes.activeLink : classes.inactiveLink }>
        <div className={classes.button} onClick={updatePage}>
          {props.name}
        </div>
      </NavLink>
    </div>
  );
}

export default Companion;