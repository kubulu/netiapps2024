import next from "next";
import styles from "./imageLeft.module.scss";
import React, { useState, useEffect } from 'react';

export default function ImageLeftComponent({image, content}:any) {
    console.log('SUBBBB=',image)


    return (
            <div className="container">
                <div className={styles.leftImage}>
                    <div className={`row`}>
                    <div className="col-md-3"></div>
                        <div className="col-md-3"></div>
                        <div className={`col-md-3`}>
                            <div className={styles.image}>
                                   <img src={image} alt={image.alt} />
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={styles.content}>
                                <div dangerouslySetInnerHTML={{ __html: content}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

         );
}