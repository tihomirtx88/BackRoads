import { socialLinks } from "../data";
import { Link } from "react-router-dom";
import PageLinks from "./PageLinks";
import SocialLink from "@/components/SocialLink";

const Footer = () => {
  return (
    <>
      <footer className="section footer">
        {/* <ul className="footer-links">
          {pageLinks.map((link) => {
            const { id, href, text } = link;
            return (
              <li key={id}>
                <Link href={href} className="footer-link">
                  {text}
                </Link>
              </li>
            );
          })}
        </ul> */}
        <PageLinks parentClass="footer-links" itemClass="footer-link"/>
        <ul className="footer-icons">
        {socialLinks.map((link) => {
            return (
               <SocialLink key={link.id} {...link} itemClass='footer-icon' />
            );
          })}
         
       
        </ul>
        <p className="copyright">
          copyright © Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
