import React from "react";
import Slider from "react-slick";
import styles from "./casestudySection.module.scss";


export default function CasestudySection() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "340px",
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        autoplaySpeed: 4000,
        autoplay: true,
        pauseOnHover: true,
    };
    return (
        <div className={`casestudySection`}>
            <div className={styles.casestudy}>
                <h2 className={`headingFont text-center`}>Take a look at our projects</h2>
                <Slider {...settings}>
                    <div className={styles.casestudyBlock}>

                        <div className={styles.casestudyCard}>
                            <div className={styles.casestudyContent}>
                                <h4>Document Lifecycle and Workflow Management</h4>
                                <ul>
                                    <li>Web Developement</li>
                                    <li>Web Developement</li>
                                    <li>Web Developement</li>
                                    <li>Web Developement</li>
                                </ul>
                            </div>
                            <div className={styles.casestudyImg}>
                                <img src={`/images/casestudy.png`}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.casestudyBlock}>

                        <div className={styles.casestudyCard}>
                            <div className={styles.casestudyContent}>
                                <h4>Document Lifecycle and Workflow Management</h4>
                                <ul>
                                    <li>Web Developement</li>
                                    <li>Web Developement</li>
                                    <li>Web Developement</li>
                                    <li>Web Developement</li>
                                </ul>
                            </div>
                            <div className={styles.casestudyImg}>
                                <img src={`/images/casestudy.png`}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.casestudyBlock}>

                        <div className={styles.casestudyCard}>
                            <div className={styles.casestudyContent}>
                                <h4>Document Lifecycle and Workflow Management</h4>
                                <ul>
                                    <li>Web Developement</li>
                                    <li>Web Developement</li>
                                    <li>Web Developement</li>
                                    <li>Web Developement</li>
                                </ul>
                            </div>
                            <div className={styles.casestudyImg}>
                                <img src={`/images/casestudy.png`}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.casestudyBlock}>

                        <div className={styles.casestudyCard}>
                            <div className={styles.casestudyContent}>
                                <h4>Document Lifecycle and Workflow Management</h4>
                                <ul>
                                    <li>Web Developement</li>
                                    <li>Web Developement</li>
                                    <li>Web Developement</li>
                                    <li>Web Developement</li>
                                </ul>
                            </div>
                            <div className={styles.casestudyImg}>
                                <img src={`/images/casestudy.png`}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.casestudyBlock}>

                        <div className={styles.casestudyCard}>
                            <div className={styles.casestudyContent}>
                                <h4>Document Lifecycle and Workflow Management</h4>
                                <ul>
                                    <li>Web Developement</li>
                                    <li>Web Developement</li>
                                    <li>Web Developement</li>
                                    <li>Web Developement</li>
                                </ul>
                            </div>
                            <div className={styles.casestudyImg}>
                                <img src={`/images/casestudy.png`}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.casestudyBlock}>

                        <div className={styles.casestudyCard}>
                            <div className={styles.casestudyContent}>
                                <h4>Document Lifecycle and Workflow Management</h4>
                                <ul>
                                    <li>Web Developement</li>
                                    <li>Web Developement</li>
                                    <li>Web Developement</li>
                                    <li>Web Developement</li>
                                </ul>
                            </div>
                            <div className={styles.casestudyImg}>
                                <img src={`/images/casestudy.png`}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.casestudyBlock}>

                        <div className={styles.casestudyCard}>
                            <div className={styles.casestudyContent}>
                                <h4>Document Lifecycle and Workflow Management</h4>
                                <ul>
                                    <li>Web Developement</li>
                                    <li>Web Developement</li>
                                    <li>Web Developement</li>
                                    <li>Web Developement</li>
                                </ul>
                            </div>
                            <div className={styles.casestudyImg}>
                                <img src={`/images/casestudy.png`}/>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}