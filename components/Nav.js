import React from 'react';

const Nav = () => {
    return (
        <>
            <nav id="navbar" className="navbar">
                <ul>
                    <li><a className="nav-link scrollto active" href="/">Services</a></li>
                    <li><a className="nav-link scrollto" href="/">Solutions</a></li>
                    <li><a className="nav-link scrollto" href="/">Industries</a></li>
                    <li><a className="nav-link scrollto" href="/">Company</a></li>
                    <li><a className="nav-link scrollto" href="/">Resources</a></li>
                    <li><a className="nav-link scrollto" href="/">Contact</a></li>
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
                <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
        </>
    );
}

export default Nav;
