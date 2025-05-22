import { Link } from "react-router-dom";
import styles from "./Topbar.module.css";
import blueGlass from "../assets/blue_glass.svg";
import redGlass from "../assets/red_glass.svg"
import yellowGlass from "../assets/yellow_glass.svg"
import greenGlass from "../assets/green_glass.svg"


function Topbar() {
  return (
    <div className={styles.container}>
    <div className={styles.glasses}>
        <img src={blueGlass} alt="Pokémon style badge" />
        <img src={redGlass} alt="Pokémon style badge" className={styles.miniglasses}/>
        <img src={yellowGlass} alt="Pokémon style badge" className={styles.miniglasses}/>
        <img src={greenGlass} alt="Pokémon style badge" className={styles.miniglasses}/>
    </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/pokemons">Pokemons</Link>
        <Link to="/camera">Camera</Link>
      </nav>
      
    </div>
    
  );
}

export default Topbar;
