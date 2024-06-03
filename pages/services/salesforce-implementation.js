import React, { useRef, useState } from 'react';
import ModelBox from '@/components/ModelBox';
import Image from 'next/image';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, } from 'reactstrap';
import Head from 'next/head';
// Import Swiper styles

const SalesforceImplementation = () => {

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
            <title>Sales force Implementation | CRM Force Plus</title>
            </Head>
            <div className='hero-banner-two height-auto'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="hero-content">
                                <h1>Seamless Salesforce Implementation: Trusted Partner, Streamlined Results</h1>
                                <p>CRMForce+ - Your Trusted Partner in Transforming your Business with Salesforce</p>
                                <ModelBox headerText="Get a Free Demo" buttonText="Schedule a Free Call!" />
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

            <section className='bg-wss'>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading-style-two">
                                {/* <span>Features of Salesforce Sales Cloud</span> */}
                                <h2>Reliable and Cost-effective Salesforce Implementation Services</h2>
                                <p>Stop wasting time and money on complex or overpriced Salesforce implementations. CRMforce+ offers a reliable and cost-effective approach, ensuring your CRM solution is tailored to your business needs and budget. Our experienced team will guide you through every step of the process, from initial planning to successful launch.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="row box-icon-box-wraper"
                    >
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/seamless-implementation-icon.png" alt="seamless-implementation-icon" width={64} height={64} />
                                <h3>Proven Methodology</h3>
                                <p>We follow a structured approach for a smooth and efficient implementation process to guaranteed project success.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/proven-expertise-icon.png" alt="proven-expertise-icon" width={64} height={64} />
                                <h3>Certified Experts</h3>
                                <p>Join hands with Salesforce certified experts to get benefit from the knowledge and expertise they are possessing.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/tailored-approach-icon.png" alt="tailored-approach-icon" width={64} height={64} />
                                <h3>Long-Term Support</h3>
                                <p>Our commitment extends beyond Salesforce implementation with ongoing support to ensure continuous success.</p>
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
                                <h2>Effective Salesforce Product Implementation Services</h2>
                                <p>Enhance operational efficiency, improve decision making, and get data-driven success with the implementation of specific salesforce solution. </p>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex align-items-stretch">
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Sales Cloud Implementation</h3>
                                <p>Automate tasks, manage leads effectively, and close more deals with a customized Salesforce Sales Cloud solution.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Service Cloud Implementation</h3>
                                <p>Empower your team to deliver exceptional customer service, resolve issues faster, and build stronger customer loyalty.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Marketing Cloud Implementation</h3>
                                <p>Automate marketing campaigns, personalize customer journeys, and measure results for optimized marketing efforts.</p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Commerce Cloud Implementation</h3>
                                <p>Unify your online store with your CRM, streamline the buying experience, and drive sales growth.</p>
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
                            <Image src="/img/banner/process-work-bg.png" alt="process-work-bg" className='desk' width={1309} height={307} />
                            <Image src="/img/banner/process-work-bg-mob.png" alt="process-work-bg-mob" className='mob' width={211} height={436} />
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-grey p-top-60'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5 align-self-center'>
                            <div className="heading-style-two">
                                <h2>Get the Most Out of Salesforce: Partner with CRMForce+</h2>
                                <p>Experience a seamless and successful Salesforce implementation with proven expertise, and cost-effective approach.</p>
                                <div className='p-t-15'><a className="btn btn-prime" href='#'>Get Started Today!</a></div>
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
                                            <h4>Cost-Effective  <br/>Solutions</h4>
                                            <p>We optimize costs without compromising on quality, delivering the best value for your investment.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='service-box-four flex-fill'>
                                        <div className='icons-flot'>
                                            <Image src="/img/icons/plus-icons.png" alt="plus-icons" width={24} height={24} />
                                        </div>
                                        <div className='box-inner'>
                                            <h4>Customized to <br/> Your Needs</h4>
                                            <p>We don't offer a one-size-fits-all solution. We tailor Salesforce to fit your unique business goals.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='service-box-four flex-fill'>
                                        <div className='icons-flot'>
                                            <Image src="/img/icons/plus-icons.png" alt="plus-icons" width={24} height={24} />
                                        </div>
                                        <div className='box-inner'>
                                            <h4>Streamlined <br/>Implementation Process</h4>
                                            <p>Experience a clear and efficient implementation journey with clear communication and milestones.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='service-box-four flex-fill'>
                                        <div className='icons-flot'>
                                            <Image src="/img/icons/plus-icons.png" alt="plus-icons" width={24} height={24} />
                                        </div>
                                        <div className='box-inner'>
                                            <h4>Ongoing  <br/>Support & Training</h4>
                                            <p>Our commitment goes beyond implementation. We offer ongoing support and training to ensure success.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='service-box-four flex-fill'>
                                        <div className='icons-flot'>
                                            <Image src="/img/icons/plus-icons.png" alt="plus-icons" width={24} height={24} />
                                        </div>
                                        <div className='box-inner'>
                                            <h4>Measurable  <br/>Results & ROI</h4>
                                            <p>Track your progress and maximize your return on investment with our data-driven approach.</p>
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
                                <h3>Ready to Transform Your Business? Start Your Salesforce Journey Today!</h3>
                                <p>Don't wait, start building your Salesforce success story today!</p>
                                <ModelBox headerText="Schedule a Free Call" buttonText="Schedule a Call Now!" />
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
                                                <h3>What is Salesforce implementation?</h3>
                                                <span className={`icon ${open === '1' ? 'open' : 'closed'}`}>
                                                    {open === '1' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="1">
                                            <p>Salesforce implementation is the process of tailoring Salesforce solutions like Sales Cloud, Marketing Cloud, etc. to your specific business needs. CRMForce + can help you navigate this process, from initial planning and data migration to configuration, customization, and user training. Our goal is to ensure a smooth and efficient implementation that maximizes the value of Salesforce for your company.</p>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="2">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                            <h3>How difficult is to implement Salesforce?</h3>
                                                <span className={`icon ${open === '2' ? 'open' : 'closed'}`}>
                                                    {open === '2' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="2">
                                           <p>The difficulty of a Salesforce implementation depends on several factors, such as the complexity of your business needs, the number of Salesforce products you choose to implement, and the amount of data migration involved. However, CRMForce+ can help simplify the process. Our experienced team uses a proven methodology to break down the implementation into manageable steps, ensuring a successful outcome.</p>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="3">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                            <h3>How long does a Salesforce implementation take?</h3>
                                                <span className={`icon ${open === '3' ? 'open' : 'closed'}`}>
                                                    {open === '3' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="3">
                                          <p>The timeframe for a Salesforce implementation can vary depending on the factors mentioned above. Typically, smaller implementations can be completed in a few weeks, while more complex projects may take several months. CRMForce+ will work closely with you to understand your needs and create a realistic timeline for your implementation project.</p>
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

export default SalesforceImplementation;
