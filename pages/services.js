import React, { useRef, useState } from 'react';
import ModelBox from '@/components/ModelBox';
import Image from 'next/image';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, } from 'reactstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import Head from 'next/head';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Services = () => {

    const [showAll, setShowAll] = useState(false);

    const handleShowAll = () => {
        setShowAll(true);
    };

    const slideStyle = {
        transition: 'transform 0.5s ease',
        transform: showAll ? 'translateX(0)' : 'translateX(-100%)',
    };


    /*accordain coed*/
    const [open, setOpen] = useState('');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };


    return (
        <>
            <Head>
                <title>Service page</title>
            </Head>
            <div className='hero-banner-two height-auto'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="hero-content">
                                <h1>Manage Leads and Boosts Productivity with Salesforce <span>Sales Cloud</span></h1>
                                <p>Salesforce Sales Cloud is an AI-enabled CRM solution that enables you to sell faster and smarter. It unifies customer data and automates tasks with a 360° business view.</p>
                                <ModelBox headerText="Get a Free Demo" buttonText="Request a Free Consultatio" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className="elementor-background-default">
                        <Image src="/img/banner/services-banner.png" className='bg-defult' alt="services-banner" width={1920} height={314} priority />
                    </div>
                </div>
            </div>

            <section className='bg-w'>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading-style-two">
                                <span>Features of Salesforce Sales Cloud</span>
                                <h2>Most Trusted and Secure <br />Salesforce Implementation Services</h2>
                                <p>At CRMFORCEPLUS, we are dedicated to revolutionizing businesses through innovative Salesforce Solutions implementations. As a newly established venture, we bring a fresh perspective to the realm of customer relationship management, leveraging cutting-edge technology to drive growth and success for our clients.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="row box-icon-box-wraper"
                    >
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <img src="/img/icons/seamless-implementation-icon.png" alt="seamless-implementation-icon" width={64} height={64} />
                                <h3>Unify Customer Data</h3>
                                <p>Record and collect customer conversations and store them digitally in a unified database.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <img src="/img/icons/proven-expertise-icon.png" alt="proven-expertise-icon" width={64} height={64} />
                                <h3>Scale with ease</h3>
                                <p>With business growth, scale your Salesforce Sales cloud CRM system without any hassle.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <img src="/img/icons/tailored-approach-icon.png" alt="tailored-approach-icon" width={64} height={64} />
                                <h3>Generate Valuable Reports</h3>
                                <p>Collect and analyze your data to make productive reports without relying on another solution.</p>
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
                                {/* <span>Sales Product</span> */}
                                <h2>Salesforce Product Implementation Expertise</h2>
                                <p>As a distinguished partner, Access Global Group excels in implementing the full suite of Salesforce products, consistently surpassing client expectations.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex align-items-stretch">
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Sales Engagement</h3>
                                <p>Build customer engagement to close more sales with the minimum amount of effort.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Buyer Engagement</h3>
                                <p>Promote sales and marketing collaboration to capture more leads and close deals.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Sales AI</h3>
                                <p>Leverage modern AI capabilities to support executives at each sales event.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Einstein Conversation Insights</h3>
                                <p>Utilize data-driven actionable insights to reduce the time to convert a lead.</p>
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
                                <span>Our Process</span>
                                <h2>How we Work</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='pic-box-one'>
                            <img src="/img/banner/process-work-bg.png" alt="process-work-bg" className='desk' />
                            <img src="/img/banner/process-work-bg-mob.png" alt="process-work-bg-mob" className='mob' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-grey p-top-60'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5 align-self-center'>
                            <div className="heading-style-two">
                                <h2>Benefits of Salesforce Implementation Partner</h2>
                                <p>As a distinguished partner, Access Global Group excels in implementing the full suite of Salesforce products, consistently surpassing client expectations.</p>
                                <div className='p-t-15'><a className="btn btn-prime" href='#'>Get Started Today and See the Difference</a></div>
                            </div>
                        </div>
                        <div className='col-lg-7'>
                            <div className='row'>
                                <div className='col-lg-6 d-flex'>
                                    <div className='service-box-four flex-fill'>
                                        <div className='icons-flot'>
                                            <img src="/img/icons/plus-icons.png" alt="plus-icons" />
                                        </div>
                                        <div className='box-inner'>
                                            <h4>Tailored Fit</h4>
                                            <p>Solutions designed specifically for your business needs</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='service-box-four flex-fill'>
                                        <div className='icons-flot'>
                                            <img src="/img/icons/plus-icons.png" alt="plus-icons" />
                                        </div>
                                        <div className='box-inner'>
                                            <h4>Improved Efficiency</h4>
                                            <p>Streamlined processes and workflows</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='service-box-four flex-fill'>
                                        <div className='icons-flot'>
                                            <img src="/img/icons/plus-icons.png" alt="plus-icons" />
                                        </div>
                                        <div className='box-inner'>
                                            <h4>Scalability</h4>
                                            <p>Flexible solutions that grow with your business.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='service-box-four flex-fill'>
                                        <div className='icons-flot'>
                                            <img src="/img/icons/plus-icons.png" alt="plus-icons" />
                                        </div>
                                        <div className='box-inner'>
                                            <h4>Enhanced User Experience</h4>
                                            <p>User-friendly interfaces tailored to your team’s needs.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='service-box-four flex-fill'>
                                        <div className='icons-flot'>
                                            <img src="/img/icons/plus-icons.png" alt="plus-icons" />
                                        </div>
                                        <div className='box-inner'>
                                            <h4>Competitive Advantage</h4>
                                            <p>Gain a competitive edge with bespoke solutions</p>
                                        </div>
                                    </div>
                                </div>
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
                                <h3>Eliminate administrative pains and automate sales with Salesforce Sales Cloud</h3>
                                <p>Power up your sales operations with a tailored Sales Cloud implementation. Contact a Salesforce expert today for a free consultation.</p>
                                <ModelBox headerText="Schedule a Free Call" buttonText="Schedule a Free Call" />
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
                                <h2>Sales Cloud has transformed the sales operations of different businesses to go all digital</h2>
                                <p>Explore such businesses to see the effectiveness of Salesforce Sales Cloud with a tailored approach.</p>
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
                                            <h4>World Economic Forum, a global forum, aimed to centralize systems with Sales Cloud. </h4>
                                            <p>Being a global discussion forum, they were using email attachments and spreadsheets to manage data for large programs. Managing data from different aspects becomes time-consuming using different solutions. Salesforce integrated different solutions, including Sales Cloud, into WEF. This implementation led them to track attendees and manage potential memberships.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>30% increase in lead conversion</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>30% increase in lead conversion</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>Grammarly, an AI-based writing application, aimed to increase the conversion rate.</h4>
                                            <p>Grammarly is a popular tool with over 30 million global users. They used to collect, filter, and process inbound leads manually, making the process hectic. The Einstein 1 Marketing of Sales Cloud utilized AI to connect sales with marketing and automated processes to increase the conversion rate by 30%.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>30% increase in lead conversion</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>30% increase in lead conversion</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>The Texas Rangers, an American-based baseball team, want to get a 360° view of operations.</h4>
                                            <p>The Texas Rangers are a world-champion baseball team that wants to eliminate the manual ways of guest service while eliminating data silos from the system. With the Sales Cloud implementation, Texas Ranger can now connect diverse systems to get a unified business view with real-time data insights.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>30% increase in lead conversion</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>30% increase in lead conversion</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>Pirelli, a premium tire company, aims to utilize data to enhance business efficiency.</h4>
                                            <p>Pirelli is a renowned brand with a global presence of approx. 1.8 million orders per day using their dealer platform. They were facing issues establishing connections with dealers and customers to generate more sales. This lets the business implement a B2B2C consulting model with Sales Cloud to capture data insights and perform data-driven sales.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>30% increase in lead conversion</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>30% increase in lead conversion</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>John Lewis Partnership, a popular business in the UK, aimed to utilize data.</h4>
                                            <p>Being a popular and largest employee-owned business in the UK with 34 shops and 329 supermarket stores, they have collected huge amounts of data in different departments but are unable to utilize it. Now, with Sales Cloud implementation, they are able to centralize data across departments to offer an exceptional customer experience.</p>
                                            <ul>
                                                <li><i className="bi bi-plus-lg"></i><span>30% increase in lead conversion</span></li>
                                                <li><i className="bi bi-plus-lg"></i><span>30% increase in lead conversion</span></li>
                                            </ul>
                                            <a href=""><span>Learn More</span></a>

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider-one-inner'>
                                            <h4>Spotify, a streaming giant, wants to supercharge sales with Salesforce Sales Cloud.</h4>
                                            <p>Spotify is a digital music platform with millions of global users. They want to capture customer data so that they can serve ads better. Also, they want to show more personalized content using data analytics to retain users for the long run. All such issues were resolved using the Salesforce Sales Cloud implementation.</p>
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
                                <span>FAQ</span>
                                {/* <h2>FAQ</h2> */}
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-lg-8'>
                            <div className='accordion-one'>
                                <Accordion open={open} toggle={toggle}>
                                    <AccordionItem>
                                        <AccordionHeader targetId="1">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                <h3>How long does a custom implementation take?</h3>
                                                <span className={`icon ${open === '1' ? 'open' : 'closed'}`}>
                                                    {open === '1' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="1">
                                            <p><strong>This is the first item's accordion body.</strong>
                                            You can modify any of this with custom CSS or overriding our default
                                            variables. It's also worth noting that just about any HTML can go
                                            within the <code>.accordion-body</code>, though the transition does
                                            limit overflow.</p>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="2">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                            <h3>How long does a custom implementation take?</h3>
                                                <span className={`icon ${open === '2' ? 'open' : 'closed'}`}>
                                                    {open === '2' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="2">
                                            <strong>This is the second item's accordion body.</strong>
                                            You can modify any of this with custom CSS or overriding our default
                                            variables. It's also worth noting that just about any HTML can go
                                            within the <code>.accordion-body</code>, though the transition does
                                            limit overflow.
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="3">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                            <h3>How long does a custom implementation take?</h3>
                                                <span className={`icon ${open === '3' ? 'open' : 'closed'}`}>
                                                    {open === '3' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="3">
                                            <strong>This is the third item's accordion body.</strong>
                                            You can modify any of this with custom CSS or overriding our default
                                            variables. It's also worth noting that just about any HTML can go
                                            within the <code>.accordion-body</code>, though the transition does
                                            limit overflow.
                                        </AccordionBody>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    );
}

export default Services;
