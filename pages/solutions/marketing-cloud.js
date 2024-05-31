import React, { useRef, useState } from 'react';
import ModelBox from '@/components/ModelBox';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Head from 'next/head';

const MarketingCloud = () => {

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
        <Head>
            <title>Marketing Cloud | CRM Force Plus</title>
        </Head>
            <div className='hero-banner-two hero-banner-two-pd-40'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="hero-content">
                                <h1>Unlock Marketing Automation & Personalization with  <span>Marketing Cloud</span></h1>
                                <p>Craft hyper-personalized marketing journeys & boost ROI with Salesforce Marketing Cloud discover the data-driven features that unlock customer engagement and fuel business growth.</p>
                                <ModelBox headerText="Get a Free Demo" buttonText="Request a Free Demo" />
                            </div>
                        </div>
                    </div>
                    <div className='row desk-banner-hide'>
                        <div className="elementor-background-overlay">
                          
                            <Image src="/img/banner/marketing-cloud-banner.png" className='bg-mid' alt="marketing-cloud-banner" width={932} height={278}  priority  />
                            <Image src="/img/icons/cloud-hero-bg.png" alt='cloud-hero-bg' className='bg-top' width={434} height={313} priority  />
                            <Image src="/img/banner/solution-banner-bg-1.png" className='bg-back' alt="solution-banner-bg-1" width={1696} height={298}  priority  />
                        </div>
                    </div>
                </div>

            </div>

            <section className='mobile-banner-hide text-center'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                        <Image src="/img/banner/marketing-cloud-banner-mobile.png" className='bg-mid' alt="marketing-cloud-banner-mobile" width={628} height={407}  priority  />
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-w'>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading-style-two">
                                <span>Key Features of Salesforce Marketing Cloud</span>
                                <h2>Power Up Your Marketing with Customer-Centric Features of Marketing Cloud</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-9'>
                            <div className='row d-flex align-items-stretch'>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Personalized Customer Journeys</h3>
                                        <p>Craft unique experiences across different channels based on customer preferences and behaviour.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Omnichannel Engagement</h3>
                                        <p>Reach customers on their preferred channels to build stronger relationships with personal interactions.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Marketing Automation</h3>
                                        <p>Automate repetitive tasks, personalize email journeys, and trigger real-time interactions at scale.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Powerful Analytics & Reporting</h3>
                                        <p>Gain actionable insights into campaign performance, measure ROI, and optimize your strategy.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Einstein AI for Smart Marketing</h3>
                                        <p>Leverage the power of AI to predict customer behaviour and optimize campaigns for better results.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Seamless Integrations</h3>
                                        <p>Integrate Marketing Cloud with your CRM and other business systems for a unified business view.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-3 align-self-center'>
                            <div className='right-service-img'>
                                <Image src="/img/icons/marketing-cloud-side-pic.png" alt="marketing-cloud-side-pic" width={301} height={166} />
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
                                <span>Marketing Cloud Products</span>
                                <h2>Beyond Automation: Discover the Full Range of Marketing Cloud Solutions</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex align-items-stretch">
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Data Cloud for Marketing</h3>
                                <p>Unify your customer data to unlock deeper insights and personalization.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Marketing Cloud Personalization</h3>
                                <p>Deliver one-to-one experiences across all channels with real-time personalization.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Marketing Cloud Engagement</h3>
                                <p>Automate marketing workflows and nurture leads with multi-channel engagement.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Marketing Cloud Account Engagement</h3>
                                <p>Empower your sales team with data-driven account-based marketing (ABM).</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex m-d-none ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Marketing Cloud Intelligence</h3>
                                <p>Gain a holistic view of your marketing performance with advanced analytics and reporting.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Loyalty Management</h3>
                                <p>Build stronger customer relationships and drive repeat business with a loyalty program.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Referral Marketing</h3>
                                <p>Incentivize your customers to spread the word and grow your brand with a referral program.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Marketing AI</h3>
                                <p>Leverage the power of AI to automate tasks, personalize experiences, and optimize campaigns.</p>
                            </div>
                        </div>
                        {/* {!showAll && (
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
                               
                            </>
                        )} */}
                    </div>

                </div>
            </section>

            <section>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading-style-two">
                                <span>Benefits of Salesforce Marketing Cloud</span>
                                <h2>Fuel Business Growth with the Proven Benefits of Salesforce Marketing Cloud</h2>
                            </div>
                        </div>
                    </div>

                    <div
                        className="row box-icon-box-wraper"
                    >
                        <div className="col-lg-3">
                            <div className='box-icon-box border-side-remove'>
                                <img src="/img/icons/Personalization-at-Scale.png" alt="Personalization-at-Scale" width={65} height={65} />
                                <h3>Personalization at Scale</h3>
                                <p>Deliver hyper-relevant experiences that resonate with every customer, driving engagement and conversions.</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='box-icon-box border-side-remove'>
                                <img src="/img/icons/Automated-Efficiency-icon.png" alt="Automated-Efficiency-icon" width={65} height={65} />
                                <h3>Automated Efficiency</h3>
                                <p>Streamline workflows, free up your team's time, and focus on strategic initiatives.</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='box-icon-box border-side-remove'>
                                <img src="/img/icons/Data-Driven-icon.png" alt="Data-Driven-icon" width={65} height={65} />
                                <h3>Data-Driven Decisions</h3>
                                <p>Gain actionable insights to optimize campaigns, maximize ROI, and measure success effectively.</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='box-icon-box border-side-remove'>
                                <img src="/img/icons/Unified-Customer-View-icon.png" alt="Unified-Customer-View-icon" width={65} height={65} />
                                <h3>Unified Customer View</h3>
                                <p>Break down data silos and gain a complete understanding of your customers for smarter marketing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='cta'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5 align-self-center'>
                            <Image src="/img/icons/marketing-cloud-cta.png" alt="marketing-cloud-cta.png" width={346} height={247} priority />
                        </div>
                        <div className='col-lg-7 align-self-center'>
                            <div className='cta-content'>
                                <h3>Is Marketing Cloud Right for You? Discover the Answer Here</h3>
                                <p>Unsure if Marketing Cloud fits your business needs? Discover the truth here.</p>
                                <ModelBox headerText="Get a free assessment to find out!" buttonText="Get a free assessment to find out!" />
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
                                <span>How CRMForce+ can help you?</span>
                                <h2>Streamlined Implementation, Optimized Results: Choose Us for you Marketing Journey</h2>
                                {/* <p>We enable the Salesforce to work for you. Build relationships, transform the customer experience, and drive uninterrupted growth with our expert guidance.<br /><br />Don't settle for just a Salesforce partner. We deliver results. Our Salesforce experts combine experience, proven solutions, and advanced technology to harness the power of CRM and transform your business.</p> */}
                            </div>
                        </div>
                    </div>

                    <div
                        className="row box-icon-box-wraper"
                    >
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <img src="/img/icons/Deep-Marketing-icon.png" alt="Deep-Marketing-icon" width={65} height={65} />
                                <h3>Deep Marketing Cloud Expertise</h3>
                                <p>Our team of certified experts has extensive experience in configuring, customizing, and optimizing Marketing Cloud.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <img src="/img/icons/Proven-Track-Record-icon.png" alt="Proven-Track-Record-icon" width={65} height={65} />
                                <h3>Proven Track Record</h3>
                                <p>We have a successful track record of delivering high-impact implementations, ensuring maximizing your ROI. </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <img src="/img/icons/Data-Driven-Approach-icon.png" alt="Data-Driven-Approach-icon" width={65} height={65} />
                                <h3>Data Driven Approach</h3>
                                <p>We leverage data insights to optimize your Marketing Cloud setup, ensuring your campaigns to deliver results.</p>
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
                                <span>Customer Stories</span>
                                <h2>Customer Success Stories: How Salesforce Empowers Businesses with Marketing Cloud</h2>
                                <p>Dive into these real-world case studies and see how Salesforce solutions can help you personalize customer experiences.</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='slider-one'>
                                <Swiper
                                    spaceBetween={30}
                                    autoplay={{
                                        delay: 4000,
                                        disableOnInteraction: true,
                                    }}

                                    pagination={{
                                        clickable: true,
                                    }}
                                    breakpoints={{
                                        650: {
                                          slidesPerView: 1,
                                          spaceBetween: 20,
                                        },
                                        768: {
                                          slidesPerView: 1,
                                          spaceBetween: 40,
                                        },
                                        1024: {
                                          slidesPerView: 2,
                                          spaceBetween: 50,
                                        },
                                      }}
                                    modules={[Pagination, Autoplay]}
                                    className="mySwiper"
                                >

                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>Baptist Health South Florida Strengthens Patient Engagement with Marketing Cloud</h4>
                                            <p>Baptist Health South Florida was struggling to understand individual needs and deliver personalized communication. Marketing Cloud implementation empowers them to unify patient data from various sources, creating a 360-degree view. This data fueled targeted segments within Marketing Cloud for personalized email and text message campaigns. </p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>Increased patient numbers by 30%</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>Simplified business operations by 40%</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>Susan G. Komen Boosts Patient Support and Tracks Health Status with the Marketing Cloud</h4>
                                            <p>Susan G. Komen was struggling to offer comprehensive and personalized support to patients. The Marketing Cloud implementation led them to create a unified view of patient data.  This facilitated care coordination, follow-ups, and self-service options for patients. Einstein 1 Marketing enabled personalized communication and embraced automation to schedule follow-ups.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>Patient experience enhanced by 50%</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>Online patient engagement increased by 40%</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>AAUM Deepens Alumni Engagement and Personalized Communication with Marketing Cloud</h4>
                                            <p>Manual tracking and siloed data led the AAUM to inconsistent messaging and impersonal outreach for 700,000+ alumni. Marketing Cloud enables them to integrate different university data with a holistic view and offer personalized communication. It optimized event outreach and volunteer recruitment with a deeper connection with alumni.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>Membership retention rates increased by 20%</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>Marketing budget was reduced to 20%</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>AFL Boosts Grassroots Participation and Fan Engagement with Marketing Cloud</h4>
                                            <p>AFL was unable to track participation and optimize fan engagement strategies. They implemented Marketing Cloud along with different Salesforce products to create a central data hub. The Marketing Cloud enabled automated and personalized email campaigns based on fan preferences. This increased grassroots participation and personalized fan engagement experiences. </p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>Personalization increased revenue by 25%</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>Brand engagement was boosted by 40%</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>Ponce Bank Boosts Customer Experience with Marketing Cloud</h4>
                                            <p>They were struggling to connect systems across 54+ sources, which hindered Ponce Bank from understanding customers and offering personalized financial guidance. Marketing Cloud empowers them to get a 360-degree view of customers by unifying data. Also, you would be able to avail of cloud automation processes, optimized lead management, and accelerated onboarding. </p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>Increased operational efficiency by 30%</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>Enhanced productivity by 45%</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>UNLV Boosts Enrollment and Streamlines Support with Marketing Cloud</h4>
                                            <p>UNLV's disconnected data systems hampered the ability to personalize student communication and support. They leveraged Marketing Cloud to segment student data and design targeted communication plans. It included automated journeys in Journey Builder to guide students through the application process. The marketing cloud comes with a self-service portal and live chat for faster student support, along with automated deadline reminders.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>Increase first-year enrollment by 22%</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>Reduced student support wait times by 80%</span></li>
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

export default MarketingCloud;
