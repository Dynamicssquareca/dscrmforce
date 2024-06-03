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



const CustomizationAndIntegration = () => {

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
                <title>Customization And Integration | CRM Force Plus</title>
            </Head>
            <div className='hero-banner-two height-auto'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="hero-content">
                                <h1>Extend & Enhance: Optimize Your Salesforce with  <span>CRMForce+</span></h1>
                                <p>Extend Salesforce functionality and connect it with other systems for a truly integrated and optimized business solution.</p>
                                <ModelBox headerText="Get a Free Demo" buttonText="Schedule a Free Call!" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className="elementor-background-default">
                        <Image src="/img/banner/customization-and-integration-banner.png" className='bg-defult' alt="customization-and-integration-banner" width={1920} height={314} priority />
                    </div>
                </div>
            </div>

            <section className='bg-wss'>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading-style-two">
                                {/* <span>Features of Salesforce Sales Cloud</span> */}
                                <h2>Supercharge Your Salesforce: Customization & Integration Expertise at CRMForce+</h2>
                                <p>Unlock the full potential of Salesforce and transform your business processes with CRMForce Plus's expert customization and integration services. We go beyond the out-of-the-box solution to tailor Salesforce to your specific needs, seamlessly connect it with your existing systems, and create a unified platform that drives efficiency and growth.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="row box-icon-box-wraper"
                    >
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                            <Image src="/img/icons/proven-expertise-icon.png" alt="proven-expertise-icon" width={65} height={65} />
                                <h3>Deep Salesforce Expertise</h3>
                                <p>Our certified consultants understand the intricacies of Salesforce, ensuring optimal customization and integration solutions.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                            <Image src="/img/icons/Custom-Fit-Approach-icon.png" alt="Custom-Fit-Approach-icon" width={65} height={65} />
                                <h3>Custom-Fit Approach</h3>
                                <p>We don't believe in one-size-fits-all. We work closely with you to understand your unique needs and craft a customized solution.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/Seamless-Integrations-icon.png" alt="Seamless-Integrations-icon" width={65} height={65} />
                                <h3>Seamless Integrations</h3>
                                <p>Eliminate data silos and streamline workflows by integrating Salesforce with your existing CRM, marketing automation, or ERP systems.</p>
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
                                <h2>Salesforce Customization and Integration Services</h2>
                                <p>CRMForce+ offers comprehensive customization and integration services to tailor your CRM solution and seamlessly connect it with your existing business systems.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex align-items-stretch">
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Sales Cloud Customization & Integration Services</h3>
                                <p>Optimize your sales pipeline and connect seamlessly with other systems for the best salesforce experience.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Service Cloud Customization & Integration Services</h3>
                                <p>Deliver exceptional customer service with a custom-built Service Cloud and flawless integrations.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Marketing Cloud Customization & Integration Services</h3>
                                <p>Personalize customer journeys and automate campaigns with the best Marketing Cloud customization and integration services.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Commerce Cloud Customization & Integration Services</h3>
                                <p>Unify your online store and streamline sales with the best Commerce Cloud customization and integration expertise.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

         

            <section className='bg-grey p-top-60'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5 align-self-center'>
                            <div className="heading-style-two">
                                <h2>Transform your Business: Choose CRMForce+ for Salesforce Customization & Integration</h2>
                                <p>We offer more than just technical expertise; we bring a strategic approach, in-depth industry knowledge, and dedication to your success. </p>
                                <div className='p-t-15'><a className="btn btn-prime" href='#'>Upgrade your Salesforce Now!</a></div>
                            </div>
                        </div>
                        <div className='col-lg-7'>
                            <div className='row'>
                                <div className='col-lg-6 d-flex'>
                                    <div className='service-box-four flex-fill'>
                                        <div className='icons-flot'>
                                            <Image src="/img/icons/plus-icons.png" alt="plus-icons" width={24} height={24} />
                                        </div>
                                        <div className='box-inner'>
                                            <h4>Deep Salesforce <br/>Expertise </h4>
                                            <p>Our team is highly skilled in Salesforce, ensuring the best possible customization and integrations for your specific needs.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='service-box-four flex-fill'>
                                        <div className='icons-flot'>
                                            <Image src="/img/icons/plus-icons.png" alt="plus-icons" width={24} height={24} />
                                        </div>
                                        <div className='box-inner'>
                                            <h4>Custom-Tailored <br/>Solutions</h4>
                                            <p>We take the time to understand your unique business processes and build a solution that perfectly aligns with them.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='service-box-four flex-fill'>
                                        <div className='icons-flot'>
                                            <Image src="/img/icons/plus-icons.png" alt="plus-icons" width={24} height={24} />
                                        </div>
                                        <div className='box-inner'>
                                            <h4>Seamless <br/>Integrations</h4>
                                            <p>Eliminate data silos and streamline workflows by seamlessly connecting Salesforce with your existing systems.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='service-box-four flex-fill'>
                                        <div className='icons-flot'>
                                            <Image src="/img/icons/plus-icons.png" alt="plus-icons" width={24} height={24} />
                                        </div>
                                        <div className='box-inner'>
                                            <h4>Strategic <br/>Approach</h4>
                                            <p>We go beyond the immediate project, considering future needs and ensuring your solution scales with your business.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='service-box-four flex-fill'>
                                        <div className='icons-flot'>
                                        <Image src="/img/icons/plus-icons.png" alt="plus-icons" width={24} height={24} />
                                        </div>
                                        <div className='box-inner'>
                                            <h4>Proven <br/>Track Record</h4>
                                            <p>Benefit from our experience and expertise, with a focus on delivering tangible results, enhanced revenue, and more ROI.</p>
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
                            <Image src="/img/icons/custmization-integration-cta.png" alt="custmization-integration-cta.png" width={346} height={247} priority />
                        </div>
                        <div className='col-lg-7 align-self-center'>
                            <div className='cta-content'>
                                <h3>Don't Just Customize, Optimize! </h3>
                                <p>Get a Free Consultation for Your Salesforce Customization & Integration Needs.</p>
                                <ModelBox headerText="Schedule a Free Call" buttonText="Schedule a Free Call" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <section>
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
            </section> */}



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
                                                <h3>Is Salesforce CRM Customizable?</h3>
                                                <span className={`icon ${open === '1' ? 'open' : 'closed'}`}>
                                                    {open === '1' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="1">
                                            <p>Absolutely! Salesforce is known for its extensive customization capabilities. CRMForce+ can help you leverage this power to tailor your CRM solution to your specific business needs. We can customize objects, fields, workflows, reports, dashboards, and even the user interface to perfectly match your processes and workflows. This ensures your team has a user-friendly experience that maximizes efficiency and productivity.</p>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="2">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                            <h3>What are the benefits of Salesforce Customization?</h3>
                                                <span className={`icon ${open === '2' ? 'open' : 'closed'}`}>
                                                    {open === '2' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="2">
                                           <p>Salesforce customization offers a wide range of benefits, including:</p>
                                           <ul>
                                            <li><strong>Improved User Adoption:</strong> A customized Salesforce solution aligns with your existing workflows, making it easier for users to adopt and leverage the platform's capabilities.</li>
                                            <li><strong>Enhanced Efficiency:</strong> Streamlined processes and automated tasks through customization save time and resources, allowing your team to focus on more strategic initiatives.</li>
                                            <li><strong>Increased Sales & Revenue:</strong> Tailored functionalities can boost your sales pipeline management, lead nurturing, and overall sales effectiveness.</li>
                                           </ul>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="3">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                            <h3>What are Salesforce Integration Services?</h3>
                                                <span className={`icon ${open === '3' ? 'open' : 'closed'}`}>
                                                    {open === '3' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="3">
                                           <p>Salesforce integration services involve connecting your CRM with other essential business systems. CRMForce+ offers expertise in integrating Salesforce with various applications, including marketing automation platforms, accounting software, ERP systems, and more. This eliminates data silos, ensures seamless data flow, and creates a unified business ecosystem for improved efficiency and collaboration.</p>
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

export default CustomizationAndIntegration;
