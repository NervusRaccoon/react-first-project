import classes from './Header.module.css';
import logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <header className={classes.header}>
            <img src={logo} />
        </header>
    );
}

export default Header;