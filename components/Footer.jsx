import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import { MdOutlineFacebook } from 'react-icons/md';
import { TiSocialInstagram } from 'react-icons/ti';
import { BsMailbox2 } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer className={`${styles.footer}`}>
            <ul className={`${styles.social_media}`}>
                <li>
                    <Link href='/'>
                        <a className={`${styles.social_media_item}`}>
                            <MdOutlineFacebook />
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <a className={`${styles.social_media_item}`}>
                            <TiSocialInstagram />
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <a className={`${styles.social_media_item}`}>
                            <BsMailbox2 />
                        </a>
                    </Link>
                </li>
            </ul>
            <p><small>&copy; 2021 Anderson Cardoso. All rights reserved.</small></p>
        </footer>
    );
}

export default Footer;