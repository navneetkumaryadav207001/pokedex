import { Link } from "react-router-dom";
import styles from "./Help.module.css"; // Reuse the same style

function About() {
  return (
    <div className={styles.screen}>
      <h2 className={styles.title}>ℹ️ About</h2>
      <p className={styles.text}>
        This Pokédex is a fan-made React application inspired by the Pokémon series. <br />
        Designed with love, pixel nostalgia, and CSS magic to give you a retro Game Boy-style experience. <br />
        Not affiliated with Nintendo, Game Freak, or The Pokémon Company.
      </p>
      <div>
        <Link to="/" className={styles.button}>GO Back</Link>
      </div>
      
    </div>
  );
}

export default About;
