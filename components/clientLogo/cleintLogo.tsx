import React from "react";
import styles from "./clientLogo.module.scss"
import {motion} from "framer-motion";


export default function ClientLogo() {
    return(
        <div className={styles.clientLogo}>
            <div className={`container`}>
                <motion.h4 initial={{ opacity: 0, y: -20 }}
                           whileInView={{ opacity: 1 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 2 }}
                >Teamed up with awesome brands through the years.</motion.h4>
                <div className={`row justify-content-center align-items-center`}>
                    <div className={`col`}></div>
                    <div className={`col`}><img src={`/images/client1.png`}/> </div>
                    <div className={`col`}><img src={`/images/client2.png`}/> </div>
                    <div className={`col`}><img src={`/images/client3.png`}/> </div>
                    <div className={`col`}><img src={`/images/client4.png`}/> </div>
                    <div className={`col`}><img src={`/images/client5.png`}/> </div>
                    <div className={`col`}></div>
                </div>
            </div>
        </div>
    )
}