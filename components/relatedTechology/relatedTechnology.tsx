import React from "react";
import styles from "./relatedTechnology.module.scss"
import Link from "next/link";


export default function RelatedTechnology() {
    return(
        <div className={styles.relatedTechnology}>
            <div className={`container`}>
                <div className={`row justify-content-center align-items-center`}>
                    <div className={`col-10`}>
                        <div className={styles.listSection}>
                            <h2 className={`headingFont text-start`}>The Power of Technology in the Palm of Your Hand</h2>
                            <div className={styles.listBorder}>
                                <div className={`row`}>
                                    <div className={`col-md-3`}>
                                        <h4>Java Development Services</h4>
                                    </div>
                                    <div className={`col-md-6`}>
                                        <p>We’ve been in the Java development game for years and have helped hundreds of clients build robust solutions.</p>
                                    </div>
                                    <div className={`col text-end`}>
                                        <Link href={`/`}><img src={`/images/arrowRound.svg`} /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.listBorder}>
                                <div className={`row`}>
                                    <div className={`col-md-3`}>
                                        <h4>Java Development Services</h4>
                                    </div>
                                    <div className={`col-md-6`}>
                                        <p>We’ve been in the Java development game for years and have helped hundreds of clients build robust solutions.</p>
                                    </div>
                                    <div className={`col text-end`}>
                                        <Link href={`/`}><img src={`/images/arrowRound.svg`} /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.listBorder}>
                                <div className={`row`}>
                                    <div className={`col-md-3`}>
                                        <h4>Java Development Services</h4>
                                    </div>
                                    <div className={`col-md-6`}>
                                        <p>We’ve been in the Java development game for years and have helped hundreds of clients build robust solutions.</p>
                                    </div>
                                    <div className={`col text-end`}>
                                        <Link href={`/`}><img src={`/images/arrowRound.svg`} /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.listBorder}>
                                <div className={`row`}>
                                    <div className={`col-md-3`}>
                                        <h4>Java Development Services</h4>
                                    </div>
                                    <div className={`col-md-6`}>
                                        <p>We’ve been in the Java development game for years and have helped hundreds of clients build robust solutions.</p>
                                    </div>
                                    <div className={`col text-end`}>
                                        <Link href={`/`}><img src={`/images/arrowRound.svg`} /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.listBorder}>
                                <div className={`row`}>
                                    <div className={`col-md-3`}>
                                        <h4>Java Development Services</h4>
                                    </div>
                                    <div className={`col-md-6`}>
                                        <p>We’ve been in the Java development game for years and have helped hundreds of clients build robust solutions.</p>
                                    </div>
                                    <div className={`col text-end`}>
                                        <Link href={`/`}><img src={`/images/arrowRound.svg`} /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}