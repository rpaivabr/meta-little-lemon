import "./Footer.css";
import logo from "../../assets/images/Logo.svg";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <img src={logo} alt="logo" className="footer-logo" />
        <div className="footer-info">
          <div>
            <div className="footer-title">Navigation</div>
            <ul className="footer-links">
              <li>
                <a href="home">Home</a>
              </li>
              <li>
                <a href="about">About</a>
              </li>
              <li>
                <a href="menu">Menu</a>
              </li>
              <li>
                <a href="reservations">Reservations</a>
              </li>
              <li>
                <a href="order">Order Online</a>
              </li>
              <li>
                <a href="login">Login</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-title">Contact</div>
            <ul className="footer-links">
              <li>Address</li>
              <li>Phone number</li>
              <li>email</li>
            </ul>
          </div>
          <div>
            <div className="footer-title">Social Media Links</div>
            <ul className="footer-links">
              <li>Address</li>
              <li>Phone number</li>
              <li>email</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
