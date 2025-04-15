import { Link  } from "react-router-dom";
import "./Footer.css";
export default function Footar() {
  const socialLinks = [
    { icon: "fab fa-twitter", path: "/" },
    { icon: "fab fa-instagram", path: "/" },
    { icon: "fa-brands fa-facebook", path: "/" },
  ];
  return (
    <>
      <footer className="footer-section">
        <div className="social-links-warp">
          <div className="container text-center">
            <div className="social-links">
              <ul className="navbar-nav d-flex flex-row">
                {socialLinks.map((social, index) => (
                  <li className="nav-item px-3 me-lg-0" key={index}>
                    <Link to={social.path}>
                      <i className={social.icon} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <p className="copyright-text mt-4">
              © 2025 Fawzy Basuony. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
