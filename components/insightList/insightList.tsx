import React, { useState, useEffect } from 'react';
import styles from "./insightList.module.scss"
import { motion, useAnimation } from 'framer-motion';

export default function InsightList() {
    return(
        <motion.div className={styles.insightList}>
            <div className={`container`}>
                <div className={`row justify-content-center align-items-center`}>
                    <div className={`col-10`}>

                        <div className={styles.industryBlock}>
                            <ul>
                                <li><img src={`/images/add.svg`} /> Banking</li>
                                <li><img src={`/images/add.svg`} /> Banking</li>
                                <li><img src={`/images/add.svg`} /> Banking</li>
                                <li><img src={`/images/add.svg`} /> Banking</li>
                                <li><img src={`/images/add.svg`} /> Banking</li>
                                <li><img src={`/images/add.svg`} /> Banking</li>
                            </ul>
                        </div>
                        <div className={styles.insightBlock}>
                            <div className={`row g-col-6`}>
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