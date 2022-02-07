import styles from '../styles/Navbar.module.css';
import { RiCake3Line } from 'react-icons/ri';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className={`${styles.nav}`}>
            <ul className={`${styles.ul}`}>
                <li className={`${styles.li} nav-logo`}>
                    <h1>
                        <Link href='' passHref>
                            <a>
                                <span>
                                    <RiCake3Line />
                                </span>
                                <span>
                                    Cupcake Place
                                </span>
                            </a>
                        </Link>
                    </h1>
                </li>
                <li className={`${styles.li}`}>
                    <Link href='' passHref>
                        <a>
                            Menu
                        </a>
                    </Link>
                </li>
                <li className={`${styles.li}`}>
                    <Link href='' passHref>
                        <a>
                            About
                        </a>
                    </Link>
                </li>
                <li className={`${styles.li}`}>
                    <Link href='' passHref>
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
