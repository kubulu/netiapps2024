import React from "react";
import styles from "./clientLogo.module.scss"
import {motion} from "framer-motion";


export default function ClientLogo(client: any) {
    console.log('CLIENT=',client);
    return(
        <div className={styles.clientLogo}>
            <div className={`container`}>
                <motion.h4 initial={{ opacity: 0, y: -20 }}
                           whileInView={{ opacity: 1 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 2 }}
                >Teamed up with awesome brands through the years.</motion.h4>
                <div className={`row justify-content-center align-items-center`}>
                    {client.client.client_list.map((element: any, index: any)=>(
                    
                        
                        <div className={`col`}><img src={element.client_logo}/> </div>
                       
                    
                     ))}
                </div>
            </div>
        </div>
    )
}