import React from "react";
import styles from "./topTechnology.module.scss"


export default function TopTechnology() {
    return(
        <div className={styles.topTechnology}>
            <h2 className={`text-center headingFont`}>Top Technology we love to us</h2>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col`}>
                        <div className={styles.card}><img src={`/images/android.png`} /> </div>
                    </div>
                    <div className={`col`}>
                        <div className={styles.card}><img src={`/images/android.png`} /> </div>
                    </div>
                    <div className={`col`}>
                        <div className={styles.card}><img src={`/images/android.png`} /> </div>
                    </div>
                    <div className={`col`}>
                        <div className={styles.card}><img src={`/images/android.png`} /> </div>
                    </div>
                    <div className={`col`}>
                        <div className={styles.card}><img src={`/images/android.png`} /> </div>
                    </div>
                    <div className={`col`}>
                        <div className={styles.card}><img src={`/images/android.png`} /> </div>
                    </div>
                    <div className={`col`}>
                        <div className={styles.card}><img src={`/images/android.png`} /> </div>
                    </div>
                    <div className={`col`}>
                        <div className={styles.card}><img src={`/images/android.png`} /> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}