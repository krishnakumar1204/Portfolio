import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>

      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => (
  <>
    <h2>Krishna.</h2>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#home">
        Home
      </a>
      <a onClick={() => setMenuOpen(false)} href="#about">
        About
      </a>
      <a onClick={() => setMenuOpen(false)} href="#projects">
        Projects
      </a>
      <a onClick={() => setMenuOpen(false)} href="#timeline">
        Education
      </a>
      {/* <a onClick={() => setMenuOpen(false)} href="#services">
        Services
      </a> */}
      {/* <a onClick={() => setMenuOpen(false)} href="#testimonial">
        Testimonial
      </a> */}
      <a onClick={() => setMenuOpen(false)} href="#contact">
        Contact
      </a>
    </div>
    <a href="https://drive.google.com/file/d/1xwe9zWFc7dxTslzDv4pMl2axd37S-V98/view?usp=sharing">
      <button>Resume</button>
    </a>
  </>
);

export default Header;
