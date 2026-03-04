import { NavLink, Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'; 

const Navbar = () => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-2 sticky-top">
      <div className="container">
        {/* Logo Section */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://res.cloudinary.com/dgzksmwpz/image/upload/v1772531480/Intertwined_Monogram_Logo_y7koz2.png"
            alt="bookmyhall logo"
            className="img-fluid"
            style={{ 
                height: "auto", 
                maxHeight: "clamp(40px, 8vw, 60px)" 
            }}
          />
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0 shadow-none" 
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2 text-center py-3 py-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link px-3 custom-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-3 custom-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-3 custom-link" to="/services">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link px-3 custom-link" to="/contact">Contact</NavLink>
            </li>
               <li className="nav-item">
              <NavLink className="nav-link px-3 custom-link" to="/bookings">My Bookings</NavLink>
            </li>
            <li className="nav-item ms-lg-3">
              <button
                className="btn btn-primary w-100 w-lg-auto mt-3 mt-lg-0 px-4"
                onClick={onClickLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;