import Image from 'next/image'
import styles from './../../styles/Home.module.css'
function Footer() {
    return ( 
        <>
         <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by &nbsp;
          <span>
            
            Sandip.Kalsait
          </span>
        </a>
      </footer>
        </>
     );
}

export default Footer;