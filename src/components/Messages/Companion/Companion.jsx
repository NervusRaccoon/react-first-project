import { NavLink } from 'react-router-dom';
import classes from './Companion.module.css';

const Companion = (props) => {
    return (
        <div className={classes.content}>
          <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
        </div>
    );
}

export default Companion;