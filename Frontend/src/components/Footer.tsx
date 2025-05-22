import styles from "./footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <p>&copy; {new Date().getFullYear()} Pokédex. All rights reserved.</p>
      </div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/help">Help</Link>
      </nav>
    </footer>
  );
}

export default Footer;
