import React, { useState } from 'react';
import ModelBox from '@/components/ModelBox';
import Image from 'next/image';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, } from 'reactstrap';
import Head from 'next/head';


const TrainingAndSupport = () => {

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
            <title>Training And Support | CRM Force Plus</title>
            </Head>
            <div className='hero-banner-two height-auto'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="hero-content">
                                <h1>Empower Your Team: Get Comprehensive Salesforce <span>Training & Support </span></h1>
                                <p>Ensure users get the most out of the platform with training programs and ongoing support for maximum utilization of Salesforce. </p>
                                <ModelBox headerText="Get a Free Demo" buttonText="Schedule a Free Demo! " />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className="elementor-background-default">
                        <Image src="/img/banner/Training-Support-banner.png" className='bg-defult' alt="Training-Support-banner" width={1920} height={314} priority />
                    </div>
                </div>
            </div>

            <section className='bg-wss'>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading-style-two">
                                {/* <span>Features of Salesforce Sales Cloud</span> */}
                                <h2>Unparalleled Training & Support: Maximize Your Salesforce Investment </h2>
                                <p>Get the most out of your Salesforce investment with CRMForce Plus's comprehensive training and support services. We offer a range of programs designed to equip your users with the skills and knowledge to leverage Salesforce effectively. </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="row box-icon-box-wraper"
                    >
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/Tailored-Training-Programs-icon.png" alt="Tailored-Training-Programs-icon" width={65} height={65} />
                                <h3>Tailored Training Programs </h3>
                                <p>We create training programs customized to your specific needs and user roles, ensuring everyone gets the most out of Salesforce. </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/Experienced-Trainers-Ongoing-icon.png" alt="Experienced-Trainers-Ongoing-icon" width={65} height={65} />
                                <h3>Experienced Trainers & Ongoing Support </h3>
                                <p>Benefit from our team of certified Salesforce experts who provide high-quality training and ongoing support to address your evolving needs. </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='box-icon-box'>
                                <Image src="/img/icons/User-Adoption-icon.png" alt="User-Adoption-icon" width={65} height={65} />
                                <h3>User Adoption & Proficiency Focus </h3>
                                <p>Our focus is on driving user adoption and ensuring your team reaches its full potential with Salesforce. </p>
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
                                <h2>Salesforce Training and Support </h2>
                                <p>We equip your team with the knowledge and skills to master the platform, maximizing user adoption and driving success. </p>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex align-items-stretch">
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Sales Cloud Training & Support Services </h3>
                                <p>Empower your sales team with the best training and support to maximize lead generation and close more deals. </p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Service Cloud Training & Support Services </h3>
                                <p>Deliver exceptional customer service with the best training and ongoing support for your Service Cloud solution. </p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill bg-gradiant">
                                <h3>Marketing Cloud Training & Support Services </h3>
                                <p>Master the art of marketing automation with the best training and support for Marketing Cloud, driving personalized customer journeys. </p>
                            </div>
                        </div>
                        <div className={`col-lg-3 d-flex ${!showAll ? '' : 'd-none'} animated`}>
                            <div className="service-box-three flex-fill">
                                <h3>Commerce Cloud Training & Support Services </h3>
                                <p>Elevate your online store with the best training and support for Commerce Cloud, ensuring a seamless buying experience. </p>
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
            </section> */}

            <section className='bg-grey p-top-60'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5 align-self-center'>
                            <div className="heading-style-two">
                                <h2>Why Choose CRMForce+ for Salesforce Training & Support? </h2>
                                <p>CRMForce+ goes beyond generic training modules. We offer a personalized approach, ensuring your team receives the knowledge and skills they need to thrive on the platform. </p>
                                <div className='p-t-15'><a className="btn btn-prime" href='/contact-us/'>Schedule a Free Demo!</a></div>
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
                                            <h4>Customized <br/>Training Programs </h4>
                                            <p>We don't offer a one-size-fits-all approach. Get training programs tailored to your specific needs and user roles. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='service-box-four flex-fill'>
                                        <div className='icons-flot'>
                                           <Image src="/img/icons/plus-icons.png" alt="plus-icons" width={24} height={24} />
                                        </div>
                                        <div className='box-inner'>
                                            <h4>Certified <br/>Salesforce Trainers </h4>
                                            <p>Benefit from our team of certified professionals who deliver high-quality, in-depth Salesforce training.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='service-box-four flex-fill'>
                                        <div className='icons-flot'>
                                           <Image src="/img/icons/plus-icons.png" alt="plus-icons" width={24} height={24} />
                                        </div>
                                        <div className='box-inner'>
                                            <h4>Focus on User <br/>Adoption & Proficiency </h4>
                                            <p>Our goal is to drive user adoption and ensure your team becomes proficient in using Salesforce effectively.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='service-box-four flex-fill'>
                                        <div className='icons-flot'>
                                           <Image src="/img/icons/plus-icons.png" alt="plus-icons" width={24} height={24} />
                                        </div>
                                        <div className='box-inner'>
                                            <h4>Flexible <br/>Learning Options </h4>
                                            <p>We offer a variety of learning options, including instructor-led training, online modules, and on-demand resources, to fit your team's preferences. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='service-box-four flex-fill'>
                                        <div className='icons-flot'>
                                           <Image src="/img/icons/plus-icons.png" alt="plus-icons" width={24} height={24} />
                                        </div>
                                        <div className='box-inner'>
                                            <h4>Ongoing Support & <br/>Continuous Improvement </h4>
                                            <p>Our commitment extends beyond training. We provide ongoing support to address challenges and ensure your team stays up-to-date. </p>
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
                            <Image src="/img/icons/Training-Support-cta.png" alt="Training-Support-cta.png" width={346} height={247} priority />
                        </div>
                        <div className='col-lg-7 align-self-center'>
                            <div className='cta-content'>
                                <h3>Invest in Your Team's Success</h3>
                                <p>Get Started with CRMForce+ Training & Support Today! </p>
                                <ModelBox headerText="Schedule a Free Call" buttonText="Contact Salesforce Experts Now!" />
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
                                                <h3>What is the best way to learn Salesforce?</h3>
                                                <span className={`icon ${open === '1' ? 'open' : 'closed'}`}>
                                                    {open === '1' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="1">
                                            <p>The best way to learn Salesforce depends on your learning style and specific needs. However, a combination of structured training and ongoing support is generally considered ideal. CRMForce+ offers a variety of learning options, including: </p>
                                            <ul>
                                                <li><strong>Instructor-led training: </strong> Learn directly from certified Salesforce experts through interactive workshops and courses tailored to your needs. </li>
                                                <li><strong>Online modules:</strong> Access self-paced online modules that cover different Salesforce features and functionalities. </li>
                                                <li><strong>On-demand resources:</strong> Benefit from a library of helpful articles, tutorials, and videos to answer specific questions and deepen your knowledge. </li>
                                                <li><strong>Ongoing support:</strong> Our team is available to answer your questions, address challenges, and provide guidance as you navigate the platform. </li>
                                            </ul>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="2">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                            <h3>What does Salesforce Support do?</h3>
                                                <span className={`icon ${open === '2' ? 'open' : 'closed'}`}>
                                                    {open === '2' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="2">
                                           <p>Salesforce Support offers a range of resources and services designed to help you get the most out of your CRM solution. This includes: </p>
                                           <ul>
                                            <li><strong>Answering user questions</strong></li>
                                           </ul>
                                           <p>Get help with specific features, troubleshooting technical issues, and finding solutions to your challenges. </p>
                                           <ul>
                                            <li><strong>Providing guidance and best practices</strong></li>
                                           </ul>
                                           <p>Benefit from the expertise of Salesforce professionals who can guide you on best practices for using the platform effectively. </p>
                                           <ul><li><strong>Offering ongoing updates and resources</strong></li></ul>
                                           <p>Stay informed about new features, functionality updates, and access valuable resources to enhance your Salesforce experience. </p>
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionHeader targetId="3">
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                            <h3>What is the support process in Salesforce?</h3>
                                                <span className={`icon ${open === '3' ? 'open' : 'closed'}`}>
                                                    {open === '3' ? '-' : '+'}
                                                </span>
                                            </div>
                                        </AccordionHeader>
                                        <AccordionBody accordionId="3">
                                         <p>Salesforce offers various support options depending on your plan and needs. CRMForce+ can help you navigate the support process, including: </p>
                                         <ul>
                                            <li><strong>Contacting Salesforce Support:</strong> We can guide you on how to submit support tickets, access online knowledge bases, and connect with the appropriate Salesforce support team. </li>
                                            <li><strong>Managing your support needs:</strong> We can help prioritize your issues, track resolution progress, and ensure your concerns are addressed effectively. </li>
                                            <li><strong>Supplementing official support:</strong> While Salesforce offers valuable support, CRMForce+ provides an additional layer of personalized guidance and expertise to ensure your success. </li>
                                         </ul>
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

export default TrainingAndSupport;
