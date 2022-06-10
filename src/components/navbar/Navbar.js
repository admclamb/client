import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.navbrand}>
          <Link to="/">
            <span>JWT</span> Tutorial
          </Link>
        </h1>
        <ul className={styles.navItems}>
          <li>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/signup" className={styles.navLink}>
              Signup
            </Link>
          </li>
          <li>
            <Link to="/login" className={styles.navLink}>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
