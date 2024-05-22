import React from "react";
import styles from "./insightPage.module.scss"
import {useScroll} from "framer-motion";
import InsightUserDetails from "../insightUserDetails/insightUserDetails";
import SingleFullImage from "../singleFullImage/singleFullImage";
import InsightContent from "../insightContent/insightContent";
import RelatedInsight from "../relatedInsight/relatedInsight";



export default function InsightPage() {

    const { scrollYProgress } = useScroll()
    return(
        <div>
            <div className={styles.insightPage}>
                <InsightUserDetails/>
                <SingleFullImage/>
                <InsightContent/>
            </div>
            <RelatedInsight/>
        </div>

    )
}