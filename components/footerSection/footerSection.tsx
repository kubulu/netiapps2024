import React from "react";
import styles from "./footerSection.module.scss"


export default function FooterSection() {
    return(
        <div>
            <div className={styles.footerSection}>
                <div className={`container`}>
                    <div className={`row`}>
                        <div className={`col-md-4`}>
                            <div className={styles.leftMenu}>
                                <h5>Social Presence</h5>
                                <ul className={`d-inline`}>
                                    <li><a href="#"><img src="/images/facebook.svg" alt=""/></a></li>
                                    <li><a href="#"><img src="/images/instagram.svg" alt=""/></a></li>
                                    <li><a href="#"><img src="/images/x.svg" alt=""/></a></li>
                                    <li><a href="#"><img src="/images/linkedin.svg" alt=""/></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className={`col-md-5`}>
                            <div className={styles.middleMenu}>
                            <h5>We are operating from</h5>
                            <ul>
                                <li>India</li>
                                <li>Singapore</li>
                                <li>USA</li>
                            </ul>
                            </div>
                        </div>
                        <div className={`col-md-3 text-end`}>
                            <div className={styles.rightMenu}>
                            <img src={`/images/footerlogo.svg`} />
                            <p>No. 406, 9th Main Road HRBR Layout 1st Block Kalyan Nagar Bengaluru, Karnataka 560 043.</p>
                            <p>Email | info@netiapps.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <div className={`container`}>
                    <div className={`row`}>
                        <div className={`col-md-6`}>
                            <h5>Netiapps Software Pvt. Ltd. </h5>
                            <p>2024 All Rights Reserved.</p>
                        </div>
                        <div className={`col-md-6 text-end`}>
                            <ul>
                                <li><img src={`/images/nasscom.png`} /></li>
                                <li><img src={`/images/cmmi.png`} /></li>
                                <li><img src={`/images/9001.png`} /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}