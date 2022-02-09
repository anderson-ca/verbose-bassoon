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

            <ul id='primary-navigation' className={styles.click ? styles.nav_menu : `${styles.nav_menu} ${styles.active}`}>
                <li className={`${styles.menu_item}`}>
                    <Link href='/' passHref>
                        <a className={`${styles.header_logo}`}>
                            <span>
                                <div className={`${styles.image_wrapper}`}>
                                    <Image src={nav_logo} height={'60%'} width={'60%'} alt='baking glove - navigation logo' />
                                </div>
                            </span>
                            <span>
                                <h1>Cupcakery</h1>
                            </span>
                        </a>
                    </Link>
                </li>
                <li className={`${styles.menu_item}`}>
                    <Link href='/' passHref>
                        <a>
                            Menu
                        </a>
                    </Link>
                </li>
                <li className={`${styles.menu_item}`}>
                    <Link href='/' passHref>
                        <a>
                            About
                        </a>
                    </Link>
                </li>
                <li className={`${styles.menu_item}`}>
                    <Link href='/' passHref>
                        <a>
                            Locations
                        </a>
                    </Link>
                </li>
            </ul>
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
        </div>
    );
};

export default Navbar;
