import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from "./nav.module.scss";
import Link from "next/link";  
import { setCookie, getCookie } from 'cookies-next';



const Header = () => {
    const [scrollY, setScrollY] = useState(0);
    const [headerClass, setHeaderClass] = useState('');

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
   
    // const [theme, setTheme] = useState('light');
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

    return (
        <motion.div className={`${styles.navigation} ${styles.headerClass} `}>
            <div className={`container`}>
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 menu-color">
                    <div className="col-md-2 mb-2 mb-md-0">
                        <Link href="/" className={styles.logo}>
                            <img src={`/images/logo.svg`} />
                        </Link>
                    </div> 

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><Link href="#" className="nav-link px-4 cus-link ">Company</Link></li>
                        <li><Link href="#" className="nav-link px-4 cus-link">Services</Link></li>
                        <li><Link href="#" className="nav-link px-4 cus-link">Solutions</Link></li>
                        <li><Link href="#" className="nav-link px-4 cus-link">Technologies</Link></li>
                    </ul>

                    <div className="col-md-2 text-end">
                        <div className={`d-flex justify-content-between align-items-center`}>
                            <div>
                             
                            <button  className={`btn ${darkTheme ? 'dark-mode' : 'light-mode'}`}  onClick={handleToggle}> 
                            <img src={darkTheme ? "/images/sun.svg" : "/images/moon.svg"} alt="Toggle Theme" />
                             </button>
                              
                             </div>
                            <div className={styles.button}>
                                <button type="button" className="btn btn-outline-light me-2 theme-btn">Contact <img src={`/images/button-arrow.svg`} /></button>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </motion.div>
    );
};

export default Header;
