import React, { useState } from 'react';
import Link from 'next/link';
import {
  Button, Offcanvas, OffcanvasHeader, OffcanvasBody, Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggles = () => setDropdownOpen(!dropdownOpen);

  return (

    <>
      <nav id="navbar" className="navbar">
        <ul>
          <li className="dropdown dropdown-mega"><a href="/services/"><span>Services</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li>
                  <a href="/about-us/">
                    <p>Salesforce Implementation</p>
                    <span>Join hands with the leading Salesforce implementation partner for</span>
                  </a>
                  <a href="/">
                    <p>Salesforce Implementation</p>
                    <span>Join hands with the leading Salesforce implementation partner for</span>
                  </a>
                  <a href="/about-us/">
                    <p>Salesforce Implementation</p>
                    <span>Join hands with the leading Salesforce implementation partner for</span>
                  </a>
                  <a href="/about-us/">
                    <p>Salesforce Implementation</p>
                    <span>Join hands with the leading Salesforce implementation partner for</span>
                  </a>
              </li>

            </ul>
          </li>
          <li className="dropdown dropdown-mega"><a href="/solutions/"><span>Solutions</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li>
                  <a href="/about-us/">
                    <p>Salesforce Implementation</p>
                    <span>Join hands with the leading Salesforce implementation partner for</span>
                  </a>
                  <a href="/">
                    <p>Salesforce Implementation</p>
                    <span>Join hands with the leading Salesforce implementation partner for</span>
                  </a>
                  <a href="/about-us/">
                    <p>Salesforce Implementation</p>
                    <span>Join hands with the leading Salesforce implementation partner for</span>
                  </a>
                  <a href="/about-us/">
                    <p>Salesforce Implementation</p>
                    <span>Join hands with the leading Salesforce implementation partner for</span>
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
          <li><Link className="nav-link scrollto" href="/about-us/">About Us</Link></li>
          <li><Link className="nav-link scrollto" href="/contact-us/">Contact Us</Link></li>
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

          <li><a className="getstarted-outline" href="/"><div className='call-btn'><svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
          >
            <path d="M19.95 21c-2.083 0-4.142-.454-6.175-1.363-2.033-.908-3.883-2.195-5.55-3.862-1.667-1.667-2.954-3.517-3.862-5.55C3.454 8.192 3 6.133 3 4.05c0-.3.1-.55.3-.75.2-.2.45-.3.75-.3H8.1a.93.93 0 0 1 .625.237.914.914 0 0 1 .325.563l.65 3.5c.033.267.025.492-.025.675-.05.183-.142.342-.275.475L6.975 10.9c.333.617.73 1.213 1.188 1.787.458.575.962 1.13 1.512 1.663.517.517 1.058.996 1.625 1.438.567.441 1.167.845 1.8 1.212l2.35-2.35a1.4 1.4 0 0 1 .588-.338 1.61 1.61 0 0 1 .712-.062l3.45.7c.233.067.425.188.575.363A.88.88 0 0 1 21 15.9v4.05c0 .3-.1.55-.3.75-.2.2-.45.3-.75.3z" fill="#423F3F" />
          </svg><div className='call-r'>Give us a call <span>9876 543 210</span></div></div></a></li>
          <li><a className="getstarted scrollto" href="/">Get Started</a></li>
        </ul>


        <i className="bi bi-list mobile-nav-toggle" onClick={toggle}></i>
        <div className='navbar-mobile'>
          <Offcanvas isOpen={isOpen} toggle={toggle} className='navbar-mobile'>
            <OffcanvasHeader toggle={toggle}></OffcanvasHeader>
            <OffcanvasBody>
              <ul>
                <li><Link className="nav-link scrollto active" href="/services/">Services</Link></li>
                <li><Link className="nav-link scrollto" href="/solutions/">Solutions</Link></li>
                <li><Link className="nav-link scrollto" href="/about-us/">About US</Link></li>
                {/* <li><a className="nav-link scrollto" href="/">Industries</a></li>
                <li><a className="nav-link scrollto" href="/">Company</a></li> */}

                {/* <Dropdown nav isOpen={dropdownOpen} toggle={toggles}>
                    <DropdownToggle nav caret>
                      Resources
                    </DropdownToggle>
                    <DropdownMenu>
                      <ul>
                        <li><Link href="/about-us/">About Us</Link></li>
                        <Link href="/why-us/">Why Us</Link>
                        <Link href="/partner/">Partners</Link>
                        <Linkhref="/career/">Careers</Link>
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
                <li><Link className="nav-link scrollto" href="/contact-us/">Contact Us</Link></li>


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
