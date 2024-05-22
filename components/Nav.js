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
          <li><Link className="nav-link scrollto active" href="/services/">Services</Link></li>
          <li><Link className="nav-link scrollto" href="/solutions/">Solutions</Link></li>
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

          <li><a className="getstarted-outline" href="/"><div className='call-btn'><i className="bi bi-telephone-fill"></i><div className='call-r'>Give us a call <span>9876 543 210</span></div></div></a></li>
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
