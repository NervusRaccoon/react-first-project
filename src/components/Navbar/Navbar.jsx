import classes from './Navbar.module.css';
import NavItem from './NavItem/NavItem';

const Navbar = () => {
  return (
      <nav className={classes.nav}>
        <NavItem path="/profile" name="Profile" />
        <NavItem path="/messages" name="Messages" />
        <NavItem path="/news" name="News" />
        <NavItem path="/music" name="Music" />
        <NavItem path="/settings" name="Settings" />
      </nav>
  );
}

export default Navbar;