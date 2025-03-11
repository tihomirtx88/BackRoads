import { socialLinks } from "../data";
import Link from "react-dom";
import PageLinks from "./PageLinks";

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
            const { id, href, icon } = link;
            return (
              <li key={id}>
              <Link
                href={href}
                target="_blank"
                className="footer-icon"
                ref="noreferrer"
              >
                <i className={icon} />
              </Link>
            </li>
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
