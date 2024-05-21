import React from "react";
import styles from "./overviewSection.module.scss"
import {useScroll} from "framer-motion";
import CasestudySection from "../casestudySection/casestudySection";
import TopTechnology from "../topTechnology/topTechnology";


export default function OverviewSection() {

    const { scrollYProgress } = useScroll()
    return(
        <div className={styles.overviewSection}>
            <div className={styles.blur}></div>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-md-6`}>
                        <div className={styles.leftPanel}>
                        <h2 className={`headingFont`}>Create Visually, Customize to Your Heart&apos;s Content.</h2>
                        <ul>
                            <li>Software Solutions <img src={`/images/arrow-right.svg`} /></li>
                            <li>Website Development <img src={`/images/arrow-right.svg`} /></li>
                            <li>Mobile App Development <img src={`/images/arrow-right.svg`} /></li>
                            <li>UI/UX Design <img src={`/images/arrow-right.svg`} /></li>
                            <li>Software testing & QA <img src={`/images/arrow-right.svg`} /></li>
                        </ul>
                        </div>

                    </div>
                    <div className={`col-md-6`}>
                        <div className={styles.rightPanel}>
                            <h3>Software development refers to the process of designing, coding, testing, and maintaining software products.</h3>
                            <ul>
                                <li>Software Solutions</li>
                                <li>Website Development</li>
                                <li>Mobile App Development</li>
                                <li>UI/UX Design</li>
                                <li>Software testing & QA</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <CasestudySection/>
            <TopTechnology/>
        </div>
    )
}