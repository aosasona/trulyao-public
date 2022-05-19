import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import LinkIcon from "./LinkIcon";

const Footer = () => {
  return (
    <footer className="flex justify-evenly lg:justify-between py-2 px-5 mt-6 mb-[5vh] lg:mb-[8vh]">
      <LinkIcon link="twitter.com/trulyao">
        <FaTwitter size={20} />
      </LinkIcon>
      <LinkIcon link="github.com/aosasona">
        <FaGithub size={20} />
      </LinkIcon>
    </footer>
  );
};

export default Footer;
