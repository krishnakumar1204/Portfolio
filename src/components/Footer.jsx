import React from "react";
import {
  AiFillCode,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";
import imgFooter from "../assets/logo.jpg";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={imgFooter}
          alt="Founder"
        />

        <h2>Krishna Kumar</h2>
        <p>©2023 Made with ❤️ by Krishna.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/krishna-kumar1508/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/krishnakumar1204" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="https://www.codingninjas.com/codestudio/profile/4508409b-7fc1-47ec-8002-9f76892b6811" target={"blank"}>
            <AiFillCode />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
