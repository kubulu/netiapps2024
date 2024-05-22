import React from "react";
import styles from "./innerHero.module.scss"


export default function InnerHero() {
    return(
        <div className={styles.innerHero}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-1`}>

                    </div>
                    <div className={`col-8 pl-5`}>
                        <h2 className={``}>Software Development</h2>
                        <p>NetiApps is a leading provider of software development services. We build enterprise-level Java, Python and IOT applications for clients Worldwide. It is the process of creating a piece of software that is designed to accomplish a specific task. It encompasses all phases of the software development life cycle.</p>
                    </div>
                    <div className={`col-3`}>
                        <div className={styles.round}>
                            <img src={`/images/software.svg`} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}