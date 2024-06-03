import React, { useRef, useState } from 'react';
import ModelBox from '@/components/ModelBox';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Head from 'next/head';

const CommerceCloud = () => {

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
                <title>Commerce Cloud | CRM Force Plus</title>
            </Head>
            <div className='hero-banner-two hero-banner-two-pd-40'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="hero-content">
                                <h1>Future-Proof your E-commerce business with Salesforce <span>Commerce Cloud </span></h1>
                                <p>Take control of your online store and unlock a future of seamless shopping experiences. Discover how Commerce Cloud empowers businesses to grow and thrive in evolving world of e-commerce</p>
                                <ModelBox headerText="Get a Free Demo" buttonText="Request a Free Demo" />
                            </div>
                        </div>
                    </div>
                    <div className='row desk-banner-hide'>
                        <div className="elementor-background-overlay">

                            <Image src="/img/banner/Commerce-Cloud-banner.png" className='bg-mid' alt="Commerce-Cloud-banner" width={932} height={278} priority />
                            <Image src="/img/icons/cloud-hero-bg.png" alt='cloud-hero-bg' className='bg-top' width={434} height={313} priority />
                            <Image src="/img/banner/solution-banner-bg-1.png" className='bg-back' alt="solution-banner-bg-1" width={1696} height={298} priority />
                        </div>
                    </div>
                </div>

            </div>

            <section className='mobile-banner-hide text-center'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                        <Image src="/img/banner/Commerce-Cloud-banner-mobile.png" className='bg-mid' alt="Commerce-Cloud-banner-mobile" width={628} height={407}  priority  />
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-w'>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading-style-two">
                                <span>Key Features of Salesforce Commerce Cloud</span>
                                <h2>Power Up Your Store: Unveiling the Features of Salesforce Commerce Cloud</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-9'>
                            <div className='row d-flex align-items-stretch'>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Seamless Customer Journeys</h3>
                                        <p>Craft personalized shopping experiences tailored to individual customer preferences.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Omnichannel Commerce</h3>
                                        <p>Unify your online store with physical locations and other sales channels for a cohesive shopping experience.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Agile Marketing Tools</h3>
                                        <p>Drive targeted promotions and campaigns to boost customer engagement and sales.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Effortless Content Management</h3>
                                        <p>Easily update product information, images, and promotions with intuitive content management features.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Scalable Inventory Management</h3>
                                        <p>Maintain accurate inventory levels across all channels, ensuring smooth order fulfilment.</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex'>
                                    <div className='service-box-three flex-fill'>
                                        <h3>Powerful Order Management System</h3>
                                        <p>Automate workflows, track orders in real-time, and deliver exceptional customer service.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-3 align-self-center'>
                            <div className='right-service-img'>
                                <Image src="/img/icons/Commerce-Cloud-side-pic.png" alt="Commerce-Cloud-side-pic" width={257} height={166} />
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
                                <span>Salesforce Commerce Cloud Products</span>
                                <h2>Beyond the Platform: Exploring the Power of Commerce Cloud Products</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex align-items-stretch">
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Storefront Templates</h3>
                                <p>Launch quickly with pre-designed themes or craft a unique online store experience.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Composable Storefronts</h3>
                                <p>Build a modular storefront, picking and choosing the features that perfectly match your vision.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Headless Commerce</h3>
                                <p>Deliver a frictionless shopping experience across any device or touchpoint (think mobile apps, social media).</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Order Management</h3>
                                <p>Automate workflows, streamline fulfillment, and keep customers happy with efficient order handling.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex m-d-none ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Web3 Commerce</h3>
                                <p>Embrace the future - accept payments and unlock new opportunities with Web3 technologies like cryptocurrency.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Pay Now</h3>
                                <p>Offer a secure and convenient payment processing solution for your customers.</p>
                            </div>
                        </div>
                        {/* <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Sales Programs</h3>
                                <p>Deploy sufficient resources using AI-powered coaching to maximize sales output.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Sales Analytics</h3>
                                <p>Get sales insights to simplify the sales pipeline and optimize different sales operations.</p>
                            </div>
                        </div> */}
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
                        )} */}
                    </div>

                </div>
            </section>

            <section>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading-style-two">
                                <span>Benefits of Salesforce Commerce Cloud</span>
                                <h2>Elevate Your E-commerce Game: The Compelling Benefits of Commerce Cloud</h2>
                            </div>
                        </div>
                    </div>

                    <div
                        className="row box-icon-box-wraper"
                    >
                        <div className="col-lg-3">
                            <div className='box-icon-box border-side-remove'>
                                <Image src="/img/icons/Omnichannel-Excellence-icon.png" alt="Omnichannel-Excellence-icon" width={65} height={65} />
                                <h3>Omnichannel Excellence</h3>
                                <p>Provide a seamless shopping experience across all channels, from mobile apps to physical stores.</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='box-icon-box border-side-remove'>
                                <Image src="/img/icons/Scalability-Agility-icon.png" alt="Scalability-Agility-icon" width={65} height={65} />
                                <h3>Scalability & Agility</h3>
                                <p>Empower your business to grow and adapt with a platform that scales effortlessly to meet your needs.</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='box-icon-box border-side-remove'>
                                <Image src="/img/icons/Data-Driven-Insights-icon.png" alt="Data-Driven-Insights-icon" width={65} height={65} />
                                <h3>Data-Driven Insights</h3>
                                <p>Gain valuable customer data and analytics to optimize marketing campaigns and product offerings.</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='box-icon-box border-side-remove'>
                                <Image src="/img/icons/Reduced -total-icon.png" alt="Reduced -total-icon" width={65} height={65} />
                                <h3>Reduced Total Cost of Ownership</h3>
                                <p>Streamline operations, minimize development efforts, and enjoy the cost-efficiencies of a cloud-based platform.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='cta'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5 align-self-center'>
                            <Image src="/img/icons/commerce-cloud-cta.png" alt="commerce-cloud-cta.png" width={346} height={247} priority />
                        </div>
                        <div className='col-lg-7 align-self-center'>
                            <div className='cta-content'>
                                <h3>Stop Managing, Start Thriving:  Simplify Your E-commerce Journey with Commerce Cloud</h3>
                                <p>Ready to transform your online store and unlock explosive growth? Take the first step towards a future-proofed e-commerce experience.</p>
                                <ModelBox headerText="Request a Demo Now!" buttonText="Request a Demo Now!" />
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
                                <span>How CRMforce+ Can Help You?</span>
                                <h2>Why Choose CRMForce+ for Your Salesforce Commerce Cloud Implementation?</h2>
                                {/* <p>We enable the Salesforce to work for you. Build relationships, transform the customer experience, and drive uninterrupted growth with our expert guidance.<br /><br />Don't settle for just a Salesforce partner. We deliver results. Our Salesforce experts combine experience, proven solutions, and advanced technology to harness the power of CRM and transform your business.</p> */}
                            </div>
                        </div>
                    </div>

                    <div
                        className="row box-icon-box-wraper"
                    >
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/Deep-Expertise-icon.png" alt="Deep-Expertise-icon" width={65} height={65} />
                                <h3>Deep Expertise & Proven Results</h3>
                                <p>Benefit from our team of certified Commerce Cloud professionals with a track record of successful implementations.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/Streamlined-Implementation-Process-icon.png" alt="Streamlined-Implementation-Process-icon" width={65} height={65} />
                                <h3>Streamlined Implementation Process</h3>
                                <p>Experience a smooth and efficient implementation journey, tailored to your specific business needs.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/Ongoing-Support-Optimization-icon.png" alt="Ongoing-Support-Optimization-icon" width={65} height={65} />
                                <h3>Ongoing Support & Optimization</h3>
                                <p>Gain access to our ongoing support services and continuous optimization strategies to ensure full potential of the solution.</p>
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
                                <h2>From Clicks to Committed Customers: Salesforce Commerce Cloud Success Stories</h2>
                                <p>Dive into these case studies and discover how businesses of all sizes are leveraging Commerce Cloud to achieve success.</p>
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

                                    <SwiperSlide className="d-flex">
                                        <div className='slider-one-inner flex-fill'>
                                            <h4>Duluth Trading Company Builds a Blazing-Fast Shopping Experience with Commerce Cloud</h4>
                                            <p>Duluth Trading Company, an online workwear retailer, needed to create a faster, more convenient online shopping experience for its customers. With Commerce Cloud implementation, they can now achieve a headless architecture that delivers an app-like experience on the web. This eliminated the need for a separate mobile app and boosted site speed by a full second.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>Increased brand sales by 60%</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>User engagement enhanced by 30%</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>YETI Hikes to Conversion Success with a Customized Commerce Cloud Experience</h4>
                                            <p>Yeti is a popular name in premium outdoor gear who wants to create a unique online experience for its drinkware campaign while maintaining its existing Commerce Cloud storefront. With Commerce Cloud, they can now combine existing templates with new composable technology, offering a fully customized journey for customers while keeping the core storefront intact.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>Mobile conversion rate increased by 63%</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>Enhanced online shopping experience by 50%</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>Heathrow Takes Off with Personalized Digital Experiences Powered by Salesforce Commerce Cloud</h4>
                                            <p>Heathrow was facing challenges in delivering a seamless digital experience. The disjointed systems and fragmented data were hindering personalization efforts. They decided on a Commerce Cloud implementation along with different solutions. This enabled personalized services and communication. Also, passengers benefited from a more seamless digital experience, with features like pre-booking parking and receiving personalized product recommendations.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>Increased digital revenue by 30%</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>Average call handling time reduced to 27%</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>Santander UK Empowers Businesses for Global Growth with Salesforce Commerce Cloud</h4>
                                            <p>Santander UK, a commercial bank, aims to empower businesses, especially SMEs, to navigate the complexities of international trade and unlock global growth opportunities. Marketing Cloud implementation led them to build a digital platform named Santander Navigator. This platform offers growth strategies, market insights, and connections to international trade experts.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>Increased conversions by 40%</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>Data utilisation enhanced by 60%</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>ReserveBar Raises a Glass to Scalability with Salesforce Commerce Cloud</h4>
                                            <p>They need a robust solution to manage their complex marketplace. They were unable to scale up their legacy solution. With Commerce Cloud implementation, they can now manage inventory and pricing across all partner stores, utilizing the power of automation. Now, they have gained the flexibility to manage a vast product range and partner network, paving the way for future expansion. </p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>Increased revenue by 40%</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>Enhanced customer interaction by 30%</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>Kellogg's Serves Up Success with Data-Driven Commerce and Philanthropy using Commerce Cloud</h4>
                                            <p>Kellogg's is a popular brand for SMBs who want to get valuable insights and recommendations. Also, they want to build brand loyalty and gather consumer feedback for product development. The Salesforce implementation empowered them to launch a mobile e-commerce platform that offers dynamic segmentation, suggested orders, and optimized shipping.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>User-friendliness increased by 50%</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>Customer engagement enhanced by 60%</span></li>
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

export default CommerceCloud;
