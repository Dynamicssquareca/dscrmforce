import React, { useRef, useState } from 'react';
import ModelBox from '@/components/ModelBox';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Solution = () => {

    const [showAll, setShowAll] = useState(false);

    const handleShowAll = () => {
        setShowAll(true);
    };

    const slideStyle = {
        transition: 'transform 0.5s ease',
        transform: showAll ? 'translateX(0)' : 'translateX(-100%)',
    };


    return (
        <>
            <div className='hero-banner-two'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="hero-content">
                                <h1>Elevate Your Sales Strategy with Salesforce <span>Sales Cloud</span></h1>
                                <p>Sales Cloud is the ultimate sales tool for modern businesses. From lead management to forecasting, it equips your team with everything they need to drive success.</p>
                                <ModelBox headerText="Get a Free Demo" buttonText="Request a Free Demo" />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="elementor-background-overlay">
                          
                            <Image src="/img/banner/solutions-banner-1.png" className='bg-mid' alt="solutions-banner-1" width={993} height={296}  priority  />
                            <Image src="/img/icons/cloud-hero-bg.png" alt='cloud-hero-bg' className='bg-top' width={434} height={313}  priority  />
                            <Image src="/img/banner/solution-banner-bg-1.png" className='bg-back' alt="solution-banner-bg-1" width={1696} height={298}  priority  />
                        </div>
                    </div>
                </div>

            </div>

            <section className='bg-w'>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading-style-two">
                                <span>Key Features of Salesforce Sales Cloud</span>
                                <h2>Equips your team with the tools they need to drive sales success</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-9'>
                            <div className='row d-flex align-items-stretch'>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Lead Management</h3>
                                        <p>Capture, nurture, and convert leads seamlessly</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Opportunity Tracking</h3>
                                        <p>Manage opportunities, track deal stages, and forecast sales with precision</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Pipeline Management</h3>
                                        <p>Gain insights into your sales pipeline through intuitive dashboards and reports</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Mobile Accessibility</h3>
                                        <p>Access critical information anytime, anywhere, from any device</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Forecasting and Analytics</h3>
                                        <p>Utilize advanced analytics and forecasting tools to make data-driven decisions</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Sales Collaboration</h3>
                                        <p>Foster collaboration among sales teams with real-time communication and sharing of insights</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-3 align-self-center'>
                            <div className='right-service-img'>
                                <Image src="/img/icons/cloude-key-icons.png" alt="cloude-key-icons" width={215} height={154} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className=''>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading-style-two">
                                <span>Key Features of Salesforce Sales Cloud</span>
                                <h2>Equips your team with the tools they need to drive sales success</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex align-items-stretch">
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Sales Engagement</h3>
                                <p>Accelerate sales with engagement built directly into your CRM. Connect with buyers and drive action</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Sales Programs</h3>
                                <p>Accelerate sales with engagement built directly into your CRM. Connect with buyers and drive action.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Partner Relationship Management</h3>
                                <p>Accelerate sales with engagement built directly into your CRM. Connect with buyers and drive action</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Partner Relationship Management</h3>
                                <p>Accelerate sales with engagement built directly into your CRM. Connect with buyers and drive action</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Partner Relationship Management</h3>
                                <p>Accelerate sales with engagement built directly into your CRM. Connect with buyers and drive action</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Partner Relationship Management</h3>
                                <p>Accelerate sales with engagement built directly into your CRM. Connect with buyers and drive action</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Partner Relationship Management</h3>
                                <p>Accelerate sales with engagement built directly into your CRM. Connect with buyers and drive action</p>
                            </div>
                        </div>
                        {!showAll && (
                            <div className="col-lg-3 d-flex">
                                <div className="service-box-three flex-fill custom-anc bg-gradiant" onClick={handleShowAll}>
                                    <div className="text-center">
                                        <a>See all Products</a>
                                    </div>
                                </div>
                            </div>
                        )}
                        {showAll && (
                            <>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill bg-gradiant">
                                        <h3>Sales Engagement</h3>
                                        <p>Accelerate sales with engagement built directly into your CRM. Connect with buyers and drive action</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill">
                                        <h3>Sales Programs</h3>
                                        <p>Accelerate sales with engagement built directly into your CRM. Connect with buyers and drive action.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill bg-gradiant">
                                        <h3>Partner Relationship Management</h3>
                                        <p>Accelerate sales with engagement built directly into your CRM. Connect with buyers and drive action</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill">
                                        <h3>Sales Team Productivity</h3>
                                        <p>Accelerate sales with engagement built directly into your CRM. Connect with buyers and drive action</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill ">
                                        <h3>Buyer Engagement</h3>
                                        <p>Accelerate sales with engagement built directly into your CRM. Connect with buyers and drive action.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill bg-gradiant">
                                        <h3>Sales AI</h3>
                                        <p>Accelerate sales with engagement built directly into your CRM. Connect with buyers and drive action.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill">
                                        <h3>Sales Analytics</h3>
                                        <p>Accelerate sales with engagement built directly into your CRM. Connect with buyers and drive action.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill bg-gradiant">
                                        <h3>Sales AI</h3>
                                        <p>Accelerate sales with engagement built directly into your CRM. Connect with buyers and drive action.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill bg-gradiant">
                                        <h3>Sales Engagement</h3>
                                        <p>Accelerate sales with engagement built directly into your CRM. Connect with buyers and drive action</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill">
                                        <h3>Sales Programs</h3>
                                        <p>Accelerate sales with engagement built directly into your CRM. Connect with buyers and drive action.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-flex animated">
                                    <div className="service-box-three flex-fill bg-gradiant">
                                        <h3>Partner Relationship Management</h3>
                                        <p>Accelerate sales with engagement built directly into your CRM. Connect with buyers and drive action</p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                </div>
            </section>

            <section>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading-style-two">
                                <span>Benefits of Salesforce Sales Cloud</span>
                                <h2>Boost sales, improve performance, and forge stronger customer bonds</h2>
                            </div>
                        </div>
                    </div>

                    <div
                        className="row box-icon-box-wraper"
                    >
                        <div className="col-lg-3">
                            <div className='box-icon-box border-side-remove'>
                                <img src="/img/icons/seamless-implementation-icon.png" alt="seamless-implementation-icon" width={64} height={64} />
                                <h3>Seamless Implementation</h3>
                                <p>Our experts ensure a successful and efficient Salesforce implementation to help you achieve more ROI with existing resources.</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='box-icon-box border-side-remove'>
                                <img src="/img/icons/proven-expertise-icon.png" alt="proven-expertise-icon" width={64} height={64} />
                                <h3>Proven Expertise</h3>
                                <p>With a proven track record, our certified Salesforce experts are utilizing their expertise to optimize and maximize CRM ROI.</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='box-icon-box border-side-remove'>
                                <img src="/img/icons/tailored-approach-icon.png" alt="tailored-approach-icon" width={64} height={64} />
                                <h3>Tailored Approach</h3>
                                <p>We understand the business and its unique requirements to offer you a sustainable solution for growth and continuous profitability.</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='box-icon-box border-side-remove'>
                                <img src="/img/icons/tailored-approach-icon.png" alt="tailored-approach-icon" width={64} height={64} />
                                <h3>Tailored Approach</h3>
                                <p>We understand the business and its unique requirements to offer you a sustainable solution for growth and continuous profitability.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='cta'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5 align-self-center'>
                            <Image src="/img/icons/cta-icon.png" alt="cta-icon.png" width={346} height={247} priority />
                        </div>
                        <div className='col-lg-7 align-self-center'>
                            <div className='cta-content'>
                                <h3>Ready to supercharge your sales operations with Salesforce Sales Cloud?</h3>
                                <p>Schedule a free consultation with our experts today and discover how we can tailor a solution to drive your business forward.</p>
                                <ModelBox headerText="Get a Free Demo" buttonText="Don't miss out – schedule your consultation today" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="heading-style-two">
                                <span>About CRMForcePlus</span>
                                <h2>CRMForcePlus:<br />Your Trusted Salesforce Partner</h2>
                                <p>We enable the Salesforce to work for you. Build relationships, transform the customer experience, and drive uninterrupted growth with our expert guidance.<br /><br />Don't settle for just a Salesforce partner. We deliver results. Our Salesforce experts combine experience, proven solutions, and advanced technology to harness the power of CRM and transform your business.</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="row box-icon-box-wraper"
                    >
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <img src="/img/icons/seamless-implementation-icon.png" alt="seamless-implementation-icon" width={64} height={64} />
                                <h3>Seamless Implementation</h3>
                                <p>Our experts ensure a successful and efficient Salesforce implementation to help you achieve more ROI with existing resources.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <img src="/img/icons/proven-expertise-icon.png" alt="proven-expertise-icon" width={64} height={64} />
                                <h3>Proven Expertise</h3>
                                <p>With a proven track record, our certified Salesforce experts are utilizing their expertise to optimize and maximize CRM ROI.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <img src="/img/icons/tailored-approach-icon.png" alt="tailored-approach-icon" width={64} height={64} />
                                <h3>Tailored Approach</h3>
                                <p>We understand the business and its unique requirements to offer you a sustainable solution for growth and continuous profitability.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="heading-style-one">
                                <span>Case Stories</span>
                                <h2>Explore how businesses like yours have
                                    transformed their sales operations with Sales Cloud</h2>
                                <p>Read our case studies to see firsthand the measurable results achieved through our tailored solutions.</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='slider-one'>
                                <Swiper
                                    slidesPerView={2}
                                    spaceBetween={30}
                                    autoplay={{
                                        delay: 4000,
                                        disableOnInteraction: true,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Pagination, Autoplay]}
                                    className="mySwiper"
                                >

                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>ABC Enterprises, a tech firm, aimed to streamline sales with Salesforce Sales Cloud</h4>
                                            <p>They began by defining clear goals and identifying pain points in their sales operations. Customizing Sales Cloud to their specific needs, they integrated it seamlessly with existing systems to ensure a unified view of customer data. Comprehensive user training programs were implemented to drive adoption, supported by continuous monitoring and optimization of key performance metrics.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>30% increase in lead conversion</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>30% increase in lead conversion</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>ABC Enterprises, a tech firm, aimed to streamline sales with Salesforce Sales Cloud</h4>
                                            <p>They began by defining clear goals and identifying pain points in their sales operations. Customizing Sales Cloud to their specific needs, they integrated it seamlessly with existing systems to ensure a unified view of customer data. Comprehensive user training programs were implemented to drive adoption, supported by continuous monitoring and optimization of key performance metrics.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>30% increase in lead conversion</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>30% increase in lead conversion</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>ABC Enterprises, a tech firm, aimed to streamline sales with Salesforce Sales Cloud</h4>
                                            <p>They began by defining clear goals and identifying pain points in their sales operations. Customizing Sales Cloud to their specific needs, they integrated it seamlessly with existing systems to ensure a unified view of customer data. Comprehensive user training programs were implemented to drive adoption, supported by continuous monitoring and optimization of key performance metrics.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>30% increase in lead conversion</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>30% increase in lead conversion</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>ABC Enterprises, a tech firm, aimed to streamline sales with Salesforce Sales Cloud</h4>
                                            <p>They began by defining clear goals and identifying pain points in their sales operations. Customizing Sales Cloud to their specific needs, they integrated it seamlessly with existing systems to ensure a unified view of customer data. Comprehensive user training programs were implemented to drive adoption, supported by continuous monitoring and optimization of key performance metrics.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>30% increase in lead conversion</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>30% increase in lead conversion</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container'>
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="heading-style-one">
                                <span>Pricing</span>
                                <h2>Contact us for tailored pricing options <br /> that suit your needs perfectly</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}

export default Solution;
