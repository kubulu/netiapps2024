import React from "react";
import styles from "./twoSectionContent.module.scss"


export default function TwoSectionContent() {
    return(
        <div className={styles.twoSectionContent}>
            <div className={`container`}>
                <div className={styles.paddingLeft}>
                    <h2 className={`headingFont text-start`}>We build software solutions to manage your data and systems.</h2>
                    <div className={`row`}>
                        <div className={`col-md-5`}>
                            <p>If your business has grown enough that it needs a better solution for managing its data and systems, then NetiApps has the perfect solution: an enterprise software development service. With support for all major databases and programming languages, our experienced developers will help take your business from good to great!</p>
                        </div>
                        <div className={`col-md-5`}>
                            <p>If your business has grown enough that it needs a better solution for managing its data and systems, then NetiApps has the perfect solution: an enterprise software development service. With support for all major databases and programming languages, our experienced developers will help take your business from good to great!</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}