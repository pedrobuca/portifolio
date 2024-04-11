import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Link from 'next/link'
import logo from '../assets/Logo.png'


export default function Navbar() {
  return (
      <div className={styles.Navbar}>
        <div className={styles.div_logo}>
          <Image src={logo} width="20" height="20"/>
        </div>

        <div className={styles.menu}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Sobre mim</Link></li>
            <li><Link href="/">Portfólio</Link></li>
            <li><Link href="/">Skills</Link></li>
            <li><Link href="/">Contato</Link></li>
          </ul>
        </div>
        
      </div>

  );
}
