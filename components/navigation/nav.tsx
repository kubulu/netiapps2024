import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from "./nav.module.scss";
import Link from "next/link";
import { setCookie, getCookie } from 'cookies-next';

const Header = () => {
    const [scrollY, setScrollY] = useState(0);
    const [headerClass, setHeaderClass] = useState('');
    const [activeDropdown, setActiveDropdown] = useState(null);


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


    const handleMouseEnter = (dropdown: any) => {
        setActiveDropdown(dropdown);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
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
                    {/* <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><Link href="#" className="nav-link px-4 cus-link ">Company</Link></li>
                        <li><Link href="#" className="nav-link px-4 cus-link">Services</Link></li>
                        <li><Link href="#" className="nav-link px-4 cus-link">Solutions</Link></li>
                        <li><Link href="#" className="nav-link px-4 cus-link">Technologies</Link></li>
                    </ul> */}
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li onMouseEnter={() => handleMouseEnter('dropdown1')} onMouseLeave={handleMouseLeave}>
                            <Link href="#" className="nav-link px-4 cus-link">Company</Link>
                        </li>
                        <li onMouseEnter={() => handleMouseEnter('dropdown2')} onMouseLeave={handleMouseLeave}>
                            <Link href="#" className="nav-link px-4 cus-link">Services</Link>
                        </li>
                        <li onMouseEnter={() => handleMouseEnter('dropdown3')} onMouseLeave={handleMouseLeave}>
                            <Link href="#" className="nav-link px-4 cus-link">Solutions</Link>
                        </li>
                        <li onMouseEnter={() => handleMouseEnter('dropdown4')} onMouseLeave={handleMouseLeave}>
                            <Link href="#" className="nav-link px-4 cus-link">Technologies</Link>
                        </li>
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
                        {/* {dropdown1Open && ( */}
                        {activeDropdown === 'dropdown1' && (
                            <div className={styles.dropdown}>
                                <div className={`row`}>
                                    <div className={`col-md-6`}>
                                        <ul>
                                            <li><Link href={`/`}>About</Link></li>
                                            <li><Link href={`/`}>Engagement Models</Link></li>
                                            <li><Link href={`/`}>Development Process</Link></li>
                                            <li><Link href={`/`}>Clients</Link></li>
                                            <li><Link href={`/`}>Careers</Link></li>
                                            <li><Link href={`/`}>Blog</Link></li>
                                            <li><Link href={`/`}>Terms of Use</Link></li>
                                            <li><Link href={`/`}>Privacy Policy</Link></li>
                                        </ul>
                                    </div>

                                    <div className={`col-md-6`}>
                                        <div className={styles.navContent}>
                                            <h3>About Company</h3>
                                            <p>NetiApps is a global web and mobile application development company that delivers beautiful digital experiences with a customer-first strategy</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* {dropdown2Open && ( */}
                        {activeDropdown === 'dropdown2' && (
                            <div className={styles.dropdown}>
                                {/* Dropdown content for Services goes here */}
                                <ul>
                                    <li><Link href="#">Option 1 for Services</Link></li>
                                    <li><Link href="#">Option 2 for Services</Link></li>
                                    <li><Link href="#">Option 3 for Services</Link></li>
                                </ul>
                            </div>
                        )}
                        {/* {dropdown3Open && ( */}
                        {activeDropdown === 'dropdown3' && (
                            <div className={styles.dropdown}>
                                {/* Dropdown content for Solutions goes here */}
                                <ul>
                                    <li><Link href="#">Option 1 for Solutions</Link></li>
                                    <li><Link href="#">Option 2 for Solutions</Link></li>
                                    <li><Link href="#">Option 3 for Solutions</Link></li>
                                </ul>
                            </div>
                        )}
                        {/* {dropdown4Open && ( */}
                        {activeDropdown === 'dropdown4' && (
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
