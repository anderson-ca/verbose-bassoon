import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import { RiCake3Line } from 'react-icons/ri';
import { FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';

const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className={`${styles.nav}`}>
            <ul className={click ? styles.ul : `${styles.ul} ${styles.active}`}>
                <li className={`${styles.li}`}>
                    <h1>
                        <Link href='/' passHref>
                            <a>
                                <span>
                                    <RiCake3Line />
                                </span>
                                <span className={`${styles.title}`}>
                                    Cupcake Place
                                </span>
                            </a>
                        </Link>
                    </h1>
                </li>
                <li className={`${styles.li}`}>
                    <Link href='/' passHref>
                        <a>
                            Menu
                        </a>
                    </Link>
                </li>
                <li className={`${styles.li}`}>
                    <Link href='/' passHref>
                        <a>
                            About
                        </a>
                    </Link>
                </li>
                <li className={`${styles.li}`}>
                    <Link href='/' passHref>
                        <a>
                            Locations
                        </a>
                    </Link>
                </li>
            </ul>
            <div className={`${styles.mobileIcon}`} onClick={handleClick}>
                {
                    click ? <FaTimes /> : <GiHamburgerMenu />
                }
            </div>
        </div>
    );
};

export default Navbar;
