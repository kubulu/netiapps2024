import React from "react";
import styles from "./contactForm.module.scss"


export default function ContactForm() {
    return(
        <div className={styles.contactForm}>
            <div className={`container`}>
                <div className={styles.blueBlock}>
                    <div className={`row`}>
                        <div className={`col-md-8`}>
                            <h2 className={`headingFont text-start`}>Let’s talk about what we can make, build, scale together</h2>
                        </div>
                        <div className={`col-md-4`}>
                            <div className={styles.form}>
                                <div className={`row`}>
                                    <div className={`col-md-6`}>
                                        <div className="mb-3 form-floating">

                                            <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="First Name" />
                                            <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
                                        </div>
                                    </div>
                                    <div className={`col-md-6`}>
                                        <div className="mb-3 form-floating">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
                                            <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="First Name" />
                                        </div>
                                    </div>
                                </div>
                                <div className={`row`}>
                                    <div className={`col-md-12`}>
                                        <div className="mb-3 form-floating">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Email Address</label>
                                            <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Email Address" />
                                        </div>
                                    </div>
                                    <div className={`col-md-12`}>
                                        <div className="mb-3 form-floating">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Mobile Number</label>
                                            <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className={`col-md-12`}>
                                        <div className="mb-3 form-floating">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Comments</label>
                                            <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Comments" />
                                        </div>
                                    </div>
                                    <div className={`col-md-12`}>
                                        <div className="mb-3 ">
                                            <div className={styles.button}>
                                                <button className={`btn btn-outline-light`}>Send Enquiry <img src={`/images/arrow.svg`}  /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={styles.contactBlock}>
                    <div className={`row`}>
                        <div className={`col-md-4`}>
                            <h3>India</h3>
                            <h4>No. 839, Ground and First Floor, 9th Main, 1st Block HRBR Layout, Kalyan Nagar, Bangalore, Karnataka, India - 560 043.</h4>
                        </div>
                        <div className={`col-md-4`}>
                            <h3>USA</h3>
                            <h4>44 Court St #1217 #1020 Brooklyn, NY 11201
                                Phone : (315) 291-8670
                                Fax : (315) 279-3373</h4>
                        </div>
                        <div className={`col-md-4`}>
                            <h3>Singapore</h3>
                            <h4>No 7 Temasek Boulevard#12-07 PMB1157 Suntec Tower One Singapore, 038987</h4>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}