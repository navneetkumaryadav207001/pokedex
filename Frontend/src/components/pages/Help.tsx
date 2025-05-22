import styles from "./Help.module.css";
import { Link } from "react-router-dom";

function Help() {
  return (
    <div className={styles.screen}>
      <h2 className={styles.title}>❓ Help</h2>
      <p className={styles.text}>
        Welcome to the Pokédex! <br />
        Use the <strong>Pokémons</strong> menu to browse all available Pokémon. <br />
        Access the <strong>Camera</strong> feature to scan and detect nearby Pokémon (if supported). <br />
        This app is built for fans and does not connect to any official Pokémon database.
      </p>
      <div>
        <Link to="/" className={styles.button}>GO Back</Link>
      </div>
    </div>
  );
}

export default Help;
