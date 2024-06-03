import next from "next";
import styles from "./imageRight.module.scss";
import React, { useState, useEffect } from 'react';

export default function ImageRightComponent({image, content}:any) {

    return (
            <div className="container">
                <div className={styles.rightImage}>
                    <div className={`row`}>
                        <div className="col-md-3"></div>
                        <div className="col-md-3"></div>
                        <div className={`col-md-3`}>
                            <div className={styles.content}>
                                <div dangerouslySetInnerHTML={{ __html: content}}></div>
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={styles.image}>
                                <img src={image} alt={image.alt} />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

         );
}