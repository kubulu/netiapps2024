import React from "react";
import styles from "./hero.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { motion } from "framer-motion";
import ClientLogo from "../clientLogo/cleintLogo";


export default function Hero() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        pauseOnHover: false,
        autoplay: true,
    };
    return(
        <div className={styles.hero}>
            <video autoPlay loop muted playsInline className="hero-video">
                <source src="/images/video5.mp4" type="video/mp4" />
            </video>

            <div className={styles.heroContent}>
                <div className="container">
                    <div className="row">

                        <div className={`col-md-7 pl-3`}>
                            <div>
                                <Slider {...settings}>
                                    <div>
                                        <motion.h1  initial={{ opacity: 0, y: -20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 2 }}
                                                    className={`headingFontOne slide-text`}>Next Generation Web Management System</motion.h1>
                                        <motion.div initial={{ opacity: 0, y: -20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 2.2 }}>
                                            <div className={styles.button}>
                                                <a href={`#`} className={`btn btn-outline-light`}>Read More <img src={`/images/button-arrow.svg`} /></a>
                                            </div>


                                        </motion.div>
                                    </div>
                                    <div>
                                        <motion.h1  initial={{ opacity: 0, y: -20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 2 }}
                                                    className={`headingFontOne slide-text`}>Accelerate your Company&apos;s Growth with Premium Development Services</motion.h1>
                                        <motion.div initial={{ opacity: 0, y: -20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 2.2 }}>
                                            <div className={styles.button}>
                                                <a href={`#`} className={`btn btn-outline-light`}>Read More <img src={`/images/button-arrow.svg`} /></a>
                                            </div>


                                        </motion.div>
                                    </div>
                                    <div>
                                        <motion.h1  initial={{ opacity: 0, y: -20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 2 }}
                                                    className={`headingFontOne slide-text`}>On-Demand Custom App Developers Available Upon Request</motion.h1>
                                        <motion.div initial={{ opacity: 0, y: -20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 2.2 }}>
                                            <div className={styles.button}>
                                                <a href={`#`} className={`btn btn-outline-light`}>Read More <img src={`/images/button-arrow.svg`} /></a>
                                            </div>


                                        </motion.div>
                                    </div>

                                </Slider>
                            </div>


                        </div>
                    </div>

                    <div className={styles.casestudy}>
                        <div className={styles.circle}>
                            <img src={`/images/casestudy.svg`} />
                        </div>
                        <motion.div initial={{ x: -20 }}
                                    animate={{ x: 0 }}
                                    transition={{ duration: 2 }} className={styles.casestudyCard}>
                            <div className={styles.imageCase}>
                                <img src={`/images/demo1.png`} />

                            </div>
                            <div className={styles.caseContent}>
                                <div>
                                    <h3>Hydrofarm</h3>
                                    <p>IoT based application for monitoring crop requisites and its growth</p>
                                    <a href={`#`}><img src={`/images/arrow.svg`} /> </a>
                                </div>

                            </div>

                        </motion.div>
                    </div>

                </div>
            </div>
            <ClientLogo/>
        </div>
    )
}