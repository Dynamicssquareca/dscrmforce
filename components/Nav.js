import React, { useState } from 'react';

import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';
import DropdownComponent from '@/components/DropdownComponent';
import ModelBoxGetstatrd from './ModelBoxGetstatrd';
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggles = () => setIsOpen(!isOpen);
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  // const toggles = () => setDropdownOpen(!dropdownOpen);

  const servicesItems = [
    { label: 'Salesforce Implementation', href: '/services/salesforce-implementation/' },
    { label: 'Customization & Integration', href: '/services/customization-and-integration/' },
    { label: 'Training & Support', href: '/services/training-and-support/' },
    { label: 'Salesforce Optimization', href: '/services/salesforce-optimization/' },
  ];

  const solutionsItems = [
    { label: 'Small Business', href: '/solutions/small-business/' },
    { label: 'Sales Cloud', href: '/solutions/sales-cloud/' },
    { label: 'Service Cloud', href: '/solutions/service-cloud/' },
    { label: 'Marketing Cloud', href: '/solutions/marketing-cloud/' },
    { label: 'Commerce Cloud', href: '/solutions/commerce-cloud/' },
  ];

  const resourceItems = [
    { label: 'About Us', href: '/about-us/' },
    { label: 'Blogs', href: '/blogs/' },
    { label: 'Why Us', href: '/why-us/' },
    { label: 'Partners', href: '/partner/' },
    { label: 'Careers', href: '/career/' },
  ];

  return (

    <>
      <nav id="navbar" className="navbar">
        <ul>
          <li className="dropdown dropdown-mega"><a href="#"><span>Services</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li>
                <a href="/services/salesforce-implementation/">
                  <p>Salesforce Implementation</p>
                  <span>Experienced team, proven methodology, successful implementations</span>
                </a>
                <a href="/services/customization-and-integration/">
                  <p>Customization & Integration</p>
                  <span>Deep Salesforce expertise, tailored solutions, flawless integrations</span>
                </a>
                <a href="/services/training-and-support/">
                  <p>Training & Support</p>
                  <span>Expert training & ongoing support to maximize Salesforce adoption</span>
                </a>
                <a href="/services/salesforce-optimization/">
                  <p>Salesforce Optimization</p>
                  <span>Optimize your Salesforce for maximum efficiency and ROI</span>
                </a>
              </li>

            </ul>
          </li>
          <li className="dropdown dropdown-mega"><a href="#"><span>Solutions</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li>
                <a href="/solutions/small-business/">
                  <p>Small Business</p>
                  <span>Simple solutions to supercharge your small business</span>
                </a>
                <a href="/solutions/sales-cloud/">
                  <p>Sales Cloud</p>
                  <span>The #1 CRM for driving sales pipeline & revenue growth</span>
                </a>
                <a href="/solutions/service-cloud/">
                  <p>Service Cloud</p>
                  <span>Deliver exceptional customer service & build stronger relationships</span>
                </a>
                <a href="/solutions/marketing-cloud/">
                  <p>Marketing Cloud</p>
                  <span>Automate marketing campaigns & personalize customer journeys</span>
                </a>
                <a href="/solutions/commerce-cloud/">
                  <p>Commerce Cloud</p>
                  <span>Power your online store & deliver seamless omnichannel experiences</span>
                </a>
              </li>

            </ul>
          </li>
          {/* <li><Link className="nav-link scrollto" href="/services/">Services</Link></li> */}
          {/* <li><Link className="nav-link scrollto" href="/solutions/">Solutions</Link></li> */}
          {/* <li><a className="nav-link scrollto" href="/">Industries</a></li> */}
          {/* <li><a className="nav-link scrollto" href="/">Company</a></li> */}
          {/* <li className="dropdown"><a href="#"><span>Resources</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="/about-us/">About Us</a></li>
              <a href="/why-us/">Why Us</a>
              <a href="/partner/">Partners</a>
              <a href="/career/">Careers</a>
            </ul>
          </li> */}
          <li><a className="nav-link scrollto" href="/about-us/">About Us</a></li>
          <li><a className="nav-link scrollto" href="/contact-us/">Contact Us</a></li>
          {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>

          <li className="dropdown megamenu"><a href="#"><span>Mega Menu</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li>
                <a href="#">Column 1 link 1</a>
                <a href="#">Column 1 link 2</a>
                <a href="#">Column 1 link 3</a>
              </li>
              <li>
                <a href="#">Column 2 link 1</a>
                <a href="#">Column 2 link 2</a>
                <a href="#">Column 3 link 3</a>
              </li>
              <li>
                <a href="#">Column 3 link 1</a>
                <a href="#">Column 3 link 2</a>
                <a href="#">Column 3 link 3</a>
              </li>
              <li>
                <a href="#">Column 4 link 1</a>
                <a href="#">Column 4 link 2</a>
                <a href="#">Column 4 link 3</a>
              </li>
            </ul>
          </li> */}

          <li><a className="getstarted-outline" href="tel:+442035141057"><div className='call-btn'><svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
          >
            <path d="M19.95 21c-2.083 0-4.142-.454-6.175-1.363-2.033-.908-3.883-2.195-5.55-3.862-1.667-1.667-2.954-3.517-3.862-5.55C3.454 8.192 3 6.133 3 4.05c0-.3.1-.55.3-.75.2-.2.45-.3.75-.3H8.1a.93.93 0 0 1 .625.237.914.914 0 0 1 .325.563l.65 3.5c.033.267.025.492-.025.675-.05.183-.142.342-.275.475L6.975 10.9c.333.617.73 1.213 1.188 1.787.458.575.962 1.13 1.512 1.663.517.517 1.058.996 1.625 1.438.567.441 1.167.845 1.8 1.212l2.35-2.35a1.4 1.4 0 0 1 .588-.338 1.61 1.61 0 0 1 .712-.062l3.45.7c.233.067.425.188.575.363A.88.88 0 0 1 21 15.9v4.05c0 .3-.1.55-.3.75-.2.2-.45.3-.75.3z" fill="#423F3F" />
          </svg><div className='call-r'>Give us a call <span>203 514 1057</span></div></div></a></li>
          <li><ModelBoxGetstatrd /></li>
          {/* <a className="getstarted scrollto" href="/">Get Started</a> */}
        </ul>


        <i className="bi bi-list mobile-nav-toggle" onClick={toggles}></i>
        <div className='navbar-mobile'>
          <Offcanvas isOpen={isOpen} toggle={toggles} className='navbar-mobile'>
            <OffcanvasHeader toggle={toggles}>
              <div className='mobile-logo'>
                <a href="/"><img src="/crmforceplus-logo.png" alt="/crmforceplus-logo" /></a>
              </div>
            </OffcanvasHeader>
            <OffcanvasBody>

              <ul>

                <DropdownComponent id="servicesDropdown" label="Services" items={servicesItems} />
                <DropdownComponent id="solutionsDropdown" label="Solutions" items={solutionsItems} />
                {/* <DropdownComponent label="Resources" items={resourceItems} /> */}
                <li><a className="nav-link scrollto" href="/about-us/">About US</a></li>
                {/* <Dropdown nav isOpen={dropdownOpen} toggle={toggles}>
                  <DropdownToggle nav caret>
                    Resources
                  </DropdownToggle>
                  <DropdownMenu>
                    <ul>
                      <li><a href="/about-us/">About Us</a></li>
                      <a href="/why-us/">Why Us</a>
                      <a href="/partner/">Partners</a>
                      <a href="/career/">Careers</a>
                    </ul>
                  </DropdownMenu>
                </Dropdown> */}

                {/* <li className="dropdown"><a href="#"><span>Resources</span> <i className="bi bi-chevron-down"></i></a>
                  <ul>
                    <li><a href="/about-us/">About Us</a></li>
                    <a href="/why-us/">Why Us</a>
                    <a href="/partner/">Partners</a>
                    <a href="/career/">Careers</a>
                  </ul>
                  
                </li> */}
                <li><a className="nav-link scrollto" href="/contact-us/">Contact Us</a></li>


                {/* <li><a className="getstarted-outline" href="/"><div className='call-btn'><i className="bi bi-telephone-fill"></i><div className='call-r'>Give us a call <span>9876 543 210</span></div></div></a></li>
                <li><a className="getstarted scrollto" href="/">Get Started</a></li> */}
              </ul>

            </OffcanvasBody>
          </Offcanvas>
        </div>
      </nav>


    </>
  );
}

export default Nav;
