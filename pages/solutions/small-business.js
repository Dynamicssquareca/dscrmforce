import React, { useRef, useState } from 'react';
import ModelBox from '@/components/ModelBox';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Head from 'next/head';

const SmallBusiness = () => {

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
            <title>Small Business | CRM Force Plus</title>
        </Head>
            <div className='hero-banner-two'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="hero-content">
                                <h1>Supercharge Your Small Business with Salesforce: Grow Faster, Smarter, Stronger</h1>
                                <p>Stop wasting time and resources. Streamline your operations, boost sales, and delight customers with Salesforce for Small Business. Get a free trial and see the difference!</p>
                                <ModelBox headerText="Get a Free Demo" buttonText="Request a Free Demo" />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="elementor-background-overlay">
                          
                            <Image src="/img/banner/small-business-banner.png" className='bg-mid' alt="small-business-banner" width={932} height={278}  priority  />
                            <Image src="/img/icons/cloud-hero-bg.png" alt='cloud-hero-bg' className='bg-top' width={434} height={313} priority  />
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
                                <span>Key Features of Salesforce for Small Business</span>
                                <h2>Simplify Your Business with Powerful Features of Salesforce for Small Business</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-9'>
                            <div className='row d-flex align-items-stretch'>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Effortless CRM</h3>
                                        <p>Manage customer relationships seamlessly, track leads, and close deals faster.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Automated Workflows</h3>
                                        <p>Free up your time by automating repetitive tasks and nurturing leads automatically.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Mobile Access</h3>
                                        <p>Work from anywhere with the Salesforce mobile app and stay connected to your customers on the go.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Powerful Reporting & Insights</h3>
                                        <p>Gain valuable insights into your sales performance and make data-driven decisions.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Integrated Solutions</h3>
                                        <p>Connect Salesforce with your existing tools for a unified view of your business.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Affordable & Scalable</h3>
                                        <p>Enjoy flexible pricing that grows with your business and see a clear return on investment.</p>
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
                                <span>Salesforce Products for Small Business</span>
                                <h2>Grow Your Business Faster with These Salesforce for Small Business Products</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex align-items-stretch">
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Starter Suite</h3>
                                <p>Lay the foundation for growth with essential contact management and sales tools.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Pro Suite</h3>
                                <p>Unlock powerful automation, lead nurturing, and reporting to accelerate your sales. </p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Marketing</h3>
                                <p>Engage customers across channels, personalize campaigns, and drive higher ROI. </p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Sales</h3>
                                <p>Manage leads, track opportunities, and close deals faster with a streamlined sales process. .</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Service</h3>
                                <p>Deliver exceptional customer support, resolve issues quickly, and build stronger relationships.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Productivity with Slack</h3>
                                <p>Boost team collaboration, communication, and productivity with integrated Slack functionality.</p>
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
                                        <h3>Partner Relationship Management</h3>
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
                                <span>Benefits of Salesforce for Small Business</span>
                                <h2>From Small Biz to Big Success: Level up your Business with advanced tools</h2>
                            </div>
                        </div>
                    </div>

                    <div
                        className="row box-icon-box-wraper"
                    >
                        <div className="col-lg-3">
                            <div className='box-icon-box border-side-remove'>
                                <img src="/img/icons/boost-sales-icons .png" alt="boost-sales-icons " width={65} height={65} />
                                <h3>Boost Sales & Close More Deals</h3>
                                <p>Streamline your sales process, automate tasks, and gain valuable insights to close deals faster.</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='box-icon-box border-side-remove'>
                                <img src="/img/icons/effortless-customer-icon.png" alt="effortless-customer-icon" width={65} height={65} />
                                <h3>Effortless Customer Management</h3>
                                <p>Centralize all your customer data, track interactions, and build stronger relationships effortlessly.</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='box-icon-box border-side-remove'>
                                <img src="/img/icons/unify-business-icon.png" alt="unify-business-icon" width={65} height={65} />
                                <h3>Unify Your Business</h3>
                                <p>Connect Salesforce with your existing tools to gain a complete view of your operations and work more efficiently.</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='box-icon-box border-side-remove'>
                                <img src="/img/icons/data-driven-icon.png" alt="data-driven-icon" width={65} height={65} />
                                <h3>Data-Driven Decisions</h3>
                                <p>Gain real-time insights into your business performance, identify trends, and make smarter decisions for growth.</p>
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
                                <h3>Ready to Supercharge Your Small Business with Salesforce Solutions?</h3>
                                <p>Get a free consultation and unlock the power of Salesforce for your unique needs.</p>
                                <ModelBox headerText="Schedule a Free Call Today!" buttonText="Schedule a Free Call Today!" />
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
                                <span>How CRMForce + can help you?</span>
                                <h2>Your Trusted Partner for Salesforce Success: How CRMForce+ Empowers Small Businesses</h2>
                               
                            </div>
                        </div>
                    </div>

                    <div
                        className="row box-icon-box-wraper"
                    >
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <img src="/img/icons/seamless-implementation-icon.png" alt="seamless-implementation-icon" width={64} height={64} />
                                <h3>Expert Guidance & Implementation</h3>
                                <p>Our team of certified Salesforce consultants will guide you through every step of the implementation process, ensuring successful transition.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <img src="/img/icons/proven-expertise-icon.png" alt="proven-expertise-icon" width={64} height={64} />
                                <h3>Customized Solutions for Your Needs</h3>
                                <p>We'll work with you to understand your unique business goals and tailor Salesforce to meet them perfectly.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <img src="/img/icons/tailored-approach-icon.png" alt="tailored-approach-icon" width={64} height={64} />
                                <h3>Measurable Results & ROI</h3>
                                <p>We'll track your progress and ensure you see a clear return on investment from your Salesforce implementation.</p>
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
                                <h2>Small Businesses, Big Success: Inspiring Stories of Growth</h2>
                                <p>Check out the inspiring stories of small businesses that have overcome challenges and achieved success through innovation and perseverance.</p>
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
                                        640: {
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
                                            <h4>Snapology of Lehi Builds STEAM Future with Affordable CRM Capabilities</h4>
                                            <p>Focused on STEAM education, Snapology of Lehi Builds was facing challenge to grow and maintain cost efficiency due to pandemic. With the Startup Pack of Small Businesses, they have implemented an attractive user-interface and lightning App Development for ease of customisation. The business has started getting critical insights for tracking growth, and marketing campaign effectiveness.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>Increased data usability by 30%</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>Enhanced customer base by 40%</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>ICS+ Tunes Up Productivity and Unified Operations with Salesforce Small Business</h4>
                                            <p>ICS+ was facing issues managing disparate systems, limited collaboration opportunities, and ineffective lead management. With the Salesforce for Small Business implementation, they are now able to centralize data management, boost team collaboration, and enhance lead management operations more effectively.  ICS+ achieves boosted productivity, faster cash flow, and enhanced sales efficiency. </p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>Increased Sales Efficiency by 25%</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>Achieved ROI using Salesforce by 942%</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>Humu Builds a People-Centered Business with Salesforce Essentials</h4>
                                            <p>Humu was facing issues in managing client relationships, empowering user adoption, and gather customer feedback. With the adoption of Salesforce Essentials, they are now able to streamline client management, adapt to intuitive user interface, utilize mobile accessibility, and perform data-driven product development. Humu is able to build strong client relationships, enhance team productivity, and boost product development.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>Productivity increased by 30%</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>Team collaboration enhanced by 50%</span></li>
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

export default SmallBusiness;
