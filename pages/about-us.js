import Head from "next/head";
import React, { useState } from "react";

const AboutUs = () => {
    return (
        <>
           <Head>
            <title>About Us</title>
           </Head>
            <section className="hero-bg-one">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="hero-ui-one">
                            <div className="absolut-img-one">
                                <img src="/img/icons/cloud-hero-big.png" alt="cloud-hero-big" />
                            </div>
                            <h1>Empowering Businesses Through Innovative CRM Solutions</h1>
                            <p>Welcome to CRMForcePlus, your trusted partner for Salesforce CRM solutions. Discover how we empower businesses to thrive in the digital age</p>
                            <div className="absolut-img-two">
                            <img src="/img/icons/cloud-hero-small.png" alt="cloud-hero-small" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <section>
                
            </section>
        </>
    );
}

export default AboutUs;
