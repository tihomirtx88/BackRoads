import { socialLinks } from "@/data";
import PageLinks from "./PageLinks";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src="./images/logo.svg" className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars" />
            </button>
          </div>

          {/* <ul className="nav-links" id="nav-links">
            {pageLinks.map((link) => {
              return (
                <li key={link.id}>
                  <Link href={link.href} className="nav-link">
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul> */}
          <PageLinks parentClass="nav-links" itemClass="nav-link"/>
          <ul className="nav-icons">
            {socialLinks.map((link) => {
              return (
                <SocialLink {...link} key={link.id} itemClass="nav-icon" />
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
