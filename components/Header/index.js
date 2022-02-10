import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/Header.module.css";

export default function Header() {
  const [menu, setShowMenu] = useState(false);

  function handleMenu() {
    setShowMenu(!menu);
  }
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h2>MOBILE</h2>
      </div>
      {menu && (
        <nav className={styles.navbar}>
          <ul className={styles.nav}>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/mobiles">
              <a>Mobiles</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
          </ul>
        </nav>
      )}
      <div className={styles.menu} onClick={handleMenu}>
        <img src="/Menu.svg" alt="menu" />
      </div>
    </header>
  );
}
