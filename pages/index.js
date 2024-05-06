import React, { useState } from 'react';
import ServiceBox from "@/components/ServiceBox";
import Head from "next/head";
import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="hero">
          <div id="hero"></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="hero-content">
                  <h1>Boost Sales & Earn Customers for life with Leading Salesforce Partner</h1>
                  <p>Salesforce CRM: Scale Faster, Grow Better</p>
                  <a href="" className="btn btn-prime">Request a Free Demo</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="m-mines">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="banner-pic-flot">
                  <figure className="main-pic">
                    <img src="/img/banner/home-main-banner.png" className="pc-cenetr" alt="home-main-banner" />
                  </figure>
                  <figure className="main-pi-abso main-pic-1">
                    <img src="/img/section/float-left-1.png" className="pc-cenetr" alt="float-left" />
                  </figure>
                  <figure className="main-pi-abso main-pic-2">
                    <img src="/img/section/float-left-2.png" className="pc-cenetr" alt="float-left" />
                  </figure>
                  <figure className="main-pi-abso main-pic-3">
                    <img src="/img/section/float-left-3.png" className="pc-cenetr" alt="float-left" />
                  </figure>
                  <figure className="main-pi-abso main-pic-4">
                    <img src="/img/section/float-left-4.png" className="pc-cenetr" alt="float-left" />
                  </figure>
                  <figure className="main-pi-abso main-pic-5">
                    <img src="/img/section/float-left-5.png" className="pc-cenetr" alt="float-left" />
                  </figure>
                  <figure className="main-pi-abso main-pic-6">
                    <img src="/img/section/float-left-6.png" className="pc-cenetr" alt="float-left" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="heading-style-one">
                  <span>Our Services</span>
                  <h2>Supercharge your Sales <br />and Customer Service with CRMForce Plus</h2>
                  <p>Get reliable and extensive services to unlock the full potential of your CRM solution with a trusted Salesforce CRM Implementation Partner</p>
                </div>
              </div>
            </div>
            <div className="row">
              {/* <ServiceBox jsonDataUrl="datanew/ne.json" /> */}
              <div className="col-lg-3">
                <div className="service-box-one">
                  <a href="#">
                    <div className="service-box-head">
                      <figure>
                        <img src="/img/icons/icons-1.png" alt="Salesforce Implementation" width={36} height={36} />
                      </figure>
                      <div className="service-box-title">
                        <h3>Salesforce Implementation</h3>
                      </div>
                    </div>
                    <div className="service-box-contant">
                      <p>Join hands with the leading Salesforce implementation partner for a successful and tailored implementation to experience a never-before transformation.</p>
                      <span>Get Started <i className="bi bi-arrow-right-circle-fill"></i></span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="service-box-one">
                  <a href="#">
                    <div className="service-box-head">
                      <figure>
                        <img src="/img/icons/icons-2.png" alt="Salesforce Implementation" width={36} height={36} />
                      </figure>
                      <div className="service-box-title">
                        <h3>Customization & Integration</h3>
                      </div>
                    </div>
                    <div className="service-box-contant">
                      <p>Configure your Salesforce system with a personalized approach to meet the unique requirements of your business. Grow and scale uniformly with ease.</p>
                      <span>Get Started <i className="bi bi-arrow-right-circle-fill"></i></span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="service-box-one">
                  <a href="#">
                    <div className="service-box-head">
                      <figure>
                        <img src="/img/icons/icons-3.png" alt="Salesforce Implementation" width={36} height={36} />
                      </figure>
                      <div className="service-box-title">
                        <h3>Training & Support</h3>
                      </div>
                    </div>
                    <div className="service-box-contant">
                      <p>Empower your team with Salesforce experts to utilize powerful functionalities. Get your system back on track with 24x7 support for maximum growth.</p>
                      <span>Get Started <i className="bi bi-arrow-right-circle-fill"></i></span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="service-box-one">
                  <a href="#">
                    <div className="service-box-head">
                      <figure>
                        <img src="/img/icons/icons-4.png" alt="Salesforce Implementation" width={36} height={36} />
                      </figure>
                      <div className="service-box-title">
                        <h3>Salesforce Optimization</h3>
                      </div>
                    </div>
                    <div className="service-box-contant">
                      <p>Optimize and enhance Salesforce performance to meet business requirements based on changing demands with the reliable Salesforce consulting partner.</p>
                      <span>Get Started <i className="bi bi-arrow-right-circle-fill"></i></span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className='bg-grey'>
         <div className='container'>
         <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="heading-style-one">
                  <span>Featured Products</span>
                  <h2>Dive into the Powerful Salesforce Ecosystem:<br /> Solutions for All Business Needs</h2>
                  <p>Explore different solutions to choose the perfect one <br /> that drives tangible results</p>
                </div>
              </div>
            </div>
         <div className='row justify-content-center'>
            <div className='col-lg-10'>
            <div className='service-tab-style-one'>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={activeTab === '1' ? 'active' : ''}
                  onClick={() => { toggle('1'); }}
                >
                  Sales Cloud
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === '2' ? 'active' : ''}
                  onClick={() => { toggle('2'); }}
                >
                 Service Cloud
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === '3' ? 'active' : ''}
                  onClick={() => { toggle('3'); }}
                >
                  Marketing Cloud
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === '4' ? 'active' : ''}
                  onClick={() => { toggle('4'); }}
                >
                  Commerce Cloud
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === '5' ? 'active' : ''}
                  onClick={() => { toggle('5'); }}
                >
                  View all Product
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <div className='row tabs-design-one'>
                  <div className='col-lg-6 align-self-center'>
                      <div className='tabs-design-one-left'>
                        <span>Sales Cloud</span>
                        <h3>Sell Smarter and Close Deals Faster with Trusted AI</h3>
                        <p>Team up with the world's 1st AI-enabled CRM solution to streamline sales, automate workflows, and win more deals with minimum resources. Get real-time insights, personalize customer interaction, and build long-lasting relationships.</p>
                      </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='tabs-design-one-right'>
                      <div className='tabs-design-one-list'>
                        <i class="bi bi-check-lg"></i> 
                        <p>Focus on potential leads to close more deals</p>
                      </div>
                      <div className='tabs-design-one-list'>
                        <i class="bi bi-check-lg"></i> 
                        <p>Gain a 360-degree view of customer activity</p>
                      </div>
                      <div className='tabs-design-one-list'>
                        <i class="bi bi-check-lg"></i> 
                        <p>Boost collaboration and team productivity</p>
                      </div>
                      <div className='tabs-design-one-list'>
                        <i class="bi bi-check-lg"></i> 
                        <p>Simplify sales pipeline and forecast sales</p>
                      </div>
                      <a href ="/" className='btn btn-full btn-prime'>Get Started</a>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tabId="2">
              <div className='row tabs-design-one'>
                  <div className='col-lg-6 align-self-center'>
                      <div className='tabs-design-one-left'>
                        <span>Sales Cloud</span>
                        <h3>Sell Smarter and Close Deals Faster with Trusted AI</h3>
                        <p>Team up with the world's 1st AI-enabled CRM solution to streamline sales, automate workflows, and win more deals with minimum resources. Get real-time insights, personalize customer interaction, and build long-lasting relationships.</p>
                      </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='tabs-design-one-right'>
                      <div className='tabs-design-one-list'>
                        <i class="bi bi-check-lg"></i> 
                        <p>Focus on potential leads to close more deals</p>
                      </div>
                      <div className='tabs-design-one-list'>
                        <i class="bi bi-check-lg"></i> 
                        <p>Gain a 360-degree view of customer activity</p>
                      </div>
                      <div className='tabs-design-one-list'>
                        <i class="bi bi-check-lg"></i> 
                        <p>Boost collaboration and team productivity</p>
                      </div>
                      <div className='tabs-design-one-list'>
                        <i class="bi bi-check-lg"></i> 
                        <p>Simplify sales pipeline and forecast sales</p>
                      </div>
                      <a href ="/" className='btn btn-full btn-prime'>Get Started</a>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tabId="3">
              <div className='row tabs-design-one'>
                  <div className='col-lg-6 align-self-center'>
                      <div className='tabs-design-one-left'>
                        <span>Sales Cloud</span>
                        <h3>Sell Smarter and Close Deals Faster with Trusted AI</h3>
                        <p>Team up with the world's 1st AI-enabled CRM solution to streamline sales, automate workflows, and win more deals with minimum resources. Get real-time insights, personalize customer interaction, and build long-lasting relationships.</p>
                      </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='tabs-design-one-right'>
                      <div className='tabs-design-one-list'>
                        <i class="bi bi-check-lg"></i> 
                        <p>Focus on potential leads to close more deals</p>
                      </div>
                      <div className='tabs-design-one-list'>
                        <i class="bi bi-check-lg"></i> 
                        <p>Gain a 360-degree view of customer activity</p>
                      </div>
                      <div className='tabs-design-one-list'>
                        <i class="bi bi-check-lg"></i> 
                        <p>Boost collaboration and team productivity</p>
                      </div>
                      <div className='tabs-design-one-list'>
                        <i class="bi bi-check-lg"></i> 
                        <p>Simplify sales pipeline and forecast sales</p>
                      </div>
                      <a href ="/" className='btn btn-full btn-prime'>Get Started</a>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tabId="4">
              <div className='row tabs-design-one'>
                  <div className='col-lg-6 align-self-center'>
                      <div className='tabs-design-one-left'>
                        <span>Sales Cloud</span>
                        <h3>Sell Smarter and Close Deals Faster with Trusted AI</h3>
                        <p>Team up with the world's 1st AI-enabled CRM solution to streamline sales, automate workflows, and win more deals with minimum resources. Get real-time insights, personalize customer interaction, and build long-lasting relationships.</p>
                      </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='tabs-design-one-right'>
                      <div className='tabs-design-one-list'>
                        <i class="bi bi-check-lg"></i> 
                        <p>Focus on potential leads to close more deals</p>
                      </div>
                      <div className='tabs-design-one-list'>
                        <i class="bi bi-check-lg"></i> 
                        <p>Gain a 360-degree view of customer activity</p>
                      </div>
                      <div className='tabs-design-one-list'>
                        <i class="bi bi-check-lg"></i> 
                        <p>Boost collaboration and team productivity</p>
                      </div>
                      <div className='tabs-design-one-list'>
                        <i class="bi bi-check-lg"></i> 
                        <p>Simplify sales pipeline and forecast sales</p>
                      </div>
                      <a href ="/" className='btn btn-full btn-prime'>Get Started</a>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tabId="5">
              <div className='row tabs-design-one'>
                  <div className='col-lg-6 align-self-center'>
                      <div className='tabs-design-one-left'>
                        <span>Sales Cloud</span>
                        <h3>Sell Smarter and Close Deals Faster with Trusted AI</h3>
                        <p>Team up with the world's 1st AI-enabled CRM solution to streamline sales, automate workflows, and win more deals with minimum resources. Get real-time insights, personalize customer interaction, and build long-lasting relationships.</p>
                      </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='tabs-design-one-right'>
                      <div className='tabs-design-one-list'>
                        <i class="bi bi-check-lg"></i> 
                        <p>Focus on potential leads to close more deals</p>
                      </div>
                      <div className='tabs-design-one-list'>
                        <i class="bi bi-check-lg"></i> 
                        <p>Gain a 360-degree view of customer activity</p>
                      </div>
                      <div className='tabs-design-one-list'>
                        <i class="bi bi-check-lg"></i> 
                        <p>Boost collaboration and team productivity</p>
                      </div>
                      <div className='tabs-design-one-list'>
                        <i class="bi bi-check-lg"></i> 
                        <p>Simplify sales pipeline and forecast sales</p>
                      </div>
                      <a href ="/" className='btn btn-full btn-prime'>Get Started</a>
                    </div>
                  </div>
                </div>
              </TabPane>
            </TabContent>
          </div>
            </div>
          </div>
         </div>
        </section>

        <section>
          
        </section>


      </main>
    </>
  );
}
