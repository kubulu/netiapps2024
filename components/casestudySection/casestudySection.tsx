import React from "react";
import Slider from "react-slick";
import styles from "./casestudySection.module.scss";


export default function CasestudySection(casestudy: any) {
    console.log('Casee:',casestudy);
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "340px",
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        autoplaySpeed: 4000,
        autoplay: true,
        pauseOnHover: true,
    };
    return (
        <div className={`casestudySection`}>
            <div className={styles.casestudy}>
                <h2 className={`headingFont text-center`}>{casestudy.casestudy.title}</h2>
                <Slider {...settings}>
                {casestudy.casestudy.case_study_list.map((element: any, index: any)=>(
                    <div className={styles.casestudyBlock} key={index}>
                        <div className={styles.casestudyCard}>
                            <div className={styles.casestudyContent}>
                                <h4> {element.title} </h4>
                                <ul>
                                    
                                    <li>Web Developement</li>
                                </ul>
                            </div>
                            <div className={styles.casestudyImg}>
                                <img src={element.image}/>
                            </div>
                        </div>
                       
                    </div>
                     ))}
                </Slider>
            </div>
        </div>
    )
}