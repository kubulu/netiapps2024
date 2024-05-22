import React from "react";
import styles from "./benifitSection.module.scss"


export default function BenifitSection() {
    return(
        <div className={styles.benifitSection}>
            <div className={`container`}>
                <div className={styles.benifitBlock}>
                    <div className={styles.title}>
                        <h2 className={`headingFont`}>Benefits of Software Development Service</h2>
                    </div>
                    <div className={`row`}>
                        <div className={`col-md-6 gap-4`}>

                            <div className={styles.bCard}>
                                <h4>Customized solutions</h4>
                                <p>NetiApps provides Software development services that include customized solutions that meet the specific needs of a business or organization, which may not be met by off-the-shelf software.</p>
                            </div>
                            <div className={styles.bCard}>
                                <h4>Customized solutions</h4>
                                <p>NetiApps provides Software development services that include customized solutions that meet the specific needs of a business or organization, which may not be met by off-the-shelf software.</p>
                            </div>

                        </div>
                        <div className={`col-md-6 pt-5`}>
                            <div className={styles.bCard}>
                                <h4>Customized solutions</h4>
                                <p>NetiApps provides Software development services that include customized solutions that meet the specific needs of a business or organization, which may not be met by off-the-shelf software.</p>
                            </div>
                            <div className={styles.bCard}>
                                <h4>Customized solutions</h4>
                                <p>NetiApps provides Software development services that include customized solutions that meet the specific needs of a business or organization, which may not be met by off-the-shelf software.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}