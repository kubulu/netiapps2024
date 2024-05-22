import React from "react";
import styles from "./leftContent.module.scss"


export default function LeftContent() {
    return(
        <div className={styles.leftContent}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-md-6`}>
                        <h3>Why Software Development Service is important?</h3>
                    </div>
                    <div className={`col-md-6`}>
                        <p>Software development service is the process of designing, creating, and maintaining software applications, platforms, or systems. NetiApps has a team of developers, designers, project managers, and quality assurance specialists who work together to build software that meets the specific needs of businesses, organizations, or individuals.</p>
                        <p>Software development services can encompass a wide range of activities, including gathering requirements, designing software architecture, coding, testing, and deployment. The end goal is to create high-quality software that meets the needs of the client and end-users.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}