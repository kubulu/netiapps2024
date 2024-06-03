import React from "react";
import styles from "./hireSection.module.scss"
import { ApiService } from "../../services/api.service";


export default function HireSection() {
    const baseUrl = new ApiService();

    return(
        <div className={`${styles.hireSection} hireSection`}>
            <div className={`container`}>
                <h2 className={`headingFont text-center`}>Looking to hire for long-term or short-term assignments?</h2>
                <div className={styles.button}>
                    <a href={baseUrl.getSiteUrl() + `hire-developers`}  className={`btn btn-outline-light`}>Hire Now <img src={`/images/button-arrow.svg`} /></a>
                </div>
            </div>
        </div>
    )
}