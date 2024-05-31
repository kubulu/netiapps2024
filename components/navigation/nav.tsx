import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from "./nav.module.scss";
import Link from "next/link";
import { setCookie, getCookie } from 'cookies-next';

const Header = () => {
    const [scrollY, setScrollY] = useState(0);
    const [headerClass, setHeaderClass] = useState('');
    const [dropdown1Open, setDropdown1Open] = useState(false); // State to manage dropdown visibility for Company
    const [dropdown2Open, setDropdown2Open] = useState(false); // State to manage dropdown visibility for Services
    const [dropdown3Open, setDropdown3Open] = useState(false); // State to manage dropdown visibility for Solutions
    const [dropdown4Open, setDropdown4Open] = useState(false); // State to manage dropdown visibility for Technologies

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollY > 100) {
            setHeaderClass(styles.scrolled);
        } else {
            setHeaderClass('');
        }
    }, [scrollY]);

    const initialTheme = ((getCookie('theme') === 'dark') ? true : false);
    const [darkTheme, setDarkTheme] = useState(initialTheme);

    useEffect(() => {
        if (darkTheme) {
            document.documentElement.setAttribute("data-theme", "dark");
            window.localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.removeAttribute("data-theme");
            window.localStorage.setItem("theme", "light");
        }
    }, [darkTheme]);

    const handleToggle = () => {
        const newTheme = !darkTheme;
        setDarkTheme(newTheme);
        setCookie('theme', newTheme ? 'dark' : 'light');
    };

    const toggleDropdown1 = () => {
        setDropdown1Open(prevState => !prevState); // Toggle dropdown visibility for Company
    };

    const toggleDropdown2 = () => {
        setDropdown2Open(prevState => !prevState); // Toggle dropdown visibility for Services
    };

    const toggleDropdown3 = () => {
        setDropdown3Open(prevState => !prevState); // Toggle dropdown visibility for Solutions
    };

    const toggleDropdown4 = () => {
        setDropdown4Open(prevState => !prevState); // Toggle dropdown visibility for Technologies
    };

    return (
        <motion.div className={`${styles.navigation} ${styles.headerClass} `}>
            <div className={`container`}>
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1 menu-color">
                    <div className="col-md-2 mb-2 mb-md-0">
                        <Link href="/" className={styles.logo}>
                            <img src={`/images/logo.svg`} />
                        </Link>
                    </div>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><Link href="#" className="nav-link px-4 cus-link" onClick={toggleDropdown1}>Company</Link></li>
                        <li><Link href="#" className="nav-link px-4 cus-link" onClick={toggleDropdown2}>Services</Link></li>
                        <li><Link href="#" className="nav-link px-4 cus-link" onClick={toggleDropdown3}>Solutions</Link></li>
                        <li><Link href="#" className="nav-link px-4 cus-link" onClick={toggleDropdown4}>Technologies</Link></li>
                    </ul>
                    <div className="col-md-2 text-end">
                        <div className={`d-flex justify-content-between align-items-center`}>
                            <div>
                                <button className={`btn ${darkTheme ? 'dark-mode' : 'light-mode'}`} onClick={handleToggle}>
                                    <img src={darkTheme ? "/images/sun.svg" : "/images/moon.svg"} alt="Toggle Theme" />
                                </button>
                            </div>
                            <div className={styles.button}>
                                <button type="button" className="btn na-btn me-2" >Contact <img src={`/images/button-arrow.svg`} /></button>
                            </div>
                        </div>
                    </div>
                </header>
                <div className={`row`}>
                    <div className={`col-12`}>
                        {dropdown1Open && (
                            <div className={styles.dropdown}>
                                {/* Dropdown content for Company goes here */}
                                <ul>
                                    <li><Link href="#">Option 1 for Company</Link></li>
                                    <li><Link href="#">Option 2 for Company</Link></li>
                                    <li><Link href="#">Option 3 for Company</Link></li>
                                </ul>
                            </div>
                        )}
                        {dropdown2Open && (
                            <div className={styles.dropdown}>
                                {/* Dropdown content for Services goes here */}
                                <ul>
                                    <li><Link href="#">Option 1 for Services</Link></li>
                                    <li><Link href="#">Option 2 for Services</Link></li>
                                    <li><Link href="#">Option 3 for Services</Link></li>
                                </ul>
                            </div>
                        )}
                        {dropdown3Open && (
                            <div className={styles.dropdown}>
                                {/* Dropdown content for Solutions goes here */}
                                <ul>
                                    <li><Link href="#">Option 1 for Solutions</Link></li>
                                    <li><Link href="#">Option 2 for Solutions</Link></li>
                                    <li><Link href="#">Option 3 for Solutions</Link></li>
                                </ul>
                            </div>
                        )}
                        {dropdown4Open && (
                            <div className={styles.dropdown}>
                                {/* Dropdown content for Technologies goes here */}
                                <ul>
                                    <li><Link href="#">Option 1 for Technologies</Link></li>
                                    <li><Link href="#">Option 2 for Technologies</Link></li>
                                    <li><Link href="#">Option 3 for Technologies</Link></li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Header;
