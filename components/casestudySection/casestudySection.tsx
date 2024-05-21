import React from "react";
import styles from "./casestudySection.module.scss"


export default function CasestudySection() {
    return(
        <div className={styles.casestudy}>
            <h2 className={`headingFont text-center`}>Take a look at our projects</h2>
            <div className={styles.casestudyBlock}>
                <div className={`row justify-content-center align-items-center`}>
                    <div className={`col-6`}>
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
                                <img src={`/images/casestudy.png`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}