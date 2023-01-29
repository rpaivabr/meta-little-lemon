import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import './Nav.css';

export const Nav = () => {
  return (
    <nav>
      <div className="container">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="menu">Menu</Link>
          </li>
          <li>
            <Link to="reservations">Reservations</Link>
          </li>
          <li>
            <Link to="order">Order Online</Link>
          </li>
          <li>
            <Link to="login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
