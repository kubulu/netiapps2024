import React from "react";
import styles from "./insightContent.module.scss"
import {useScroll} from "framer-motion";



export default function InsightContent() {

    const { scrollYProgress } = useScroll()
    return(
        <div className={styles.insightContent}>
            <div className={`container`}>

                <div className={`row justify-content-center`}>
                    <div className={`col-8`}>
                        <h3>Embracing the Shift</h3>
                        <p>The integration of automation into business workflows is not just a trend—its a significant evolution in how companies operate and compete in the digital age. Automation promises enhanced efficiency, reduced operational costs, and improved accuracy, transforming mundane tasks into automated processes. However, as with any significant change, the transition to highly automated systems comes with both tremendous opportunities and notable challenges.</p>
                        <p>Automated workflows streamline processes that were traditionally manual, freeing up employees to focus on more strategic tasks. Here are several advantages that automation can bring to your business:</p>
                        <h3>Potential Pitfalls</h3>
                        <p>Automated workflows streamline processes that were traditionally manual, freeing up employees to focus on more strategic tasks. Here are several advantages that automation can bring to your business:</p>
                        <ul>
                            <li>Increased productivity: Automation speeds up the execution of repetitive tasks.</li>
                            <li>Reduced errors: Minimizes human errors in tasks like data entry.</li>
                            <li>Enhanced compliance: Automatically enforced protocols ensure all processes comply with set regulations and standards.</li>
                            <li>Improved employee satisfaction: Reducing mundane tasks allows employees to engage in more meaningful work.</li>
                        </ul>

                        <div className={styles.share}>
                            <ul>
                                <li><img src={`/images/facebook.svg`} /> </li>
                                <li><img src={`/images/linkedin.svg`} /> </li>
                                <li><img src={`/images/x.svg`} /> </li>
                                <li>Share </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}