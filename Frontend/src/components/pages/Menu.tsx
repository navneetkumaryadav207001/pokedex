import styles from "./Menu.module.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className={styles.menu}>
      <h2 className={styles.title}>Main Menu</h2>
      <div className={styles.options}>
        <Link to="/pokemons" className={styles.button}>Pokémons</Link>
        <Link to="/camera" className={styles.button}>Camera</Link>
        <Link to="/help" className={styles.button}>Help</Link>
        <Link to="/about" className={styles.button}>About</Link>
      </div>
    </div>
  );
}

export default Menu;
