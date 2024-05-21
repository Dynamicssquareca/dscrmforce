import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
const AboutUs = () => {
    return (
        <>
            <Head>
                <title>About Us</title>
            </Head>
            <section className="hero-bg-one">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="hero-ui-one">
                                <div className="absolut-img-one">
                                    <img src="/img/icons/cloud-hero-big.png" alt="cloud-hero-big" />
                                </div>
                                <h1>About Us</h1>
                                <p>Welcome to CRMForcePlus, your trusted partner for Salesforce CRM solutions.<br/> Discover how we empower businesses to thrive in the digital age</p>
                                <div className="absolut-img-two">
                                    <img src="/img/icons/cloud-hero-small.png" alt="cloud-hero-small" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-top-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading-style-two">
                                <span>About Company</span>
                                <h2>Discover how we empower businesses to thrive in the digital age.</h2>
                                <p>At CRMFORCEPLUS, we are dedicated to revolutionizing businesses through innovative Salesforce Solutions implementations. As a newly established venture, we bring a fresh perspective to the realm of customer relationship management, leveraging cutting-edge technology to drive growth and success for our clients.<br /><br />CRMFORCEPLUS is a dynamic venture under the esteemed MPG Group, a globally diversified business headquartered in India. With a workforce of over 600 professionals spanning across 9 verticals, MPG Group has always been driven by a mission to make a positive difference in society.</p>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-5 align-self-center">
                            <div className="text-center">
                                <img src="/img/icons/crmfoecrplus-icon.png" alt="crmfoecrplus-icon" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className='box-icon-box'>
                                <img src="/img/icons/mission-icon.png" alt="mission-icon" width={64} height={64} />
                                <h3>Proven Expertise</h3>
                                <p>With a proven track record, our certified Salesforce experts are utilizing their expertise to optimize and maximize CRM ROI.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className='box-icon-box'>
                                <img src="/img/icons/vision-icon.png" alt="vision-icon" width={64} height={64} />
                                <h3>Proven Expertise</h3>
                                <p>With a proven track record, our certified Salesforce experts are utilizing their expertise to optimize and maximize CRM ROI.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 first-column">
                            <div className="heading-style-two pd-r-30">
                                <span>Our Values</span>
                                <h2>CSR (Corporate Social Responsibility)</h2>
                                <p>As a subsidiary of the MPG Group, we are deeply committed to corporate social responsibility. Our CSR initiatives extend beyond the realm of business to support local communities, promote education, and contribute to environmental sustainability. We believe that by investing in social responsibility, we can create a brighter future for all.</p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="service-box-two">
                                        <div className="service-box-two-inner">
                                            <div><Image src="/img/icons/cardiology.png" width={64} height={64} alt="cardiology" /></div>
                                            <div className="box-content">
                                                <span>Health</span>
                                                <p>Hariom Agrasen is a philanthropist arm of MPG Group that provides lifesaving services to the people in need.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="service-box-two">
                                        <div className="service-box-two-inner">
                                            <div><Image src="/img/icons/school-icon.png" width={64} height={64} alt="school-icon" /></div>
                                            <div className="box-content">
                                                <span>Education</span>
                                                <p>We are a strong advocate of providing free education for children who cannot afford it.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="service-box-two">
                                        <div className="service-box-two-inner">
                                            <div><Image src="/img/icons/ramen_dining-icon.png" width={64} height={64} alt="ramen_dining-icon" /></div>
                                            <div className="box-content">
                                                <span>Food</span>
                                                <p>MPG Group distributed subsidized lunch to ensure that the less privileged will not go hungry</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-top-60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="heading-style-one">
                                <span>Sustainability</span>
                                <h2>Small changes, big impact. <br />Embrace sustainability with us</h2>
                                <p>As stewards of the environment, sustainability is at the core of everything we do at CRMFORCEPLUS. We are dedicated to minimizing our ecological footprint by adopting eco-friendly practices, reducing waste, and promoting energy efficiency. By prioritizing sustainability in our operations, we aim to contribute to a healthier planet for future generations.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="img-about-bg">
                    <div class="pic-bottom">
                        <img src="/img/banner/bottom-bg.png" alt="bottom-bg" /></div>
                </div>
            </section>

            <section className="m-top-m-180">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="heading-style-two">
                                <h2>A powerhouse of innovation, <br />dedication, and expertise.</h2>
                                <p>Our team  is comprised of seasoned professionals with extensive experience in Salesforce Solutions implementation. From certified developers to seasoned consultants, each member brings a unique set of skills and expertise to the table. Together, we are committed to delivering unparalleled service and exceeding the expectations of our clients.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row pd-l-r-80">
                                <div className="col-lg-5">
                                    <div className="user-box-card m-t-20">
                                        <div className="center-image">
                                            <img src="/img/icons/certtifed-icons.png" alt="certtifed-icons" width={144} height={144} />
                                        </div>
                                        <div className="user-box-card-info">
                                            <img src="/img/icons/avtar-1.png" alt="avtar-1" width={64} height={64} />
                                            <div className="user-card-in">
                                                <p>Our Team</p>
                                                <span>Designation</span>
                                            </div>
                                        </div>
                                        <div className="user-box-card-info">
                                            <img src="/img/icons/avtar-2.png" alt="avtar-2" width={64} height={64} />
                                            <div className="user-card-in">
                                                <p>Our Team</p>
                                                <span>Designation</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-5">
                                    <div className="user-box-card">
                                        <div className="user-box-card-info">
                                            <img src="/img/icons/avtar-3.png" alt="avtar-3" width={64} height={64} />
                                            <div className="user-card-in">
                                                <p>Our Team</p>
                                                <span>Designation</span>
                                            </div>
                                        </div>
                                        <div className="user-box-card-info">
                                            <img src="/img/icons/avtar-4.png" alt="avtar-4" width={64} height={64} />
                                            <div className="user-card-in">
                                                <p>Our Team</p>
                                                <span>Designation</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-top-60" style={{paddingBottom:"0px"}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="heading-style-one">
                                <span>CRMFORCEPLUS</span>
                                <h2>We are more than just a technology company – we are partners in your success journey.</h2>
                                <p>With our unwavering dedication to excellence, innovation, and social responsibility, we are poised to redefine the future of CRM solutions and empower businesses to thrive in the digital age.</p>
                                <div className="call-to-act">
                                <a href="/contact-us/" class="btn btn-prime">Get in Touch</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              <div className="bg-center-two">
                <img src="/img/banner/hero-shape.png" alt="hero-shape" />
              </div>
            </section>


        </>
    );
}

export default AboutUs;
