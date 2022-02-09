import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import { RiCake3Line } from 'react-icons/ri';
import { FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import nav_logo from '../public/muffin.png';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className={`${styles.nav}`}>
            <div className={`${styles.image_wrapper}`}>
                <Image src={nav_logo} height={'60%'} width={'60%'} alt='baking glove - navigation logo' />
            </div>
            <div
                onClick={handleClick}
                className={`${styles.mobile_nav_toggle}`}
                aria-controls='primary-navigation'
                aria-expanded='false'
            >
                             {
                    click ? <FaTimes /> : <GiHamburgerMenu />
                }
            </div>
            <ul id='primary-navigation' className={styles.click ? styles.menu : `${styles.menu} ${styles.active}`}>
                <li className={`${styles.item}`}>
                    <Link href='/' passHref>
                        <a>
                            Menu
                        </a>
                    </Link>
                </li>
                <li className={`${styles.item}`}>
                    <Link href='/' passHref>
                        <a>
                            About
                        </a>
                    </Link>
                </li>
                <li className={`${styles.item}`}>
                    <Link href='/' passHref>
                        <a>
                            Locations
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
