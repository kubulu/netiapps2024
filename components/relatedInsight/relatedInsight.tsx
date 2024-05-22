import React, { useState, useEffect } from 'react';
import styles from "./relatedInsight.module.scss"
import { motion, useAnimation } from 'framer-motion';



export default function RelatedInsight() {
    return(
        <motion.div className={styles.insightSection}>
            <div className={`container`}>
                <div className={`row justify-content-center align-items-center`}>
                    <div className={`col-10`}>
                        <div className={styles.insightTitle}>
                            <h2 className={`headingFont`}>Related Insight</h2>
                        </div>

                        <div className={styles.insightBlock}>
                            <div className={`row`}>
                                <div className={`col-6`}>
                                    <div className={styles.insightCard}>
                                        <div className={styles.insightImg}>
                                            <img src={`/images/insight.png`} />
                                        </div>
                                        <div className={styles.insightContent}>
                                            <h5>Unlocking Success: The Art of Talent Acquisition</h5>
                                            <p>23 February 2024</p>
                                        </div>
                                    </div>

                                </div>
                                <div className={`col-6`}>
                                    <div className={styles.insightCard}>
                                        <div className={styles.insightImg}>
                                            <img src={`/images/insight.png`} />
                                        </div>
                                        <div className={styles.insightContent}>
                                            <h5>Unlocking Success: The Art of Talent Acquisition</h5>
                                            <p>23 February 2024</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    )
}