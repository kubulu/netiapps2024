import React from "react";
import Slider from "react-slick";
import styles from "./testimonialsSection.module.scss"


export default function TestimonialsSection(testimonials: any) {
    console.log('Testiii=',testimonials);
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay:true,
        slidesToScroll: 1,
        waitForAnimate: false,
        arrows: false,
        pauseOnHover: false
    };
    return(
        <div className={styles.testimonials}>
            <div className={'container'}>
                <div className={`${styles.testimonialBlock} testimonialBlock fadeZoom blue-bg`}>
                    <div className={`row`}>
                        <div className={`col-md-6 blurFadeUp`}>
                            <div className={styles.leftContent}>
                                <h2 className={`headingFont`}>Creating Digital Experiences Since 2006</h2>
                            </div>
                        </div>
                        <div className={`col-md-6 blurFadeUp`}>
                            <div className={styles.rightContent}>
                                <div className={styles.quote}>
                                    <img src={`/images/mark.svg`} />
                                </div>
                                <Slider {...settings}>
                                    {testimonials.testimonials.testimonial_list.map((element: any, index: any)=>(
                                        <div className={styles.testimonialContent}>
                                            <p>{element.content}</p>
                                            <h5>{element.author},</h5>
                                            <h5>{element.designation},</h5>
                                            <h5>{element.company}</h5>
                                        </div>
                                    ))}
                                    {/* <div className={styles.testimonialContent}>
                                        <p>It was great working with NetiApps. Anyone can provide technology solutions but really understanding the business needs of a customer requires dedicated efforts as shown by NetiApps. Their solutions contributed to some outstanding support to automate DTDC’s critical processes.</p>
                                        <h5>Altran Team (A Part of Capgemini Engineering)</h5>
                                    </div>

                                    <div className={styles.testimonialContent}>
                                        <p>Working with NetiApps was a pleasure. They were enthusiastic, quick with suggestions and very reactive with modifications. As a client I felt very comfortable that the work would get done within the determined planning. I highly recommend them and look forward to working with them again.</p>
                                        <h5>Altran Team (A Part of Capgemini Engineering)</h5>
                                    </div>

                                    <div className={styles.testimonialContent}>
                                        <p>Altran has been working with NetiApps for a number of years now and we are very pleased with the dedication and responsiveness of the NetiApps team. NetiApps is a much valued vendor/partner, who go out of their way to meet deadlines and provide solutions. The NetiApps culture of ingenuity, positive attitude and commitment to the task at hand is much appreciated. We look forward to a long and fruitful relationship.</p>
                                        <h5>Altran Team (A Part of Capgemini Engineering)</h5>
                                    </div> */}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}