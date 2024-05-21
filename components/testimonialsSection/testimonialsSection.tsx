import React from "react";
import styles from "./testimonialsSection.module.scss"


export default function TestimonialsSection() {
    return(
        <div className={styles.testimonials}>
            <div className={'container'}>
                <div className={styles.testimonialBlock}>
                    <div className={`row`}>
                        <div className={`col-md-6`}>
                            <div className={styles.leftContent}>
                                <h2 className={`headingFont`}>Creating Digital Experiences Since 2006</h2>
                            </div>
                        </div>
                        <div className={`col-md-6`}>
                            <div className={styles.rightContent}>
                                <div className={styles.quote}>
                                    <img src={`/images/mark.svg`} />
                                </div>
                                <div className={styles.testimonialContent}>
                                    <p>Altran has been working with NetiApps for a number of years now and we are very pleased with the dedication and responsiveness of the NetiApps team. NetiApps is a much valued vendor/partner, who go out of their way to meet deadlines and provide solutions. The NetiApps culture of ingenuity, positive attitude and commitment to the task at hand is much appreciated. We look forward to a long and fruitful relationship.</p>
                                    <h5>Altran Team (A Part of Capgemini Engineering)</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}