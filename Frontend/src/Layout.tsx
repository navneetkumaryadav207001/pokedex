import { Outlet } from "react-router-dom";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import styles from "./layout.module.css";

export default function Layout() {
  return (
    <div className={styles.mainWrapper}>
      <Topbar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
