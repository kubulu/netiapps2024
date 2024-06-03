import next from "next";
import styles from "./pageSubTitleSection.module.scss";
import React, { useState, useEffect } from 'react';

export default function PagetitleComponent({subTitle}:any) {

    return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                   <h2 className={styles.innerSubTitle}>{subTitle}</h2>
                   </div>
                   <div className="col-md-6">

                   </div>
                </div>
            </div>

         );
}