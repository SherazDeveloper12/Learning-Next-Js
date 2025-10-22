import Styles from './header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className={Styles.container}>
        <h1 className={Styles.WebsiteTitle}>My Website</h1>
        <nav className={Styles.navbar}>
          <ul className={Styles.navList}>
            <li>
              <Link href="/" className={Styles.navItem}>Home</Link>
            </li>
            <li>
              <Link href="/products" className={Styles.navItem}>Products</Link>
            </li>
            <li>
              <Link href="/about" className={Styles.navItem}>About</Link>
            </li>
            <li>
              <Link href="/contact" className={Styles.navItem}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}