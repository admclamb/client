import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.navbrand}>
          <a href="#">
            <span>JWT</span> Tutorial
          </a>
        </h1>
        <ul className={styles.navItems}>
          <li>
            <a href="#" className={styles.navLink}>
              Signup
            </a>
          </li>
          <li>
            <a href="#" className={styles.navLink}>
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
