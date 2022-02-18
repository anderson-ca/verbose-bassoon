import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import { RiCake3Line } from 'react-icons/ri';
import { FaRegTimesCircle } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import nav_logo from '../public/baking1.png';
import about_png from '../public/about.png';
import menu_png from '../public/menu.png';
import locations_png from '../public/locations.png';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className={styles.nav__bg}>
            <div className={`${styles.nav}`}>
                <ul id='primary-navigation' className={click ? styles.nav_menu : `${styles.nav_menu} ${styles.active}`}>
                    <li className={`${styles.menu_item}`}>
                        <Link href='/' passHref>
                            <a className={`${styles.header_logo}`}>
                                <span>
                                    <div className={`${styles.image_wrapper}`}>
                                        <Image src={nav_logo} height={'70%'} width={'70%'} alt='cupcake - navigation logo' />
                                    </div>
                                </span>
                                {/* <span>
                                    <h1>Cupcakery</h1>
                                </span> */}
                            </a>
                        </Link>
                    </li>
                    <li className={`${styles.menu_item}`}>
                        <Link href='/' passHref>
                            <a className={`${styles.a}`}>
                                Menu
                            </a>
                        </Link>
                    </li>
                    <li className={`${styles.menu_item}`}>
                        <Link href='/' passHref>
                            <a className={`${styles.a}`}>
                                About
                            </a>
                        </Link>
                    </li>
                    <li className={`${styles.menu_item}`}>
                        <Link href='/' passHref>
                            <a className={`${styles.a}`}>
                                Locations
                            </a>
                        </Link>
                    </li>
                </ul>
                <div
                    onClick={handleClick}
                    className={click ? styles.mobile_nav_toggle : `${styles.mobile_nav_toggle} ${styles.active}`}
                    aria-controls='primary-navigation'
                    aria-expanded='false'
                >
                    {
                        click ? <RiCake3Line /> : <FaRegTimesCircle />
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
