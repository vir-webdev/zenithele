import React, { useState } from "react";
import { data } from "../../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../../photos/victory_logo.jpg';
const Navbar = () => {
  const [show, setShow] = useState(false);
  
  return (
    <navbar>
     <img src={logo} alt="" />
     <>
      <nav>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
          <button className="menuBtn">OUR MENU</button>
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
                <GiHamburgerMenu/>
        </div>
      </nav>
    </>
    </navbar>
  );
};

export default Navbar;