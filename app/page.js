import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link'
import logo from './assets/Logo.png'
import Avatar from './assets/AvatarAndIcons.png'
import github from './assets/github.png'
import linkedin from './assets/linkedin.png'
import  icon from 'bootstrap-icons/icons/Download.svg'
import whatsapp from './assets/WhatsappLogo.png'
import baixar from './assets/b.png'
import Navbar from "./Components/Navbar";


export default function Home() {
  return (
    <main className={styles.main}>
       <Navbar/>

      <div className={styles.first}>
           <div className={styles.firstChild}>
             
             <div className={styles.div_saudacao}>
                <span className={styles.saudacao}>👋 Saudação</span>
            
             </div>

             <div className={styles.div_myName}>
               <h1>Pedro</h1>
               <h1>Buca</h1>
             </div>

             <div className={styles.social}>
                <Link href="/"> <Image src={linkedin}/></Link>
                <Link href="/"><Image src={github}/></Link>
             </div>
           </div>
           <div>
             <Image src={Avatar} width="530" height="530"/>
           </div>
           <div className={styles.cv}>
            <div>
             <Link href="/">Baixar CV <Image src={baixar} width="25" height="25" className={styles.baixar} /> </Link>
            </div>
            
             <div >
             <button className={styles.conversar}><Image src={whatsapp} width="25" height="25"  />  Vamos conversar </button>
             </div>
           </div>
        </div>
    </main>
  );
}
