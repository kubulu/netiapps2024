import React from "react";
import styles from "./insightUserDetails.module.scss"
import {useScroll} from "framer-motion";



export default function InsightUserDetails() {

    const { scrollYProgress } = useScroll()
    return(
        <div className={styles.insightUserDetails}>
            <div className={`container`}>
                <h5>Insight   May 1, 2024</h5>
                <h2>Ontask transformation case study</h2>
                <p>Review a detailed case study on how implementing Ontask has revolutionized business processes</p>
                <div className={styles.userBadge}>
                    <img src={`/images/user.png`} />
                    <p>written by Ross Davies</p>
                </div>
            </div>

        </div>
    )
}