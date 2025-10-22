import styles from './footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2 className={styles.brandName}>My Website</h2>
          <p className={styles.tagline}>Building the future, one step at a time.</p>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link href="/" className={styles.navItem}>Home</Link>
            </li>
            <li>
              <Link href="/products" className={styles.navItem}>Products</Link>
            </li>
            <li>
              <Link href="/about" className={styles.navItem}>About</Link>
            </li>
            <li>
              <Link href="/contact" className={styles.navItem}>Contact</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.copyright}>
          <p>© {new Date().getFullYear()} My Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}