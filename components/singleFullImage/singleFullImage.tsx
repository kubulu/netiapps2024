import React from "react";
import styles from "./singleFullImage.module.scss"


export default function SingleFullImage() {
    return(
        <div className={styles.singleFullImage}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-12`}>
                        <div className={styles.image}>
                            <img src={`/images/singleImage.png`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}